import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0d1f2d]/95 shadow-lg border-b border-teal-500/10 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent"
            >
              HaroonAzizi
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 px-6 py-2">
              <Link
                href="/"
                className="hover:text-teal-400 transition-colors text-lg relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/portfolio"
                className="hover:text-teal-400 transition-colors text-lg relative group"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/blog"
                className="hover:text-teal-400 transition-colors text-lg relative group"
              >
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="hover:text-teal-400 transition-colors text-lg relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-[#1a3444] focus:outline-none"
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

          {/* Mobile Navigation - Keep only this one */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0d1f2d] rounded-b-lg">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md hover:bg-[#1a3444] transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  href="/portfolio"
                  className="block px-3 py-2 rounded-md hover:bg-[#1a3444] transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-2 rounded-md hover:bg-[#1a3444] transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 rounded-md hover:bg-[#1a3444] transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-[#0d1f2d] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Haroon Azizi. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a
                href="https://x.com/az_haroon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors flex items-center space-x-2"
              >
                <FaSquareXTwitter size={20} />
                <span>X/Twitter</span>
              </a>
              <a
                href="https://github.com/HaroonAzizi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors flex items-center space-x-2"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/haroon-azizi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors flex items-center space-x-2"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
