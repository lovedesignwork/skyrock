import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Container, Section } from '@/components/ui';
import { formatDate } from '@/lib/utils';
import { generatePageMetadata } from '@/lib/seo/config';
import { supabaseAdmin } from '@/lib/supabase/server';
import { getPublishedBlogPosts, BlogPost } from '@/lib/data/blog-posts';

export const metadata: Metadata = generatePageMetadata(
  'Blog - Adventure Tips & Stories',
  'Read the latest news, adventure tips, safety guides, and stories from Sky Rock Khao Lak. Discover zipline experiences, travel tips, and rainforest insights.',
  '/blog'
);

export const revalidate = 60;

async function getBlogPosts() {
  // Try to get posts from Supabase first
  const { data: posts, error } = await supabaseAdmin
    .from('blog_posts')
    .select('id, title, slug, excerpt, featured_image, category, published_at, content')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  // If we have posts from Supabase, use them
  if (!error && posts && posts.length > 0) {
    return posts.map(post => ({
      ...post,
      readTime: Math.ceil((post.content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0) / 200) || 5,
    }));
  }

  // Otherwise, fall back to static blog posts
  const staticPosts = getPublishedBlogPosts();
  return staticPosts.map(post => ({
    ...post,
    readTime: Math.ceil((post.content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0) / 200) || 5,
  }));
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-[#0A1612]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1612] via-[#0D2818] to-[#1B4332]" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'
            }}
          />
        </div>

        <Container className="relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Adventure Stories & Tips</span>
            </div>
            <h1 
              className="text-5xl md:text-7xl font-heading font-bold mb-4"
              style={{ 
                background: 'linear-gradient(90deg, #ffffff 0%, #10b981 50%, #06b6d4 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'rainbow-flow 8s linear infinite'
              }}
            >
              OUR BLOG
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Tips, stories, and news from Thailand's most thrilling zipline adventure park
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-500 shadow-2xl hover:shadow-emerald-500/20">
                {/* Background Image */}
                <div className="relative h-[400px] md:h-[500px]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${featuredPost.featured_image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6 md:top-8 md:left-8">
                    <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                      FEATURED
                    </span>
                  </div>

                  {/* Category */}
                  {featuredPost.category && (
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium rounded-full mb-4 w-fit">
                      {featuredPost.category}
                    </span>
                  )}

                  <h2 
                    className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors"
                  >
                    {featuredPost.title}
                  </h2>

                  <p className="text-white/70 text-lg mb-6 max-w-2xl line-clamp-2">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-white/50">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{formatDate(featuredPost.published_at)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/50">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{featuredPost.readTime} min read</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 group-hover:gap-4 transition-all">
                      <span className="text-sm font-medium">Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </Container>
      </section>

      {/* Blog Grid Section */}
      <Section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B4332] to-[#0A1612]" />
        
        <Container className="relative z-10">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <span className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></span>
            <h2 className="text-2xl font-heading font-bold text-white">Latest Articles</h2>
          </div>

          {otherPosts.length === 0 && !featuredPost ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white/30" />
              </div>
              <p className="text-white/50 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <article 
                    className="h-full rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 relative"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 100%)' }}
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />
                    
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${post.featured_image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1612] via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      {post.category && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                            {post.category}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 relative z-10">
                      <h3 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-white/50 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4 text-white/40 text-xs">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.published_at)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime} min
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 via-[#0A1612] to-cyan-900/50" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
        </div>
        
        <Container className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready for Your Adventure?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Experience the thrill of ziplining through Khao Lak's pristine rainforest
          </p>
          <Link 
            href="/booking"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all hover:-translate-y-1"
          >
            Book Your Adventure
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Container>
      </section>
    </main>
  );
}
