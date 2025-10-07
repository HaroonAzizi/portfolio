"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/*
  LaunchAnnouncement Modal
  - Displays once per page load (no persistence yet)
  - Accessible: focus trap basics, ESC to close, role dialog
  - Modern white theme matching existing brand accent (blue/cyan gradients)
*/
export default function LaunchAnnouncement() {
  const [open, setOpen] = useState(true);
  const dialogRef = useRef(null);
  const firstButtonRef = useRef(null);

  // Focus first button when opened
  useEffect(() => {
    if (open && firstButtonRef.current) {
      firstButtonRef.current.focus();
    }
  }, [open]);

  // Basic ESC to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6"
      aria-labelledby="hadaf-launch-title"
      aria-describedby="hadaf-launch-desc"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm opacity-100 animate-fadeIn"
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-md rounded-2xl bg-white shadow-[0_12px_40px_-4px_rgba(0,0,0,0.25)] border border-neutral-200 overflow-hidden animate-scaleIn"
      >
        {/* Accent bar */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-gradient" />

        <div className="p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-white ring-1 ring-neutral-200 flex items-center justify-center overflow-hidden shadow-md">
              <Image
                src="/images/hadaf-ios.png"
                alt="Hadaf App Logo"
                width={44}
                height={44}
                priority
                className="h-11 w-11 object-contain"
              />
            </div>
            <h2
              id="hadaf-launch-title"
              className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900"
            >
              Hadaf is live now!
            </h2>
          </div>
          <p
            id="hadaf-launch-desc"
            className="text-neutral-600 leading-relaxed text-sm sm:text-base mb-6"
          >
            Download Hadaf for iPhone and iPad or visit our website.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              ref={firstButtonRef}
              href="https://apps.apple.com/de/app/hadaf-afghan-learning/id6751640431?l=en-GB"
              target="_blank"
              className="group flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 text-sm sm:text-base shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-all"
            >
              <span className="group-hover:translate-x-0.5 transition-transform">
                Download the App
              </span>
            </a>
            <a
              href="https://had.af"
              target="_blank"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-neutral-300 text-neutral-800 font-semibold py-3 text-sm sm:text-base shadow-sm hover:bg-neutral-50 hover:border-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-all"
            >
              Visit the Site (had.af)
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 rounded-full p-2 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Close announcement"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.35s ease forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: 50% 50%;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: translateY(12px) scale(0.94);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
