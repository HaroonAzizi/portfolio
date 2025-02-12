// pages/index.js
import Head from "next/head";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [showRole, setShowRole] = useState(false);
  const fullText = "Hey, I'm Haroon";  // Combined the text

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;

        if (currentIndex > fullText.length) {
          setTimeout(() => setShowRole(true), 500);
        }
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Head>
        <title>Haroon Azizi</title>
        <meta name="description" content="Welcome to my portfolio" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Mr+Bedfort&display=swap');
        </style>
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0d1f2d]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>

        {/* Animated background shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="animate-float-slow absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="animate-float-medium absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="animate-float-fast absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="animate-pulse absolute center w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              <span style={{ fontFamily: "'Mr Bedfort', cursive" }} className="font-normal text-5xl md:text-7xl">
                {text}
              </span>
              <span className="animate-blink">|</span>
            </span>
          </h1>
          <p
            className={`text-xl md:text-2xl text-gray-300 mb-8 opacity-0 ${
              showRole ? "animate-fade-in animate-glow" : ""
            }`}
          >
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
                web and mobile applications. My journey in tech started with a
                curiosity for creating beautiful, functional websites.
              </p>
              <p className="text-gray-300">
                I specialize in full-stack web and mobile app development, with
                a strong focus on creating seamless user experiences and robust
                backend solutions.
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
              <div className="h-48 bg-gray-800 relative">
                <img
                  src="/images/att.jpg"
                  alt="Attendance Plus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Attendance Plus
                </h3>
                <p className="text-gray-400 mb-4">
                  An attendance app designed to mark your attendance with the
                  help of face recognition system.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-teal-400 hover:text-teal-300">
                    View Project
                  </a>
                  {/* <a href="#" className="text-teal-400 hover:text-teal-300">
                    GitHub [Closed Source]
                  </a> */}
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
