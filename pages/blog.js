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
        <title>Blog | Haroon Azizi - Tech, Productivity, and Life</title>
        <meta
          name="description"
          content="Explore Haroon Azizi's blog about software development, productivity tips, and life experiences. Articles on React, React Native, and more."
        />
        <meta
          name="keywords"
          content="Haroon Azizi blog, software development blog, tech blog, productivity tips, React Native, React, web development"
        />
        <link rel="canonical" href="https://haroonazizi.com/blog" />

        <meta
          property="og:title"
          content="Blog | Haroon Azizi - Tech, Productivity, and Life"
        />
        <meta
          property="og:description"
          content="Explore Haroon Azizi's blog about software development, productivity tips, and life experiences."
        />
        <meta property="og:url" content="https://haroonazizi.com/blog" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Blog | Haroon Azizi" />
        <meta
          name="twitter:description"
          content="Tech, Productivity, and Life—Unfiltered. Articles by Haroon Azizi."
        />

        {/* Schema.org structured data for Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: "Haroon Azizi's Blog",
            description:
              "Articles about software development, productivity, and life experiences",
            url: "https://haroonazizi.com/blog",
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
              "@id": "https://haroonazizi.com/blog",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Haroon Azizi's Blog",
            description:
              "Explore Haroon Azizi's blog about software development, productivity tips, and life experiences.",
            url: "https://haroonazizi.com/blog",
            author: {
              "@type": "Person",
              name: "Haroon Azizi",
              url: "https://haroonazizi.com",
            },
          })}
        </script>
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
            &quot;Tech, Productivity, and Life—Unfiltered.&quot;
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
                  <p className="text-theme-text-muted mb-6">
                    {featuredPost.excerpt}
                  </p>
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
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-block px-3 py-1 bg-theme-accent/10 text-theme-accent rounded-full text-xs font-mono">
                      {post.category}
                    </span>
                    <span className="text-theme-text-muted text-xs font-mono">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-theme-text mb-3">
                    {post.title}
                  </h3>
                  <p className="text-theme-text-muted mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-theme-accent/10">
                    <div className="text-xs text-theme-text-muted font-mono">
                      {post.readTime}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-theme-accent text-sm font-mono inline-flex items-center"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
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
    const blogPosts = getAllPosts().map((post) => ({
      ...post,
      date: post.date instanceof Date ? post.date.toISOString() : post.date,
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
