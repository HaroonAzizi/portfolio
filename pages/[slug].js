import Head from "next/head";
import { getPostBySlug, getAllPosts } from "../utils/blog";
import { remark } from "remark";
import html from "remark-html";

export default function BlogPost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} - HaroonAzizi</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <article className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-teal-400/10 text-teal-400 rounded-full text-sm">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {post.title}
          </h1>

          <div className="flex items-center text-sm text-gray-400 mb-8">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>

          {post.image && (
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          )}

          <div
            className="prose prose-invert max-w-none"
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
    params: { slug: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      post: {
        ...post,
        contentHtml,
      },
    },
  };
}
