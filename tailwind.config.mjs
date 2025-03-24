/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom theme colors
        theme: {
          'primary': '#0F172A',      // Dark blue background
          'secondary': '#1E293B',    // Lighter blue for cards
          'accent': '#7C3AED',       // Purple accent (replacing teal)
          'accent-light': '#A78BFA', // Light purple for hover states
          'text': '#F8FAFC',         // Light text
          'text-muted': '#94A3B8',   // Muted text
          'code-bg': '#0D1117',      // GitHub-like code background
        }
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#A78BFA', // Purple accent color
              '&:hover': {
                color: '#7C3AED', // Darker purple for hover state
              },
              textDecoration: 'none',
            },
          },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(124, 58, 237, 0.5)',
        'glow-lg': '0 0 30px rgba(124, 58, 237, 0.5)',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
