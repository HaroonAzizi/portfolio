import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { FaClock, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { FaCode } from "react-icons/fa";
import DomainAd from "./DomainAd";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  const isActive = (path) => currentPath === path;

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
                className={`mt-2 transition-colors text-lg relative group font-medium overflow-hidden ${
                  isActive("/")
                    ? "text-theme-accent"
                    : "hover:text-theme-accent"
                }`}
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className={`mt-2 transition-colors text-lg relative group font-medium overflow-hidden ${
                  isActive("/portfolio")
                    ? "text-theme-accent"
                    : "hover:text-theme-accent"
                }`}
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className={`mt-2 transition-colors text-lg relative group font-medium overflow-hidden ${
                  isActive("/blog") || currentPath.startsWith("/blog/")
                    ? "text-theme-accent"
                    : "hover:text-theme-accent"
                }`}
              >
                Blog
              </Link>
              <a
                href="https://type.haroonazizi.com"
                className="mt-2 hover:text-theme-accent transition-colors text-lg relative group font-medium overflow-hidden"
              >
                Typing Test
              </a>
              <Link
                href="/contact"
                className={`mt-2 transition-colors text-lg relative group font-medium overflow-hidden ${
                  isActive("/contact")
                    ? "text-theme-accent"
                    : "hover:text-theme-accent"
                }`}
              >
                Contact
              </Link>

              <Link
                href="/focus"
                className={`px-4 py-1 border-2 rounded-md transition-all duration-300 text-lg flex items-center self-center ${
                  isActive("/focus")
                    ? "border-theme-accent bg-theme-accent text-white shadow-glow"
                    : "border-theme-accent text-theme-accent hover:bg-theme-accent hover:text-white"
                }`}
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
                  className={`block px-3 py-2 rounded-md transition-colors relative group ${
                    isActive("/")
                      ? "bg-theme-secondary text-theme-accent"
                      : "hover:bg-theme-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/portfolio"
                  className={`block px-3 py-2 rounded-md transition-colors relative group ${
                    isActive("/portfolio")
                      ? "bg-theme-secondary text-theme-accent"
                      : "hover:bg-theme-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/blog"
                  className={`block px-3 py-2 rounded-md transition-colors relative group ${
                    isActive("/blog") || currentPath.startsWith("/blog/")
                      ? "bg-theme-secondary text-theme-accent"
                      : "hover:bg-theme-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <a
                  href="https://type.haroonazizi.com"
                  className="block px-3 py-2 rounded-md hover:bg-theme-secondary transition-colors relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Typing Test
                </a>
                <Link
                  href="/contact"
                  className={`block px-3 py-2 rounded-md transition-colors relative group ${
                    isActive("/contact")
                      ? "bg-theme-secondary text-theme-accent"
                      : "hover:bg-theme-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  href="/focus"
                  className={`block px-3 py-2 rounded-md transition-colors relative group ${
                    isActive("/focus")
                      ? "bg-theme-secondary text-theme-accent"
                      : "hover:bg-theme-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Focus
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
