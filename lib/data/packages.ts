import { Package } from '@/types';

export const packages: Package[] = [
  {
    id: 'rock-1',
    slug: 'rock-1',
    name: 'ROCK 1 - 27 PLATFORMS',
    description: 'Our ultimate adventure package featuring 27 platforms through the stunning Khao Lak jungle canopy. Includes a delicious Thai meal to complete your adventure!',
    shortDescription: 'Full 27 platform zipline experience with meal included',
    price: 2950,
    duration: 'Up to 3 hours',
    category: 'combined',
    image: '/images/Package%20image/SKYROCK25.jpg',
    gallery: [],
    features: ['27 Platform Zipline Course', 'Multiple Ziplines', 'Sky Bridges', 'Complimentary Thai Meal', 'Professional Guides'],
    included: ['Safety equipment', 'Professional guide', 'Insurance', 'Thai meal', 'Drinking water'],
    requirements: ['Weight: 20-120 kg', 'Age: 4-80 years', 'Good health condition'],
    featured: true,
    popular: true,
    stats: {
      platforms: 27,
      ziplines: 14,
      skyBridge: 4,
      abseilPoints: 3,
    },
    includesMeal: true,
    includesTransfer: false,
  },
  {
    id: 'rock-2',
    slug: 'rock-2',
    name: 'ROCK 2 - 14 PLATFORMS',
    description: 'A thrilling mid-range adventure with 14 platforms. Perfect balance of excitement and time. No meal included.',
    shortDescription: '14 platform zipline adventure (no meal)',
    price: 1950,
    duration: 'Up to 2 hours',
    category: 'combined',
    image: '/images/Package%20image/SKYROCK38.jpg',
    gallery: [],
    features: ['14 Platform Zipline Course', 'Multiple Ziplines', 'Sky Bridges', 'Professional Guides'],
    included: ['Safety equipment', 'Professional guide', 'Insurance', 'Drinking water'],
    requirements: ['Weight: 20-120 kg', 'Age: 4-80 years', 'Good health condition'],
    featured: true,
    popular: false,
    stats: {
      platforms: 14,
      ziplines: 7,
      skyBridge: 2,
      abseilPoints: 2,
    },
    includesMeal: false,
    includesTransfer: false,
  },
  {
    id: 'rock-3',
    slug: 'rock-3',
    name: 'ROCK 3 - 10 PLATFORMS',
    description: 'Perfect for beginners or those short on time. Experience 10 platforms of jungle adventure. No meal included.',
    shortDescription: 'Beginner-friendly 10 platform course (no meal)',
    price: 1550,
    duration: 'Up to 1.5 hours',
    category: 'combined',
    image: '/images/Package%20image/SKYROCK64.jpg',
    gallery: [],
    features: ['10 Platform Zipline Course', 'Multiple Ziplines', 'Professional Guides'],
    included: ['Safety equipment', 'Professional guide', 'Insurance', 'Drinking water'],
    requirements: ['Weight: 20-120 kg', 'Age: 4-80 years', 'Good health condition'],
    featured: true,
    popular: false,
    stats: {
      platforms: 10,
      ziplines: 4,
      abseilPoints: 2,
    },
    includesMeal: false,
    includesTransfer: false,
  },
  {
    id: 'roller',
    slug: 'roller',
    name: 'ROLLER',
    description: 'Experience the unique roller zipline - a thrilling ride combining the excitement of a roller coaster with ziplining through the jungle!',
    shortDescription: 'Exciting roller zipline experience',
    price: 1000,
    duration: '30-45 minutes',
    category: 'roller',
    image: '/images/Package%20image/SKYROCK91.jpg',
    gallery: [],
    features: ['Roller Zipline Track', 'Unique Roller Coaster Experience', 'Scenic Forest Views', 'Thrilling Ride'],
    included: ['Safety equipment', 'Professional guide', 'Insurance'],
    requirements: ['Weight: 30-100 kg', 'Age: 8-60 years', 'Good health condition'],
    featured: true,
    popular: false,
    includesMeal: false,
    includesTransfer: false,
  },
];

export function getPackageById(id: string): Package | undefined {
  return packages.find(pkg => pkg.id === id);
}

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find(pkg => pkg.slug === slug);
}

export function getPackagesByCategory(category: Package['category']): Package[] {
  return packages.filter(pkg => pkg.category === category);
}

export function getFeaturedPackages(): Package[] {
  return packages.filter(pkg => pkg.featured);
}
