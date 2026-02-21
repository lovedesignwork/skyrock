# Sky Rock - Project Setup Guide

## Overview

Sky Rock is an extreme adventure park booking website, built on the same architecture as Hanuman World but with distinct branding and potentially different activities.

## Company Information

- **Operating Company**: SKY ROCK ADVENTURE CO., LTD.
- **Payment Processing**: Chamnanthang Co., Ltd. (alias ONEBOOKING)
- **Booking Prefix**: `SR-` (e.g., SR-000001)

## Branding

### Colors
- **Primary (Red)**: `#DC2626`
- **Primary Dark**: `#991B1B`
- **Primary Light**: `#EF4444`
- **Accent (Olive/Army Green)**: `#5b5d28`
- **Background**: `#0F0F0F` (dark theme)

### Fonts
- **Heading**: Fugaz One (expressive, active) - https://fonts.google.com/specimen/Fugaz+One
- **Body**: Inter (clean, readable)

### Logo
- Place logo at: `/public/images/logo.png`
- Place logo (white version) at: `/public/images/logo-white.png`

## Required Updates

### 1. Branding Updates (CRITICAL)
All files need "Hanuman World" replaced with "Sky Rock":
- Components in `/components/`
- Pages in `/app/(public)/`
- Admin pages in `/app/admin/`
- Email templates
- SEO metadata

### 2. Legal Pages
Update company name in all legal pages:
- `/app/(public)/privacy/page.tsx` - Replace "Sky World Adventures Co., Ltd." with "SKY ROCK ADVENTURE CO., LTD."
- `/app/(public)/terms/page.tsx` - Same replacement
- `/app/(public)/refund/page.tsx` - Same replacement
- `/app/(public)/cookies/page.tsx` - Same replacement
- `/app/(public)/safety/page.tsx` - Same replacement + update safety requirements for Sky Rock activities

### 3. Contact Information
Update all contact details:
- Email: `support@skyrock.com` (or actual domain)
- Phone: (Sky Rock phone number)
- Address: (Sky Rock location)

### 4. Footer Component
Update `/components/layout/Footer.tsx`:
- Copyright: "© {year} SKY ROCK ADVENTURE CO., LTD. All rights reserved."
- Payment line: "Online payments processed by Chamnanthang Co., Ltd. (ONEBOOKING)"

### 5. Packages/Activities
Customize for Sky Rock's offerings:
- Rock Climbing
- Bungee Jumping
- Via Ferrata
- Extreme Swing
- (Add/remove as needed)

### 6. Environment Variables
Copy `.env.example` to `.env.local` and configure:
- Supabase credentials (new project or shared)
- Stripe keys (new account or shared)
- App URL
- OneBooking integration

### 7. Database
If using separate Supabase project:
- Run migrations from `/supabase/migrations/`
- Update `WEBSITE_ID` to `sky-rock`

If sharing Supabase with other sites:
- Ensure `website_id` column filtering is in place
- Use `sky-rock` as the website identifier

### 8. OneBooking Integration
Update booking sync to use:
- `WEBSITE_ID=sky-rock`
- Booking prefix: `SR-`

## File Structure

```
SKY ROCK/
├── app/
│   ├── (public)/          # Public pages
│   │   ├── privacy/       # Privacy Policy ✓
│   │   ├── terms/         # Terms & Conditions ✓
│   │   ├── refund/        # Refund Policy ✓
│   │   ├── cookies/       # Cookie Policy ✓
│   │   ├── safety/        # Safety Information ✓
│   │   ├── booking/       # Booking page
│   │   ├── checkout/      # Checkout flow
│   │   └── ...
│   ├── admin/             # Admin panel
│   └── api/               # API routes
├── components/
│   ├── layout/            # Header, Footer, etc.
│   ├── home/              # Homepage components
│   └── ...
├── lib/                   # Utilities, configs
├── public/
│   └── images/            # Add Sky Rock images/logo here
└── docs/
    └── SKY_ROCK_SETUP.md  # This file
```

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment file:
   ```bash
   cp .env.example .env.local
   ```

3. Configure `.env.local` with your credentials

4. Run development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000

## Deployment

1. Create GitHub repository
2. Push code
3. Connect to Vercel
4. Configure environment variables in Vercel
5. Deploy

## Security Notes

- The thank you page (`/checkout/success`) has session-based security
- Booking details require valid `session_id` parameter
- This prevents booking reference enumeration attacks
