import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { FaPlay, FaPause, FaRedo, FaCoffee, FaClock } from "react-icons/fa";

export default function Pomodoro() {
  // Timer presets (in seconds)
  const timerPresets = {
    short: { focus: 25 * 60, break: 5 * 60, label: "25 min" },
    medium: { focus: 45 * 60, break: 10 * 60, label: "45 min" },
    long: { focus: 60 * 60, break: 15 * 60, label: "60 min" },
  };

  // Timer states
  const [preset, setPreset] = useState("short");
  const [mode, setMode] = useState("focus"); // focus or break
  const [timeLeft, setTimeLeft] = useState(timerPresets.short.focus); // default to short preset
  const [isActive, setIsActive] = useState(false);
  const [cycles, setCycles] = useState(0);

  // Refs
  const timerRef = useRef(null);
  const audioRef = useRef(null);

  // Handle timer completion
  useEffect(() => {
    if (timeLeft === 0) {
      if (audioRef.current) {
        // Add error handling for audio playback
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
      }

      if (mode === "focus") {
        // Switch to break mode
        setMode("break");
        setTimeLeft(timerPresets[preset].break);
        setCycles((prev) => prev + 1);
      } else {
        // Switch back to focus mode
        setMode("focus");
        setTimeLeft(timerPresets[preset].focus);
      }
    }
  }, [timeLeft, mode, preset]);

  // Add a new useEffect to initialize audio
  useEffect(() => {
    // Initialize audio when component mounts
    audioRef.current = new Audio("/sounds/bell.mp3");

    return () => {
      // Cleanup audio when component unmounts
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Timer logic
  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Timer controls
  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setMode("focus");
    setTimeLeft(timerPresets[preset].focus);
  };

  // Change timer preset
  const changePreset = (newPreset) => {
    setIsActive(false);
    setPreset(newPreset);
    setMode("focus");
    setTimeLeft(timerPresets[newPreset].focus);
  };

  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8TY1JXQTN4"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8TY1JXQTN4');
            `,
          }}
        />
        <title>Focus Timer | Haroon Azizi - Pomodoro Technique</title>
        <meta
          name="description"
          content="Boost your productivity with Haroon Azizi's Pomodoro timer. A minimalist focus tool to help you work efficiently with timed work and break sessions."
        />
        <meta
          name="keywords"
          content="pomodoro timer, focus timer, productivity tool, time management, Haroon Azizi, work timer, study timer"
        />
        <link rel="canonical" href="https://haroonazizi.com/focus" />

        <meta
          property="og:title"
          content="Focus Timer | Haroon Azizi - Pomodoro Technique"
        />
        <meta
          property="og:description"
          content="Boost your productivity with this Pomodoro timer. A minimalist focus tool to help you work efficiently."
        />
        <meta property="og:url" content="https://haroonazizi.com/focus" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Focus Timer | Haroon Azizi" />
        <meta
          name="twitter:description"
          content="Boost your productivity with this Pomodoro timer. Work efficiently with timed sessions."
        />

        {/* Schema.org structured data for Web Application */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Pomodoro Focus Timer",
            applicationCategory: "Productivity",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            author: {
              "@type": "Person",
              name: "Haroon Azizi",
              url: "https://haroonazizi.com",
            },
            description:
              "A minimalist Pomodoro timer to boost your productivity with timed work and break sessions",
            url: "https://haroonazizi.com/focus",
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-theme-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              Pomodoro Timer
            </span>
          </h1>
          <p className="text-theme-text text-center max-w-2xl mx-auto font-mono">
            <span className="text-theme-accent">const </span>
            <span className="text-theme-accent-light">productivity</span>
            <span className="text-white"> = </span>
            <span className="text-theme-text-muted">
              &quot;Focus for your chosen time, then take a break. Repeat for
              optimal results.&quot;
            </span>
          </p>
        </div>
      </section>

      {/* Timer Section */}
      <section className="py-12 bg-theme-primary">
        <div className="max-w-md mx-auto px-4">
          {/* Timer preset selector */}
          <div className="mb-6 flex justify-center space-x-4">
            {Object.keys(timerPresets).map((key) => (
              <button
                key={key}
                onClick={() => changePreset(key)}
                className={`px-4 py-2 rounded-full font-mono transition-colors ${
                  preset === key
                    ? "bg-theme-accent text-white shadow-glow"
                    : "bg-theme-secondary text-theme-text-muted hover:bg-gray-700"
                }`}
              >
                {timerPresets[key].label}
              </button>
            ))}
          </div>

          <div className="glass-card p-8 rounded-lg shadow-glow flex flex-col items-center">
            {/* Mode indicator */}
            <div className="mb-6 flex items-center">
              {mode === "focus" ? (
                <div className="flex items-center text-theme-accent">
                  <FaClock className="mr-2 text-2xl" />
                  <span className="text-xl font-mono">Focus Time</span>
                </div>
              ) : (
                <div className="flex items-center text-theme-accent-light">
                  <FaCoffee className="mr-2 text-2xl" />
                  <span className="text-xl font-mono">Break Time</span>
                </div>
              )}
            </div>

            {/* Timer display */}
            <div className="text-7xl font-mono mb-8 font-bold bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent">
              {formatTime(timeLeft)}
            </div>

            {/* Cycles counter */}
            <div className="mb-8 text-theme-text-muted font-mono">
              Completed cycles:{" "}
              <span className="text-theme-accent">{cycles}</span>
            </div>

            {/* Controls */}
            <div className="flex space-x-4">
              {!isActive ? (
                <button
                  onClick={startTimer}
                  className="p-4 bg-theme-accent text-white rounded-full hover:bg-theme-accent-light transition-colors shadow-glow"
                >
                  <FaPlay />
                </button>
              ) : (
                <button
                  onClick={pauseTimer}
                  className="p-4 bg-theme-secondary text-white rounded-full hover:bg-gray-700 transition-colors"
                >
                  <FaPause />
                </button>
              )}

              <button
                onClick={resetTimer}
                className="p-4 bg-theme-secondary text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                <FaRedo />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-8 h-2 bg-theme-secondary rounded-full overflow-hidden">
            <div
              className={`h-full ${
                mode === "focus" ? "bg-theme-accent" : "bg-theme-accent-light"
              }`}
              style={{
                width: `${
                  mode === "focus"
                    ? ((timerPresets[preset].focus - timeLeft) /
                        timerPresets[preset].focus) *
                      100
                    : ((timerPresets[preset].break - timeLeft) /
                        timerPresets[preset].break) *
                      100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-12 bg-theme-primary">
        <div className="max-w-2xl mx-auto px-4">
          <div className="terminal p-6">
            <div className="flex items-center px-2 py-1 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs text-theme-text-muted font-mono">
                ~/haroon/focus.js
              </div>
            </div>
            <h2 className="text-xl font-bold mb-4 font-mono text-theme-accent">
              How to use the Pomodoro Technique:
            </h2>
            <ol className="list-decimal list-inside text-theme-text-muted space-y-2 font-mono">
              <li>Select your preferred focus duration</li>
              <li>Focus intensely during the work period</li>
              <li>Take a short break when the timer ends</li>
              <li>
                After 4 cycles, consider taking a longer break (15-30 minutes)
              </li>
              <li>Repeat to maximize productivity and prevent burnout</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
