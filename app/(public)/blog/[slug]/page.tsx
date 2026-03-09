import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight } from 'lucide-react';
import { Container, Section } from '@/components/ui';
import { formatDate } from '@/lib/utils';
import { siteConfig } from '@/lib/seo/config';
import { ArticleSchema, BreadcrumbSchema } from '@/lib/seo/structured-data';
import { supabaseAdmin } from '@/lib/supabase/server';
import { getBlogPostBySlug, getPublishedBlogPosts } from '@/lib/data/blog-posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

async function getBlogPost(slug: string) {
  // Try Supabase first
  const { data: post, error } = await supabaseAdmin
    .from('blog_posts')
    .select(`
      *,
      author:admin_users!author_id(name)
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (!error && post) {
    return {
      ...post,
      authorName: post.author?.name || 'Sky Rock Team',
      readTime: Math.ceil((post.content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0) / 200) || 5,
    };
  }

  // Fall back to static data
  const staticPost = getBlogPostBySlug(slug);
  if (staticPost) {
    return {
      ...staticPost,
      authorName: 'Sky Rock Team',
      readTime: Math.ceil((staticPost.content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0) / 200) || 5,
    };
  }

  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  const url = `${siteConfig.url}/blog/${slug}`;
  const image = post.og_image || post.featured_image || siteConfig.ogImage;

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    authors: [{ name: post.authorName }],
    alternates: {
      canonical: post.canonical_url || url,
    },
    robots: {
      index: !post.no_index,
      follow: !post.no_follow,
    },
    openGraph: {
      type: 'article',
      title: post.og_title || post.seo_title || `${post.title} | ${siteConfig.name}`,
      description: post.og_description || post.seo_description || post.excerpt,
      url,
      images: [
        {
          url: image.startsWith('http') ? image : `${siteConfig.url}${image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.published_at,
      authors: [post.authorName],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.twitter_title || post.seo_title || post.title,
      description: post.twitter_description || post.seo_description || post.excerpt,
      images: [(post.twitter_image || image).startsWith('http') ? (post.twitter_image || image) : `${siteConfig.url}${post.twitter_image || image}`],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleUrl = `${siteConfig.url}/blog/${slug}`;
  const articleImage = post.featured_image?.startsWith('http') 
    ? post.featured_image 
    : post.featured_image 
      ? `${siteConfig.url}${post.featured_image}` 
      : `${siteConfig.url}${siteConfig.ogImage}`;

  // Get related posts for the sidebar
  const allPosts = getPublishedBlogPosts();
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0A1612]">
      <ArticleSchema
        title={post.title}
        description={post.seo_description || post.excerpt || ''}
        image={articleImage}
        url={articleUrl}
        datePublished={post.published_at}
        author={post.authorName}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Blog', url: `${siteConfig.url}/blog` },
          { name: post.title, url: articleUrl },
        ]}
      />

      {/* Hero Section with Featured Image */}
      <section className="relative pt-24">
        {/* Background */}
        <div className="absolute inset-0 h-[500px]">
          {post.featured_image && (
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${post.featured_image})` }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A1612]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        <Container className="relative z-10 pt-12 pb-20">
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 hover:text-white hover:bg-white/20 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Category Badge */}
          {post.category && (
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-bold rounded-full mb-6">
              {post.category}
            </span>
          )}

          {/* Title */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-4xl"
            style={{ lineHeight: '1.1' }}
          >
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">{post.authorName}</p>
                <p className="text-xs text-white/50">Author</p>
              </div>
            </div>
            {post.published_at && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{formatDate(post.published_at)}</span>
              </div>
            )}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{post.readTime} min read</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <Section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1612] to-[#0D2818]" />
        
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article 
                className="p-8 md:p-12 rounded-3xl relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
                
                <div 
                  className="relative z-10 prose prose-lg max-w-none text-white/80 leading-relaxed
                    [&_h1]:text-white [&_h1]:text-3xl [&_h1]:font-heading [&_h1]:font-bold [&_h1]:mt-10 [&_h1]:mb-4
                    [&_h2]:text-white [&_h2]:text-2xl [&_h2]:font-heading [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-emerald-500/30
                    [&_h3]:text-white [&_h3]:text-xl [&_h3]:font-heading [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
                    [&_p]:mb-5 [&_p]:text-white/70
                    [&_ul]:list-none [&_ul]:pl-0 [&_ul]:mb-6 [&_ul]:space-y-3
                    [&_ul_li]:relative [&_ul_li]:pl-6 [&_ul_li]:text-white/70
                    [&_ul_li]:before:content-[''] [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:top-2 [&_ul_li]:before:w-2 [&_ul_li]:before:h-2 [&_ul_li]:before:bg-emerald-500 [&_ul_li]:before:rounded-full
                    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2
                    [&_ol_li]:text-white/70 [&_ol_li]:pl-2
                    [&_strong]:text-white [&_strong]:font-semibold
                    [&_a]:text-emerald-400 [&_a]:no-underline [&_a]:hover:text-emerald-300 [&_a]:transition-colors
                    [&_blockquote]:border-l-4 [&_blockquote]:border-emerald-500 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:my-8 [&_blockquote]:text-white/60
                    [&_img]:rounded-xl [&_img]:my-8 [&_img]:shadow-xl"
                  dangerouslySetInnerHTML={{ __html: post.content || '' }}
                />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                    <p className="text-white/50 text-sm mb-4">Tags:</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string) => (
                        <span 
                          key={tag} 
                          className="px-4 py-2 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 rounded-full text-sm text-white/70 hover:text-emerald-300 transition-all cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Share Card */}
                <div 
                  className="p-6 rounded-2xl"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Share2 className="w-5 h-5 text-emerald-400" />
                    <span className="font-heading font-bold text-white">Share Article</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-sm transition-all">
                      Twitter
                    </button>
                    <button className="flex-1 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-sm transition-all">
                      Facebook
                    </button>
                  </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div>
                    <h3 className="font-heading font-bold text-white mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></span>
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link 
                          key={relatedPost.slug} 
                          href={`/blog/${relatedPost.slug}`}
                          className="group block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 transition-all"
                        >
                          <h4 className="text-white font-medium text-sm group-hover:text-emerald-300 transition-colors line-clamp-2 mb-2">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center gap-2 text-white/40 text-xs">
                            <Clock className="w-3 h-3" />
                            <span>{Math.ceil((relatedPost.content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0) / 200) || 5} min read</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Card */}
                <div 
                  className="p-6 rounded-2xl text-center relative overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)'
                  }}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                      }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-heading font-bold text-white text-lg mb-2">Ready for Adventure?</h3>
                    <p className="text-white/80 text-sm mb-4">Book your zipline experience today!</p>
                    <Link 
                      href="/booking"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-bold rounded-xl hover:bg-white/90 transition-all"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
