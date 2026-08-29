import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Channel-based so `/opacity` modifiers compose. See globals.css.
        ink: {
          DEFAULT: "rgb(var(--ink-c) / <alpha-value>)",
          raised: "rgb(var(--ink-raised-c) / <alpha-value>)",
        },
        bone: {
          DEFAULT: "rgb(var(--bone-c) / <alpha-value>)",
          dim: "rgb(var(--bone-dim-c) / <alpha-value>)",
          faint: "rgb(var(--bone-faint-c) / <alpha-value>)",
        },
        accent: "rgb(var(--accent-c) / <alpha-value>)",
        rule: "var(--rule)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Editorial scale. Display sizes are fluid so the oversized serif
        // survives 375px without wrapping into confetti.
        label: ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.16em" }],
        micro: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.04em" }],
        deck: ["clamp(1.25rem, 1rem + 1.2vw, 1.75rem)", { lineHeight: "1.45" }],
        lede: ["clamp(1.0625rem, 0.95rem + 0.5vw, 1.3125rem)", { lineHeight: "1.7" }],
        title: ["clamp(2rem, 1.1rem + 3.2vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        masthead: ["clamp(3rem, 0.5rem + 11vw, 10.5rem)", { lineHeight: "0.9", letterSpacing: "-0.035em" }],
        figure: ["clamp(2.5rem, 1.5rem + 4.5vw, 5.5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        measure: "62ch",
        page: "84rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
