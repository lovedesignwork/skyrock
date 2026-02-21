import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/config';

export const metadata: Metadata = {
  ...generatePageMetadata(
    'Checkout - Complete Your Booking',
    'Complete your Sky Rock Khao Lak booking. Secure payment with Stripe. Your adventure awaits!',
    '/checkout'
  ),
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
