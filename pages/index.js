import Head from "next/head";
import {
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaCode,
  FaTerminal,
  FaClock,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  // In your Home component, add a new state for social icons
  const [text, setText] = useState("");
  const [showRole, setShowRole] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [showButtons, setShowButtons] = useState(false); // New state for buttons animation
  const fullText = "Hey, I'm Haroon";

  useEffect(() => {
    let currentIndex = 0;

    // Set buttons to show immediately
    setShowButtons(true);
    // Show social links sooner
    setTimeout(() => setShowSocials(true), 800); // Reduced from 1500ms to 800ms

    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;

        if (currentIndex > fullText.length) {
          setTimeout(() => setShowRole(true), 500);
          // Social links are already set to show sooner
        }
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Keep original typing speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Head>
        <title>Haroon Azizi | Software Developer & Full Stack Engineer</title>
        <meta
          name="description"
          content="Haroon Azizi (هارون عزیزی) is a full stack web and mobile developer specializing in React, React Native, and Node.js. Explore my portfolio, projects and blog."
        />
        <meta
          name="keywords"
          content="Haroon Azizi, هارون عزیزی, Software Developer, Full Stack Developer, React Native Developer, Mobile App Developer, Web Developer, Afghanistan"
        />
        <link rel="canonical" href="https://haroonazizi.com" />

        <meta
          property="og:title"
          content="Haroon Azizi | Software Developer & Full Stack Engineer"
        />
        <meta
          property="og:description"
          content="Haroon Azizi (هارون عزیزی) is a full stack developer specializing in React, React Native, and Node.js. Based in Afghanistan, creating modern web and mobile applications."
        />
        <meta property="og:url" content="https://haroonazizi.com" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Haroon Azizi | Software Developer"
        />
        <meta
          name="twitter:description"
          content="Full stack developer specializing in React, React Native and Node.js. Based in Afghanistan."
        />

        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Mr+Bedfort&display=swap&apos;);
        </style>

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Haroon Azizi",
            alternateName: "هارون عزیزی",
            url: "https://haroonazizi.com",
            image: "https://haroonazizi.com/images/haroon.png",
            sameAs: [
              "https://twitter.com/az_haroon",
              "https://github.com/HaroonAzizi",
              "https://linkedin.com/in/Haroon-Azizi",
            ],
            jobTitle: "Software Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
            description:
              "Full stack developer specializing in React, React Native, and Node.js",
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-theme-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-theme-primary"></div>

        {/* Animated background shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="animate-float-slow absolute top-1/4 left-1/4 w-96 h-96 bg-theme-accent rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="animate-float-medium absolute top-1/3 right-1/4 w-80 h-80 bg-theme-accent-light rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="animate-float-fast absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="animate-pulse absolute center w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>

        {/* Code-like background elements */}
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          <div className="font-mono text-xs md:text-sm text-theme-accent-light whitespace-pre-wrap p-4">
            {`
function Developer() {
  const [skills, setSkills] = useState([
    'React', 'React Native', 'Node.js', 'Express', 'MongoDB'
  ]);
  
  const [projects, setProjects] = useState([]);
  const [isLearning, setIsLearning] = useState(true);
  
  useEffect(() => {
    // Always learning new technologies
    const interval = setInterval(() => {
      learnNewTech();
      buildProjects();
    }, 24 * 60 * 60 * 1000); // Every day
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Developer 
      name="Haroon Azizi"
      passion="Building amazing software"
      goal="Making a difference through code"
    />
  );
}
            `}
          </div>
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="terminal p-1 inline-block mb-6">
            <div className="flex items-center px-2 py-1">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs text-theme-text-muted font-mono">
                ~/haroon/intro.js
              </div>
            </div>
            <div className="p-4 font-mono">
              <span className="text-theme-text-muted">const </span>
              <span className="text-theme-accent">greeting</span>
              <span className="text-white"> = </span>
              <h1 className="inline text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
                  <span
                    style={{ fontFamily: "'Mr Bedfort', cursive" }}
                    className="font-normal text-5xl md:text-7xl"
                  >
                    {text}
                  </span>
                  <span className="animate-blink">|</span>
                </span>
              </h1>
            </div>
          </div>

          <p
            className={`text-xl md:text-2xl text-theme-text mb-8 opacity-0 ${
              showRole ? "animate-fade-in animate-matrix" : ""
            }`}
          >
            Software Developer
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link href="/portfolio">
              <button
                className={`btn-modern w-full sm:w-auto flex items-center justify-center transition-all duration-500 ${
                  showButtons
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <FaCode className="mr-2" />
                Show My Work
              </button>
            </Link>

            <Link href="/focus">
              <button
                className={`btn-modern w-full sm:w-auto bg-red-500 hover:bg-red-600 flex items-center justify-center transition-all duration-500 ${
                  showButtons
                    ? "opacity-100 translate-y-0 delay-200"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <FaClock className="mr-2" />
                Focus
              </button>
            </Link>
          </div>
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://x.com/az_haroon"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-theme-text-muted hover:text-theme-accent transition-colors transform ${
                showSocials ? "animate-social-1" : "opacity-0"
              }`}
            >
              <FaSquareXTwitter size={24} />
            </a>
            <a
              href="https://github.com/HaroonAzizi"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-theme-text-muted hover:text-theme-accent transition-colors transform ${
                showSocials ? "animate-social-2" : "opacity-0"
              }`}
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/Haroon-Azizi"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-theme-text-muted hover:text-theme-accent transition-colors transform ${
                showSocials ? "animate-social-3" : "opacity-0"
              }`}
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-theme-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-theme-text">
                I am a passionate developer with expertise in building modern
                web and mobile applications. My journey in tech started with a
                curiosity for creating beautiful, functional websites.
              </p>
              <p className="text-theme-text">
                I specialize in full-stack web and mobile app development, with
                a strong focus on creating seamless user experiences and robust
                backend solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 glass-card">
                <h3 className="text-xl font-semibold mb-2 text-theme-accent">
                  Frontend
                </h3>
                <p className="text-theme-text-muted font-mono text-sm">
                  React Native, React, Next.js, Tailwind CSS
                </p>
              </div>
              <div className="p-6 glass-card">
                <h3 className="text-xl font-semibold mb-2 text-theme-accent">
                  Backend
                </h3>
                <p className="text-theme-text-muted font-mono text-sm">
                  Node.js, Express, MongoDB
                </p>
              </div>
              <div className="p-6 glass-card">
                <h3 className="text-xl font-semibold mb-2 text-theme-accent">
                  Design
                </h3>
                <p className="text-theme-text-muted font-mono text-sm">
                  Figma, Adobe XD
                </p>
              </div>
              <div className="p-6 glass-card">
                <h3 className="text-xl font-semibold mb-2 text-theme-accent">
                  Tools
                </h3>
                <p className="text-theme-text-muted font-mono text-sm">
                  Git, Docker, AWS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-theme-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="glass-card overflow-hidden group">
              <div className="h-48 bg-theme-secondary relative">
                <img
                  src="/images/project1.jpg"
                  alt="Clinic Manager"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex gap-3 mb-2">
                      <span className="px-2 py-1 bg-theme-accent/80 text-white text-xs rounded font-mono">
                        NextJs
                      </span>
                      <span className="px-2 py-1 bg-theme-accent/80 text-white text-xs rounded font-mono">
                        Prisma
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-theme-text mb-2">
                  Clinic Manager
                </h3>
                <p className="text-theme-text-muted mb-4">
                  A full-stack clinic management application with patient
                  records, appointment scheduling, and billing. The app is built
                  using NextJs and is already used in multiple dental clinics.
                </p>
                {/* <div className="flex justify-between items-center">
                  <Link
                    href="/portfolio"
                    className="text-theme-accent hover:text-theme-accent-light transition-colors"
                  >
                    View Details →
                  </Link>
                </div> */}
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="glass-card overflow-hidden group">
              <div className="h-48 bg-theme-secondary relative">
                <img
                  src="/images/project2.jpg"
                  alt="Aadat Task Tracker"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex gap-3 mb-2">
                      <span className="px-2 py-1 bg-theme-accent/80 text-white text-xs rounded font-mono">
                        React
                      </span>
                      <span className="px-2 py-1 bg-theme-accent/80 text-white text-xs rounded font-mono">
                        Supabase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-theme-text mb-2">
                  Aadat: Task Tracker
                </h3>
                <p className="text-theme-text-muted mb-4">
                  A responsive task management application with real-time
                  updates and GitHub-like contribution graph, built to track
                  habits and make you more productive.
                </p>
                {/* <div className="flex justify-between items-center">
                  <Link
                    href="/portfolio"
                    className="text-theme-accent hover:text-theme-accent-light transition-colors"
                  >
                    View Details →
                  </Link>
                </div> */}
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="glass-card overflow-hidden group">
              <div className="h-48 bg-theme-secondary relative">
                <img
                  src="/images/typing.png"
                  alt="Typing Test"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex gap-3 mb-2">
                      <span className="px-2 py-1 bg-theme-accent/80 text-white text-xs rounded font-mono">
                        NextJs
                      </span>
                      <span className="px-2 py-1 bg-theme-accent/80 text-white text-xs rounded font-mono">
                        Twilwind
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-theme-text mb-2">
                  Typing Test App
                </h3>
                <p className="text-theme-text-muted mb-4">
                  Test your typing speed and accuracy with this interactive app.
                  Built with Next.js and Tailwind CSS, it features real-time
                  feedback, customizable tests, and detailed performance
                  analytics.
                </p>
                {/* <div className="flex justify-between items-center">
                  <Link
                    href="/portfolio"
                    className="text-theme-accent hover:text-theme-accent-light transition-colors"
                  >
                    View Details →
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <button className="btn-modern">View All Projects</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 bg-theme-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              Latest Articles
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <Link href="/blog/2025-03-04-restart" className="block">
              <div className="glass-card p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-glow border-t-4 border-theme-accent">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-theme-accent/10 text-theme-accent rounded-full text-xs font-mono">
                    Personal
                  </span>
                  <span className="text-theme-text-muted text-xs font-mono">
                    Mar 4, 2025
                  </span>
                </div>
                <h3 className="text-xl font-bold text-theme-text mb-3 group-hover:text-theme-accent transition-colors">
                  Restart
                </h3>
                <p className="text-theme-text-muted mb-4 line-clamp-3">
                  Sometimes we need to press the restart button in our lives to
                  get back on track...
                </p>
                <div className="flex justify-end mt-auto pt-2">
                  <span className="text-theme-accent text-sm font-mono inline-flex items-center">
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
                  </span>
                </div>
              </div>
            </Link>

            {/* Blog Card 2 */}
            <Link href="/blog/2025-02-15-life-lessons" className="block">
              <div className="glass-card p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-glow border-t-4 border-theme-accent">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-theme-accent/10 text-theme-accent rounded-full text-xs font-mono">
                    Productivity
                  </span>
                  <span className="text-theme-text-muted text-xs font-mono">
                    Feb 15, 2025
                  </span>
                </div>
                <h3 className="text-xl font-bold text-theme-text mb-3 group-hover:text-theme-accent transition-colors">
                  Life Lessons
                </h3>
                <p className="text-theme-text-muted mb-4 line-clamp-3">
                  Key lessons I&apos;ve learned about productivity, focus, and
                  achieving goals...
                </p>
                <div className="flex justify-end mt-auto pt-2">
                  <span className="text-theme-accent text-sm font-mono inline-flex items-center">
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
                  </span>
                </div>
              </div>
            </Link>

            {/* Blog Card 3 */}
            <Link href="/blog/2025-02-12-haroon-azizi" className="block">
              <div className="glass-card p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-glow border-t-4 border-theme-accent">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-theme-accent/10 text-theme-accent rounded-full text-xs font-mono">
                    Introduction
                  </span>
                  <span className="text-theme-text-muted text-xs font-mono">
                    Feb 12, 2025
                  </span>
                </div>
                <h3 className="text-xl font-bold text-theme-text mb-3 group-hover:text-theme-accent transition-colors">
                  Haroon Azizi
                </h3>
                <p className="text-theme-text-muted mb-4 line-clamp-3">
                  An introduction to who I am, my journey in tech, and what
                  I&apos;m working on...
                </p>
                <div className="flex justify-end mt-auto pt-2">
                  <span className="text-theme-accent text-sm font-mono inline-flex items-center">
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
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link href="/blog">
              <button className="btn-modern">Read All Articles</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
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
              <span className="text-theme-text-muted  text-xl">const </span>
              <span className="text-theme-accent  text-xl">message</span>
              <span className="text-white text-lg"> = </span>
              <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
                &quot;Let&apos;s work together&quot;
              </span>
            </h2>
            <p className="text-theme-text-muted mb-8 font-mono">
              <span className="text-theme-accent">console.log(</span>
              &quot;Have a project in mind? I&apos;d love to hear about
              it!&quot;
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
