import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Clinic Manager",
      description:
        "A full-stack clinic manager app created with NextJS and styled with TailwindCSS designed to make the patient registration and prescription writing easier for doctors.",
      category: "fullstack",
      technologies: ["React", "SQLite", "Tailwind"],
      image: "/images/project1.jpg",
      liveLink: "#",
      githubLink: "#",
      isClosedSource: true,
      noLiveDemo: true,
      closedSourceReason:
        "This project is a personal project and the code hasn't been yet published.",
      noLiveDemoReason:
        "The project is for local useage of clinics only and isn't hosted anywhere.",
    },
    {
      id: 2,
      title: "Typing Speed Test",
      description:
        "A beautifully designed typing app using NextJs with the funtionality to record the WPM and show you a graph of your typing speed.",
      category: "fullstack",
      technologies: ["NextJs", "Tailwind"],
      image: "/images/typing.png",
      liveLink: "https://type.haroonazizi.com",
      githubLink: "https://github.com/HaroonAzizi/typing-app",
      isClosedSource: false,
      noLiveDemo: false,
      closedSourceReason:
        "This project is a personal project and the code hasn't been yet published.",
      noLiveDemoReason:
        "The project is for local useage of clinics only and isn't hosted anywhere.",
    },
    {
      id: 3,
      title: "Aadat: task and habit tracker",
      description:
        "A responsive task management application with real-time updates and GitHub like contribution graph",
      category: "frontend",
      technologies: ["React", "Supabase"],
      image: "/images/aadat.jpg",
      liveLink: "#",
      githubLink: "https://github.com/HaroonAzizi/aadat",
      isClosedSource: false,
      noLiveDemo: true,
      closedSourceReason: "",
      noLiveDemoReason:
        "The live demo is currently unavailable as the project is being migrated to a new server.",
    },
    {
      id: 4,
      title: "Attendance Plus",
      description:
        "Imagine having a FaceID enabled attendance in your class or workplace - That is what Attendace Plus does.",
      category: "fullstack",
      technologies: ["Python", "OpenCV", "Pandas"],
      image: "/images/aadat.jpg",
      liveLink: "#",
      githubLink: "#",
      isClosedSource: true,
      noLiveDemo: true,
      closedSourceReason:
        "This is a paid project and if you want to have access to its source code, please contact me.",
      noLiveDemoReason:
        "The live demo is currently unavailable as the project is being migrated to a new server.",
    },
    {
      id: 5,
      title: "Unite",
      description:
        "Unite is a video conferancing app which helps you connect with your family and loved ones. Video calls in Unite do not have limits like Zoom and Google Meet.",
      category: "frontend",
      technologies: ["NextJS", "Prisma", "NodeJS"],
      image: "/images/aadat.jpg",
      liveLink: "#",
      githubLink: "#",
      isClosedSource: true,
      noLiveDemo: true,
      closedSourceReason:
        "This is a paid project and if you want to have access to its source code, please contact me.",
      noLiveDemoReason:
        "The live demo is currently unavailable as the project is being migrated to a new server.",
    },
    {
      id: 6,
      title: "Programming Contest App",
      description:
        "A web app use for contests inside campus on the same network without internet connection. Fully implemented and used in Kardan University.",
      category: "frontend",
      technologies: ["React", "Django", "PostgreSQL"],
      image: "/images/aadat.jpg",
      liveLink: "#",
      githubLink: "#",
      isClosedSource: true,
      noLiveDemo: true,
      closedSourceReason:
        "This is a paid project and if you want to have access to its source code, please contact me.",
      noLiveDemoReason:
        "The live demo is currently unavailable as the project is being migrated to a new server.",
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
        <title>Portfolio | Haroon Azizi - Software Development Projects</title>
        <meta
          name="description"
          content="Explore Haroon Azizi's software development projects including web applications, mobile apps, and full-stack solutions built with React, React Native, and Node.js."
        />
        <meta
          name="keywords"
          content="Haroon Azizi portfolio, software projects, React projects, React Native apps, full stack development, web development, mobile app development"
        />
        <link rel="canonical" href="https://haroonazizi.com/portfolio" />

        <meta
          property="og:title"
          content="Portfolio | Haroon Azizi - Software Development Projects"
        />
        <meta
          property="og:description"
          content="Explore Haroon Azizi's software development projects including web applications, mobile apps, and full-stack solutions."
        />
        <meta property="og:url" content="https://haroonazizi.com/portfolio" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Portfolio | Haroon Azizi" />
        <meta
          name="twitter:description"
          content="Software development projects by Haroon Azizi - React, React Native, and Node.js applications."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: "Haroon Azizi's Portfolio",
            description: "Software development projects by Haroon Azizi",
            url: "https://haroonazizi.com/portfolio",
            author: {
              "@type": "Person",
              name: "Haroon Azizi",
              url: "https://haroonazizi.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://haroonazizi.com/portfolio",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Haroon Azizi's Portfolio",
            description:
              "Explore Haroon Azizi's software development projects including web applications, mobile apps, and full-stack solutions.",
            url: "https://haroonazizi.com/portfolio",
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
              <FaCode className="inline-block mr-3 mb-2" />
              My Projects
            </span>
          </h1>
          <p className="text-theme-text text-center max-w-2xl mx-auto font-mono">
            <span className="text-theme-accent">const </span>
            <span className="text-theme-accent-light">projects</span>
            <span className="text-white"> = </span>
            <span className="text-theme-text-muted">
              &quot;A collection of my work showcasing my skills in web
              development and design. Each project represents unique challenges
              and solutions.&quot;
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
              <div key={project.id} className="flip-card h-[300px]">
                <div className="flip-card-inner">
                  {/* Front of card */}
                  <div className="flip-card-front glass-card overflow-hidden border-t-4 border-theme-accent p-6 flex flex-col h-full relative">
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-theme-text mb-3 flex items-center">
                        <FaLaptopCode className="mr-2 text-theme-accent" />
                        {project.title}
                      </h3>
                      <p className="text-theme-text-muted mb-6">
                        {project.description}
                      </p>
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

                    <div className="flex flex-nowrap justify-between gap-2 pt-4 border-t border-theme-accent/10 absolute bottom-6 left-6 right-6">
                      <button
                        onClick={(e) => {
                          if (project.noLiveDemo) {
                            const card = e.currentTarget.closest(".flip-card");
                            card.setAttribute("data-flip-type", "demo");
                            card.classList.add("flipped");
                          } else {
                            window.open(project.liveLink, "_blank");
                          }
                        }}
                        className="px-3 py-2 bg-theme-accent text-white rounded hover:bg-theme-accent-light transition-colors text-sm flex items-center whitespace-nowrap"
                      >
                        <FaExternalLinkAlt className="mr-1" />
                        Live Demo
                      </button>
                      <button
                        onClick={(e) => {
                          if (project.isClosedSource) {
                            const card = e.currentTarget.closest(".flip-card");
                            card.setAttribute("data-flip-type", "github");
                            card.classList.add("flipped");
                          } else {
                            window.open(project.githubLink, "_blank");
                          }
                        }}
                        className="px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors text-sm flex items-center whitespace-nowrap"
                      >
                        <FaGithub className="mr-1" />
                        GitHub
                      </button>
                    </div>
                  </div>

                  {/* Back of card - GitHub message */}
                  <div className="flip-card-back github-back glass-card overflow-hidden border-t-4 border-theme-accent p-6 flex flex-col justify-center items-center text-center">
                    <div className="mb-6 text-5xl text-theme-accent">
                      <FaGithub />
                    </div>
                    <h3 className="text-xl font-bold text-theme-text mb-4">
                      Closed Source Project
                    </h3>
                    <p className="text-theme-text-muted mb-6">
                      {project.closedSourceReason ||
                        "This project is under NDA and the source code is proprietary."}
                    </p>
                    <button
                      onClick={(e) => {
                        e.currentTarget
                          .closest(".flip-card")
                          .classList.remove("flipped");
                      }}
                      className="px-4 py-2 bg-theme-accent text-white rounded hover:bg-theme-accent-light transition-colors text-sm"
                    >
                      Go Back
                    </button>
                  </div>

                  {/* Back of card - Demo message */}
                  <div className="flip-card-back demo-back glass-card overflow-hidden border-t-4 border-theme-accent p-6 flex flex-col justify-center items-center text-center">
                    <div className="mb-6 text-5xl text-theme-accent">
                      <FaExternalLinkAlt />
                    </div>
                    <h3 className="text-xl font-bold text-theme-text mb-4">
                      Demo Unavailable
                    </h3>
                    <p className="text-theme-text-muted mb-6">
                      {project.noLiveDemoReason ||
                        "The live demo is currently unavailable as the project is being migrated to a new server."}
                    </p>
                    <button
                      onClick={(e) => {
                        e.currentTarget
                          .closest(".flip-card")
                          .classList.remove("flipped");
                      }}
                      className="px-4 py-2 bg-theme-accent text-white rounded hover:bg-theme-accent-light transition-colors text-sm"
                    >
                      Go Back
                    </button>
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
              <div className="ml-4 text-xs text-theme-text-muted font-mono">
                ~/haroon/contact.js
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-6 font-mono">
              <span className="text-theme-text-muted">const </span>
              <span className="text-theme-accent">message</span>
              <span className="text-white"> = </span>
              <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
                &quot;Interested in collaborating?&quot;
              </span>
            </h2>
            <p className="text-theme-text-muted mb-8 font-mono">
              <span className="text-theme-accent">console.log(</span>
              &quot;I&apos;m always open to discussing new projects or
              opportunities.&quot;
              <span className="text-theme-accent">);</span>
            </p>
          </div>
          <Link href="/contact">
            <button className="btn-modern animate-pulse-glow relative overflow-hidden group">
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-theme-accent via-theme-accent-light to-theme-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
