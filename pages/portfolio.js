// pages/portfolio.js
import { useState } from "react";
import Head from "next/head";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/images/project1.jpg", // Add your project images
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Aadat: task and habit tracker",
      description:
        "A responsive task management application with real-time updates and GitHub like contribution graph",
      category: "frontend",
      technologies: ["React", "Supabase", "Tailwind"],
      image: "/images/aadat.jpg",
      liveLink: "#",
      githubLink: "#",
    },
    // Add more projects as needed
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "fullstack", name: "Full Stack" },
    { id: "backend", name: "Backend" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <Head>
        <title>Portfolio - HaroonAzizi</title>
        <meta name="description" content="My portfolio projects" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-[#0d1f2d]">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            A collection of my work showcasing my skills in web development and
            design. Each project represents unique challenges and solutions.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-white"
                    : "bg-[#1a3444] text-gray-300 hover:bg-[#244056]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1a3444] rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Project Image */}
                <div className="h-48 bg-[#244056] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-4">
                      <a
                        href={project.liveLink}
                        className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors text-sm"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors text-sm"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#244056] text-teal-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#0d1f2d]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Interested in collaborating?
            </span>
          </h2>
          <p className="text-gray-300 mb-8">
            I&apos;m always open to discussing new projects or opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
}
