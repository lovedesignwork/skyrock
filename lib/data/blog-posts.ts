export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  category: string;
  tags: string[];
  status: 'published' | 'draft';
  published_at: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'SkyRock Zipline Khao Lak: Soar In Thailand\'s Best Rainforest',
    slug: 'skyrock-zipline-khao-lak-soar-in-thailands-best-rainforest',
    excerpt: 'Thailand is famous for its beaches, temples, and tropical landscapes, but for travelers looking for excitement beyond the shoreline, adventure parks offer an unforgettable experience.',
    content: `<p>Thailand is famous for its beaches, temples, and tropical landscapes, but for travelers looking for excitement beyond the shoreline, adventure parks offer an unforgettable experience.</p>

<h2>Why Choose Sky Rock Khao Lak?</h2>
<p>Sky Rock Khao Lak stands out as one of the premier zipline destinations in Thailand. Located in the heart of Phang Nga Province, our park offers a unique combination of thrilling adventure and stunning natural beauty.</p>

<h2>What Makes Our Zipline Experience Special</h2>
<ul>
<li><strong>27 Platforms</strong> - Our full course features 27 platforms through pristine rainforest</li>
<li><strong>Professional Guides</strong> - Safety-certified instructors with years of experience</li>
<li><strong>World-Class Equipment</strong> - Petzl safety gear and regularly inspected lines</li>
<li><strong>Stunning Views</strong> - Panoramic views of Khao Lak's jungle canopy</li>
</ul>

<h2>Perfect for All Adventure Levels</h2>
<p>Whether you're a first-time zipliner or an experienced thrill-seeker, Sky Rock has packages designed for every comfort level. Our ROCK 1, ROCK 2, and ROCK 3 packages offer varying lengths and intensities to match your adventure appetite.</p>

<h2>Book Your Adventure Today</h2>
<p>Don't miss the chance to experience Thailand's best rainforest zipline. Book online for the best rates and instant confirmation!</p>`,
    featured_image: '/images/Package image/SKYROCK25.jpg',
    category: 'Adventure',
    tags: ['zipline', 'khao lak', 'adventure', 'thailand'],
    status: 'published',
    published_at: '2026-02-15T10:00:00Z',
  },
  {
    id: 'blog-2',
    title: 'Sky Rock Khao Lak Zipline Park: 2026 Guide to the Best Zipline',
    slug: 'sky-rock-khao-lak-zipline-park-2026-guide',
    excerpt: 'Sky Rock Khao Lak Zipline is one of the most exciting outdoor activities in southern Thailand. Located in the green hills of Phang Nga Province.',
    content: `<p>Sky Rock Khao Lak Zipline is one of the most exciting outdoor activities in southern Thailand. It is located in the green hills of Phang Nga Province, offering an adventure like no other.</p>

<h2>2026 Complete Guide</h2>
<p>Planning your visit to Sky Rock? Here's everything you need to know for the perfect zipline experience in 2026.</p>

<h2>Operating Hours</h2>
<p>We're open daily from 08:00 AM to 06:00 PM. The best time to visit is early morning when the jungle is cool and misty, creating a magical atmosphere for your adventure.</p>

<h2>What to Bring</h2>
<ul>
<li>Comfortable closed-toe shoes</li>
<li>Light, breathable clothing</li>
<li>Sunscreen and insect repellent</li>
<li>Camera or GoPro (secured with strap)</li>
<li>Sense of adventure!</li>
</ul>

<h2>Package Options</h2>
<p><strong>Rock & Roll 1</strong> - Zipline 27 Platforms + Roller + Light Lunch (~2.5 hrs) - ฿3,250</p>
<p><strong>Rock & Roll 2</strong> - Zipline 14 Platforms + Roller + Light Lunch (~1.5 hrs) - ฿2,350</p>
<p><strong>Rock & Roll 3</strong> - Zipline 10 Platforms + Roller + Light Lunch (~1 hr) - ฿1,950</p>
<p><strong>Rock 1</strong> - 27 Station (~2 hrs) - ฿2,550</p>
<p><strong>Rock 2</strong> - 14 Station (~45 mins - 1 hr) - ฿1,750</p>
<p><strong>Rock 3</strong> - 10 Station (~20-30 mins) - ฿1,450</p>
<p><strong>Roller Rock</strong> - Flexible time - ฿1,000</p>

<h2>Safety First</h2>
<p>All our equipment meets international safety standards. Our guides are certified professionals who prioritize your safety while ensuring maximum fun!</p>`,
    featured_image: '/images/Package image/SKYROCK38.jpg',
    category: 'Guide',
    tags: ['guide', 'zipline', '2026', 'packages'],
    status: 'published',
    published_at: '2026-02-10T10:00:00Z',
  },
  {
    id: 'blog-3',
    title: 'Family Adventure in Khao Lak on the Best Zipline Adventure',
    slug: 'family-adventure-khao-lak-best-zipline',
    excerpt: 'Sky Rock Zipline Adventure Khao Lak is one of the most popular adventure activities for families in the Khao Lak region.',
    content: `<p>Sky Rock Zipline Adventure Khao Lak is one of the most popular adventure activities for families in the Khao Lak region. Here's why families love our park!</p>

<h2>Perfect for All Ages</h2>
<p>Children as young as 4 years old can participate in our zipline adventures (with weight requirements of 20-120kg). It's a fantastic way to create lasting family memories!</p>

<h2>Why Families Choose Sky Rock</h2>
<ul>
<li><strong>Safe Environment</strong> - Child-friendly equipment and extra attention from guides</li>
<li><strong>Educational Experience</strong> - Learn about the rainforest ecosystem</li>
<li><strong>Bonding Time</strong> - Share thrilling moments together</li>
<li><strong>Photo Opportunities</strong> - Capture amazing family photos in the jungle</li>
</ul>

<h2>Tips for Families</h2>
<p>Book the morning session when kids have the most energy. Our ROCK 3 package (10 platforms) is perfect for families with younger children - it's exciting but not too long.</p>

<h2>Meal Options</h2>
<p>Our ROCK 1 package includes a delicious Thai meal, perfect for hungry adventurers after their zipline experience!</p>

<h2>Create Memories That Last</h2>
<p>There's nothing quite like seeing your child's face light up as they soar through the jungle canopy. Book your family adventure today!</p>`,
    featured_image: '/images/Package image/SKYROCK64.jpg',
    category: 'Family',
    tags: ['family', 'kids', 'adventure', 'khao lak'],
    status: 'published',
    published_at: '2026-02-05T10:00:00Z',
  },
  {
    id: 'blog-4',
    title: 'How to Get to Sky Rock Khao Lak: The Ultimate Guide',
    slug: 'how-to-get-to-sky-rock-khao-lak',
    excerpt: 'Khao Lak is a quiet coastal town in Phang Nga Province, north of Phuket. Here\'s how to reach Sky Rock for your zipline adventure.',
    content: `<p>Khao Lak is a quiet coastal town in Phang Nga Province. It sits north of Phuket, along Thailand's stunning Andaman coast. Here's everything you need to know about getting to Sky Rock.</p>

<h2>From Phuket</h2>
<p>Sky Rock is approximately 80km north of Phuket International Airport. The journey takes about 1.5 hours by car.</p>
<ul>
<li><strong>By Taxi</strong> - Private taxi from Phuket airport (approximately ฿1,500-2,000)</li>
<li><strong>By Minivan</strong> - Shared minivan services available</li>
<li><strong>By Rental Car</strong> - Easy drive along Highway 4</li>
</ul>

<h2>From Khao Lak Hotels</h2>
<p>If you're staying in Khao Lak, we offer complimentary shared transfer with our zipline packages that include transfer. Simply provide your hotel name when booking!</p>

<h2>Our Location</h2>
<p>Sky Rock is located in the hills behind Khao Lak, surrounded by pristine rainforest. The exact location will be provided upon booking confirmation.</p>

<h2>Parking</h2>
<p>Free parking is available for guests who drive themselves to the park.</p>

<h2>Best Time to Arrive</h2>
<p>We recommend arriving 15-30 minutes before your scheduled time slot to complete registration and safety briefing.</p>`,
    featured_image: '/images/SKYROCK75.jpg',
    category: 'Travel',
    tags: ['directions', 'transport', 'khao lak', 'phuket'],
    status: 'published',
    published_at: '2026-01-28T10:00:00Z',
  },
  {
    id: 'blog-5',
    title: 'Ziplining at the Ultimate Adventure Park in the Heart of Nature',
    slug: 'ziplining-ultimate-adventure-park-nature',
    excerpt: 'Khao Lak is famous for its peaceful beaches and relaxed atmosphere. However, beyond the shoreline lies a different world of adventure.',
    content: `<p>Khao Lak is famous for its peaceful beaches and relaxed atmosphere. However, beyond the shoreline lies a different world. Dense rainforest, rolling hills, and the thrill of adventure await at Sky Rock.</p>

<h2>Immerse Yourself in Nature</h2>
<p>Our zipline course takes you through one of Thailand's most beautiful rainforest ecosystems. As you soar between platforms, you'll experience:</p>
<ul>
<li>Ancient trees towering above the jungle floor</li>
<li>Exotic birds and wildlife in their natural habitat</li>
<li>Breathtaking panoramic views of the Andaman region</li>
<li>The peaceful sounds of the forest</li>
</ul>

<h2>More Than Just Ziplining</h2>
<p>At Sky Rock, we believe in providing a complete nature experience. Our guides share knowledge about the local ecosystem, making your adventure both thrilling and educational.</p>

<h2>Eco-Friendly Adventure</h2>
<p>We're committed to preserving the natural beauty of Khao Lak. Our park operates with minimal environmental impact, and we actively participate in local conservation efforts.</p>

<h2>The Perfect Escape</h2>
<p>Step away from the beach crowds and discover the wild side of Khao Lak. Your adventure in the heart of nature awaits!</p>`,
    featured_image: '/images/Package image/SKYROCK91.jpg',
    category: 'Nature',
    tags: ['nature', 'eco-tourism', 'rainforest', 'adventure'],
    status: 'published',
    published_at: '2026-01-20T10:00:00Z',
  },
  {
    id: 'blog-6',
    title: 'Best Reasons to Try Sky Rock Khao Lak the Ultimate Zipline Park',
    slug: 'best-reasons-try-sky-rock-khao-lak',
    excerpt: 'Known for its calm beaches, Khao Lak offers much more than relaxation. Here are the best reasons to try Sky Rock zipline adventure.',
    content: `<p>Known for its calm beaches, Khao Lak offers much more than relaxation. Here are the top reasons why Sky Rock should be on your Thailand adventure list!</p>

<h2>1. World-Class Safety Standards</h2>
<p>Your safety is our top priority. We use Petzl equipment, conduct daily inspections, and our guides undergo rigorous training and certification.</p>

<h2>2. Stunning Natural Setting</h2>
<p>Unlike urban adventure parks, Sky Rock is set in pristine rainforest. Every zipline offers breathtaking views of untouched nature.</p>

<h2>3. Packages for Everyone</h2>
<p>From beginners to thrill-seekers, we have the perfect package. Choose from 10, 14, or 27 platforms based on your comfort level.</p>

<h2>4. Unique Roller Zipline</h2>
<p>Experience our one-of-a-kind Roller Zipline - combining the thrill of a roller coaster with ziplining through the jungle!</p>

<h2>5. Convenient Location</h2>
<p>Easy access from Phuket and Khao Lak hotels. We even offer complimentary transfers with select packages!</p>

<h2>6. Professional Photography</h2>
<p>Capture your adventure with our professional photo and video services. Take home memories that last forever!</p>

<h2>7. Delicious Thai Cuisine</h2>
<p>Our ROCK 1 package includes an authentic Thai meal. Refuel after your adventure with local flavors!</p>

<h2>Ready for Adventure?</h2>
<p>Book now and discover why Sky Rock is Khao Lak's premier zipline destination!</p>`,
    featured_image: '/images/Package image/SKYROCK102.jpg',
    category: 'Adventure',
    tags: ['reasons', 'zipline', 'adventure', 'khao lak'],
    status: 'published',
    published_at: '2026-01-15T10:00:00Z',
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPublishedBlogPosts(): BlogPost[] {
  return blogPosts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
}
