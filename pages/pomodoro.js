import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { FaPlay, FaPause, FaRedo, FaCoffee, FaBrain } from "react-icons/fa";

export default function Pomodoro() {
  // Timer states
  const [mode, setMode] = useState("focus"); // focus or break
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [cycles, setCycles] = useState(0);

  // Refs
  const timerRef = useRef(null);
  const audioRef = useRef(null);

  // Handle timer completion
  useEffect(() => {
    if (timeLeft === 0) {
      if (audioRef.current) {
        audioRef.current.play();
      }

      if (mode === "focus") {
        // Switch to break mode
        setMode("break");
        setTimeLeft(5 * 60); // 5 minutes break
        setCycles((prev) => prev + 1);
      } else {
        // Switch back to focus mode
        setMode("focus");
        setTimeLeft(25 * 60);
      }
    }
  }, [timeLeft, mode]);

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
    setTimeLeft(25 * 60);
  };

  return (
    <>
      <Head>
        <title>Pomodoro Timer | Haroon Azizi</title>
        <meta
          name="description"
          content="A minimalist Pomodoro timer to boost your productivity"
        />
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
              &quot;Focus for 25 minutes, then take a 5-minute break. Repeat for
              optimal results.&quot;
            </span>
          </p>
        </div>
      </section>

      {/* Timer Section */}
      <section className="py-12 bg-theme-primary">
        <div className="max-w-md mx-auto px-4">
          <div className="glass-card p-8 rounded-lg shadow-glow flex flex-col items-center">
            {/* Mode indicator */}
            <div className="mb-6 flex items-center">
              {mode === "focus" ? (
                <div className="flex items-center text-theme-accent">
                  <FaBrain className="mr-2 text-2xl" />
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
                    ? ((25 * 60 - timeLeft) / (25 * 60)) * 100
                    : ((5 * 60 - timeLeft) / (5 * 60)) * 100
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
                ~/haroon/pomodoro.js
              </div>
            </div>
            <h2 className="text-xl font-bold mb-4 font-mono text-theme-accent">
              How to use the Pomodoro Technique:
            </h2>
            <ol className="list-decimal list-inside text-theme-text-muted space-y-2 font-mono">
              <li>Focus intensely for 25 minutes</li>
              <li>Take a short 5-minute break</li>
              <li>After 4 cycles, take a longer break (15-30 minutes)</li>
              <li>Repeat to maximize productivity and prevent burnout</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Audio element for notification */}
      <audio ref={audioRef} preload="auto">
        <source src="/sounds/bell.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
