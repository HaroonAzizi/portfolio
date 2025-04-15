import Head from "next/head";
import { getPostBySlug, getAllPosts } from "../../utils/blog";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaArrowLeft, FaTag } from "react-icons/fa";

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <div className="py-20 bg-theme-primary min-h-screen">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-theme-text mb-4">
            Post Not Found
          </h1>
          <p className="text-theme-text-muted mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/blog" className="btn-modern inline-flex items-center">
            <FaArrowLeft className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8TY1JXQTN4"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8TY1JXQTN4');
            `,
          }}
        />
        <title>{post.title} | Haroon Azizi</title>
        <meta name="description" content={post.excerpt} />
        <meta
          name="keywords"
          content={`${
            post.category
          }, Haroon Azizi, blog, ${post.title.toLowerCase()}`}
        />
        <link
          rel="canonical"
          href={`https://haroonazizi.com/blog/${post.slug}`}
        />

        <meta property="og:title" content={`${post.title} | Haroon Azizi`} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:url"
          content={`https://haroonazizi.com/blog/${post.slug}`}
        />
        <meta property="og:type" content="article" />
        {post.image && (
          <meta
            property="og:image"
            content={`https://haroonazizi.com${post.image}`}
          />
        )}

        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.image && (
          <meta
            name="twitter:image"
            content={`https://haroonazizi.com${post.image}`}
          />
        )}

        {/* Schema.org structured data for BlogPosting */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image
              ? `https://haroonazizi.com${post.image}`
              : "https://haroonazizi.com/images/og-image.jpg",
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Person",
              name: "Haroon Azizi",
              url: "https://haroonazizi.com",
            },
            publisher: {
              "@type": "Person",
              name: "Haroon Azizi",
              url: "https://haroonazizi.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://haroonazizi.com/blog/${post.slug}`,
            },
            keywords: `${post.category}, blog, ${post.title.toLowerCase()}`,
            articleSection: post.category,
            wordCount: post.content.split(/\s+/).length,
          })}
        </script>
      </Head>

      <article className="py-20 bg-theme-primary">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back to blog link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-theme-text-muted hover:text-theme-accent mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to all posts
          </Link>

          {/* Category badge */}
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-1 bg-theme-accent/10 text-theme-accent rounded-full text-sm font-mono">
              <FaTag className="mr-2" />
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-theme-text">
            {post.title}
          </h1>

          <div className="flex items-center text-sm text-theme-text-muted mb-8 font-mono">
            <FaCalendarAlt className="mr-2" />
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <FaClock className="mr-2" />
            <span>{post.readTime}</span>
          </div>

          {/* Featured image */}
          {post.image && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-glow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-invert max-w-none prose-headings:text-theme-accent prose-a:text-theme-accent prose-a:no-underline hover:prose-a:text-theme-accent-light prose-code:text-theme-accent prose-code:bg-theme-code-bg prose-code:p-1 prose-code:rounded prose-pre:bg-theme-code-bg prose-pre:border-l-4 prose-pre:border-theme-accent"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: {
      slug: post.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(`${params.slug}.md`);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      post: {
        ...post,
        contentHtml,
        date:
          post.date instanceof Date
            ? post.date.toISOString().split("T")[0]
            : post.date,
        slug: params.slug,
      },
    },
  };
}
