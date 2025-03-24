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
          <h1 className="text-4xl font-bold text-theme-text mb-4">Post Not Found</h1>
          <p className="text-theme-text-muted mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="btn-modern inline-flex items-center"
          >
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
        <title>{post.title} - HaroonAzizi</title>
        <meta name="description" content={post.excerpt} />
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
        date: post.date instanceof Date ? post.date.toISOString().split('T')[0] : post.date
      },
    },
  };
}
