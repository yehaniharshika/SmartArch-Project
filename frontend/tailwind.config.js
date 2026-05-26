/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── SmartArch Palette ──────────────────────────────────
        stone: {
          50:  "#FAF7F2",
          100: "#F5F0E8",
          200: "#EDE4D0",
          300: "#E0D0B4",
          400: "#C8B896",
          500: "#B09E7A",
          600: "#8B7355",
          700: "#6B5640",
          800: "#4A3B2A",
          900: "#2C2416",
        },
        bronze: {
          light:   "#C8A96E",
          DEFAULT: "#A67C52",
          dark:    "#7A5C3A",
        },
        arch: {
          cream:   "#FAF8F4",
          parchment: "#F0E8D8",
          ink:     "#1A1612",
          mist:    "#E8E0D0",
          warm:    "#D4C4A8",
          accent:  "#8B6914",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        mono:    ["DM Mono", "Menlo", "monospace"],
        sans:    ["DM Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 4rem)", { lineHeight: "1.0",  letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.4s ease forwards",
        "slide-in":   "slideIn 0.5s ease forwards",
        "shimmer":    "shimmer 2s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "draw":       "draw 1.5s ease forwards",
      },
      keyframes: {
        fadeUp:  { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:  { from: { opacity: "0" }, to: { opacity: "1" } },
        slideIn: { from: { opacity: "0", transform: "translateX(-20px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        draw:    { from: { strokeDashoffset: "1000" }, to: { strokeDashoffset: "0" } },
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "warm-sm": "0 2px 8px rgba(44, 36, 22, 0.08)",
        "warm-md": "0 4px 20px rgba(44, 36, 22, 0.12)",
        "warm-lg": "0 8px 40px rgba(44, 36, 22, 0.16)",
        "warm-xl": "0 20px 60px rgba(44, 36, 22, 0.20)",
      },
    },
  },
  plugins: [],
};
