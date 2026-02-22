import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-01-28.clover',
});

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ref: string }> }
) {
  try {
    const { ref } = await params;
    const bookingRef = ref;
    
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');
    const paymentIntentId = searchParams.get('payment_intent');

    // Fetch the booking first
    const { data: booking, error } = await supabaseAdmin
      .from('bookings')
      .select(`
        *,
        packages (*),
        booking_customers (*),
        booking_addons (*, promo_addons (*)),
        booking_transport (*)
      `)
      .eq('booking_ref', bookingRef)
      .single();

    if (error || !booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    // If payment_intent is provided, verify it matches the booking
    if (paymentIntentId) {
      if (booking.stripe_payment_intent_id === paymentIntentId) {
        return NextResponse.json(booking);
      }
      
      // Verify with Stripe
      try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        if (paymentIntent.metadata?.booking_ref === bookingRef || 
            paymentIntent.metadata?.booking_id === booking.id) {
          return NextResponse.json(booking);
        }
      } catch {
        // Continue to check other methods
      }
    }

    // If session_id is provided, verify it matches
    if (sessionId) {
      if (booking.stripe_checkout_session_id === sessionId) {
        return NextResponse.json(booking);
      }
      
      // Verify with Stripe Checkout Session
      try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        if (session.metadata?.booking_ref === bookingRef) {
          return NextResponse.json(booking);
        }
      } catch {
        // Continue to check other methods
      }
    }

    // If the booking is confirmed/completed and we have the correct booking_ref,
    // allow access (for cases where the user comes from email link)
    if (booking.status === 'confirmed' || booking.status === 'completed') {
      // For confirmed bookings, we can be more lenient
      // This allows users to access their booking from email confirmation links
      return NextResponse.json(booking);
    }

    // If no valid verification provided
    if (!sessionId && !paymentIntentId) {
      return NextResponse.json(
        { error: 'Unauthorized - verification required' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: 'Unauthorized - invalid verification' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Error fetching booking:', error);
    return NextResponse.json(
      { error: 'Failed to fetch booking' },
      { status: 500 }
    );
  }
}
