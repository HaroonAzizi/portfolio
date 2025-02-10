// pages/index.js
import Head from "next/head";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Haroon Azizi</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0d1f2d]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>

        {/* Animated background shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="animate-pulse absolute top-20 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="animate-pulse absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Hi, I am Haroon Azizi
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Software Engineer
          </p>
          <Link href="/portfolio">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity">
              Show My Work
            </button>
          </Link>
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://x.com/az_haroon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              <FaSquareXTwitter size={24} />
            </a>
            <a
              href="https://github.com/HaroonAzizi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300">
                I am a passionate developer with expertise in building modern
                web applications. My journey in tech started with a curiosity
                for creating beautiful, functional websites.
              </p>
              <p className="text-gray-300">
                I specialize in full-stack development, with a strong focus on
                creating seamless user experiences and robust backend solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-[#1a3444] rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-teal-400">
                  Frontend
                </h3>
                <p className="text-gray-400">React, Next.js, Tailwind CSS</p>
              </div>
              <div className="p-6 bg-[#1a3444] rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-teal-400">
                  Backend
                </h3>
                <p className="text-gray-400">Node.js, Express, MongoDB</p>
              </div>
              <div className="p-6 bg-[#1a3444] rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-teal-400">
                  Design
                </h3>
                <p className="text-gray-400">Figma, Adobe XD</p>
              </div>
              <div className="p-6 bg-[#1a3444] rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-teal-400">
                  Tools
                </h3>
                <p className="text-gray-400">Git, Docker, AWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-[#0d1f2d]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="bg-gray-900 rounded-lg overflow-hidden group">
              <div className="h-48 bg-gray-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Project Name
                </h3>
                <p className="text-gray-400 mb-4">
                  Brief description of the project and the technologies used.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-teal-400 hover:text-teal-300">
                    View Project
                  </a>
                  <a href="#" className="text-teal-400 hover:text-teal-300">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* Repeat project cards as needed */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Lets Work Together
            </span>
          </h2>
          <p className="text-gray-300 mb-8">
            I am always interested in hearing about new projects and
            opportunities.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
