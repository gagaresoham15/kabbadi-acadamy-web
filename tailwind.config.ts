import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kabaddi: {
          orange: "#FF6B1A",
          orangeHover: "#FF8A25",
          navy: "#101C2C",
          bg: "#080D14",
          card: "#171F2B",
          cardSecondary: "#252F3D",
          white: "#FFFFFF",
          grey: "#AAB2BD",
          success: "#22C55E",
          error: "#EF4444",
          border: "rgba(255, 107, 26, 0.15)",
          borderMuted: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(135deg, #FF6B1A 0%, #FF8A25 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(37, 47, 61, 0.7) 0%, rgba(23, 31, 43, 0.9) 100%)",
        "hero-glow": "radial-gradient(circle at 60% 40%, rgba(255, 107, 26, 0.18) 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 25px rgba(255, 107, 26, 0.35)",
        glowSm: "0 0 12px rgba(255, 107, 26, 0.25)",
        glowLg: "0 0 40px rgba(255, 107, 26, 0.45)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
