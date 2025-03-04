import { useState } from "react";
import Head from "next/head";
import { getAllPosts } from "../utils/blog";
import Link from "next/link";

export default function Blog({ blogPosts = [] }) {
  // Add default empty array
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts =
    blogPosts?.filter(
      (post) =>
        post?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post?.category?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  const featuredPost = blogPosts?.find((post) => post.featured);

  return (
    <>
      <Head>
        <title>Blog - HaroonAzizi</title>
        <meta name="description" content="Tech blog and articles" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-[#0d1f2d]">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
            Tech, Productivity, and Life—Unfiltered.
          </p>
          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 rounded-full bg-[#1a3444] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-[#1a3444] rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto bg-[#244056] relative">
                  {featuredPost.image && (
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="md:w-1/2 p-8">
                  <span className="inline-block px-3 py-1 bg-teal-400/10 text-teal-400 rounded-full text-sm mb-4">
                    Featured
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-400 mb-6">
                    <span>{featuredPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="px-6 py-2 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full hover:opacity-90 transition-opacity inline-block"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#1a3444] rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
              >
                <div className="h-48 bg-[#244056] relative">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block px-3 py-1 bg-teal-400/10 text-teal-400 rounded-full text-sm mb-4 w-fit">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-sm text-gray-400">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  try {
    const blogPosts = getAllPosts().map(post => ({
      ...post,
      date: post.date instanceof Date ? post.date.toISOString() : post.date
    }));
    
    return {
      props: {
        blogPosts,
      },
    };
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return {
      props: {
        blogPosts: [],
      },
    };
  }
}
