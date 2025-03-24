import { useState } from "react";
import Head from "next/head";
import { getAllPosts } from "../utils/blog";
import Link from "next/link";
import { FaSearch, FaCalendarAlt, FaClock } from "react-icons/fa";

export default function Blog({ blogPosts = [] }) {
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
      <section className="py-20 bg-theme-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-theme-text text-center max-w-2xl mx-auto mb-8 font-mono">
            <span className="text-theme-accent">console.log(</span>
            "Tech, Productivity, and Life—Unfiltered."
            <span className="text-theme-accent">);</span>
          </p>
          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 rounded-full bg-theme-secondary text-theme-text placeholder-theme-text-muted focus:outline-none focus:ring-2 focus:ring-theme-accent"
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-theme-text-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-theme-primary">
          <div className="max-w-6xl mx-auto px-4">
            <div className="glass-card overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto bg-theme-secondary relative">
                  {featuredPost.image && (
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="md:w-1/2 p-8">
                  <span className="inline-block px-3 py-1 bg-theme-accent/10 text-theme-accent rounded-full text-sm mb-4 font-mono">
                    Featured
                  </span>
                  <h2 className="text-2xl font-bold text-theme-text mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-theme-text-muted mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-theme-text-muted mb-6 font-mono">
                    <FaCalendarAlt className="mr-2" />
                    <span>{featuredPost.date}</span>
                    <span className="mx-2">•</span>
                    <FaClock className="mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="btn-modern inline-block"
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
      <section className="py-12 bg-theme-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="glass-card overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-glow flex flex-col"
              >
                <div className="h-48 bg-theme-secondary relative">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block px-3 py-1 bg-theme-accent/10 text-theme-accent rounded-full text-sm mb-4 w-fit font-mono">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-theme-text mb-3">
                    {post.title}
                  </h3>
                  <p className="text-theme-text-muted mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-sm text-theme-text-muted font-mono flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <FaClock className="mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-theme-accent hover:text-theme-accent-light transition-colors"
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
