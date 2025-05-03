import Link from "next/link";
import { useState } from "react";
import { FaClock, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaBrain } from "react-icons/fa";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { FaCode, FaTerminal } from "react-icons/fa";
import DomainAd from "./DomainAd";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-theme-primary text-theme-text flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full bg-theme-primary/95 shadow-lg border-b border-theme-accent/10 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent flex items-center"
            >
              <FaCode className="mr-2 text-theme-accent" />
              <span className="font-mono">HaroonAzizi</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 px-6 py-2">
              <Link
                href="/"
                className="mt-2 hover:text-theme-accent transition-colors text-lg relative group font-medium overflow-hidden"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-theme-accent to-theme-accent-light transform translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-full shadow-glow"></span>
              </Link>
              <Link
                href="/portfolio"
                className="mt-2 hover:text-theme-accent transition-colors text-lg relative group font-medium overflow-hidden"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-theme-accent to-theme-accent-light transform translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-full shadow-glow"></span>
              </Link>
              <Link
                href="/blog"
                className="mt-2 hover:text-theme-accent transition-colors text-lg relative group font-medium overflow-hidden"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-theme-accent to-theme-accent-light transform translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-full shadow-glow"></span>
              </Link>
              <a
                href="https://type.haroonazizi.com"
                className="mt-2 hover:text-theme-accent transition-colors text-lg relative group font-medium overflow-hidden"
              >
                Typing Test
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-theme-accent to-theme-accent-light transform translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-full shadow-glow"></span>
              </a>
              <Link
                href="/contact"
                className="mt-2 hover:text-theme-accent transition-colors text-lg relative group font-medium overflow-hidden"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-theme-accent to-theme-accent-light transform translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-full shadow-glow"></span>
              </Link>

              <Link
                href="/focus"
                className="px-4 py-1 border-2 border-theme-accent rounded-md text-theme-accent hover:bg-theme-accent hover:text-white transition-all duration-300 text-lg flex items-center self-center"
              >
                <FaClock className="mr-2" />
                <span>Focus</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-theme-secondary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-theme-primary rounded-b-lg glass-card">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md hover:bg-theme-secondary transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-theme-accent transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  href="/portfolio"
                  className="block px-3 py-2 rounded-md hover:bg-theme-secondary transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-theme-accent transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-2 rounded-md hover:bg-theme-secondary transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-theme-accent transition-all group-hover:w-full"></span>
                </Link>
                <a
                  href="https://type.haroonazizi.com"
                  className="block px-3 py-2 rounded-md hover:bg-theme-secondary transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Typing Test
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-theme-accent transition-all group-hover:w-full"></span>
                </a>
                <Link
                  href="/contact"
                  className="block px-3 py-2 rounded-md hover:bg-theme-secondary transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-theme-accent transition-all group-hover:w-full"></span>
                </Link>

                <Link
                  href="/focus"
                  className="block px-3 py-2 rounded-md hover:bg-theme-secondary transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Focus
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-theme-accent transition-all group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 flex-grow">
        {children}
        <SpeedInsights />
        <DomainAd />
      </main>

      {/* Footer */}
      <footer className="bg-theme-primary py-8 border-t border-theme-accent/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-theme-text-muted text-sm">
              <span className="font-mono">
                © {new Date().getFullYear()}{" "}
                <a className="hover: text-white" href="https://haroonazizi.com">
                  Haroon Azizi
                </a>
                .{" "}
              </span>
              <span className="font-mono text-xs"> All rights reserved</span>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a
                href="https://x.com/az_haroon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-text-muted hover:text-theme-accent transition-colors flex items-center space-x-2"
              >
                <FaSquareXTwitter size={20} />
                {/* <span className="font-mono text-sm">X/Twitter</span> */}
              </a>
              <a
                href="https://github.com/HaroonAzizi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-text-muted hover:text-theme-accent transition-colors flex items-center space-x-2"
              >
                <FaGithub size={20} />
                {/* <span className="font-mono text-sm">GitHub</span> */}
              </a>
              <a
                href="https://www.linkedin.com/in/haroon-azizi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-text-muted hover:text-theme-accent transition-colors flex items-center space-x-2"
              >
                <FaLinkedin size={20} />
                {/* <span className="font-mono text-sm">LinkedIn</span> */}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
