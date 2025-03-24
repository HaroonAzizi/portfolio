import { useState } from "react";
import Head from "next/head";
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode } from "react-icons/fa";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Clinic Manager",
      description:
        "A full-stack clinic manager app created with React and bundled with Electron",
      category: "fullstack",
      technologies: ["React", "SQLite", "Electron", "Tailwind"],
      image: "/images/project1.jpg",
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
        <title>Portfolio | Haroon Azizi</title>
        <meta name="description" content="My portfolio projects" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-theme-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              <FaCode className="inline-block mr-3 mb-2" />
              My Projects
            </span>
          </h1>
          <p className="text-theme-text text-center max-w-2xl mx-auto font-mono">
            <span className="text-theme-accent">const </span>
            <span className="text-theme-accent-light">projects</span>
            <span className="text-white"> = </span>
            <span className="text-theme-text-muted">
              "A collection of my work showcasing my skills in web development and
              design. Each project represents unique challenges and solutions."
            </span>
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-theme-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-theme-accent to-theme-accent-light text-white shadow-glow"
                    : "glass-card text-theme-text-muted hover:text-theme-text hover:shadow-glow"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-theme-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
              >
                {/* Project Image */}
                <div className="h-48 bg-theme-secondary relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-4">
                      <a
                        href={project.liveLink}
                        className="px-4 py-2 bg-theme-accent text-white rounded hover:bg-theme-accent-light transition-colors text-sm flex items-center"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors text-sm flex items-center"
                      >
                        <FaGithub className="mr-2" />
                        GitHub
                      </a>
                    </div>
                  </div>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-theme-text mb-2 flex items-center">
                    <FaLaptopCode className="mr-2 text-theme-accent" />
                    {project.title}
                  </h3>
                  <p className="text-theme-text-muted mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-theme-accent/10 text-theme-accent rounded-full text-sm font-mono"
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
      <section className="py-20 bg-theme-primary">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="terminal p-6 mb-8">
            <div className="flex items-center px-2 py-1 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs text-theme-text-muted font-mono">~/haroon/contact.js</div>
            </div>
            <h2 className="text-3xl font-bold mb-6 font-mono">
              <span className="text-theme-text-muted">const </span>
              <span className="text-theme-accent">message</span>
              <span className="text-white"> = </span>
              <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
                "Interested in collaborating?"
              </span>
            </h2>
            <p className="text-theme-text-muted mb-8 font-mono">
              <span className="text-theme-accent">console.log(</span>
              "I'm always open to discussing new projects or opportunities."
              <span className="text-theme-accent">);</span>
            </p>
          </div>
          <a
            href="/contact"
            className="btn-modern inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
}
