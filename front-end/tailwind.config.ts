/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        accentDef: {
          primaryLight: "#0252CD",
          primaryDark: "#428DFF",
          secondary: "#FFBE62",
        },
        white: {
          900: "#FFFFFF",
          800: "#F3F8FF",
          500: "#6F74A7",
        },
        black: {
          200: "#151E2C",
          300: "#192333",
          400: "#778295",
        },

        tagBtnColor: "#6b9de2",
        cardBg: "#f3f8ff",

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
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        openRight: {
          "0%": { right: "-100%" },
          "100%": { right: "0%" },
        },
        closeRight: {
          "0%": { right: "0%" },
          "100%": { right: "-100%" },
        },

        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        "open-right": "openRight 0.5s ease-in-out",
        "close-right": "closeRight 1s ease-in-out",
      },

      boxShadow: {
        iconShadow: "0px 5px 20px 0px #0000001A !important",
        cardShadow: "0px 1px 20px 0px #E0ECFF !important",
        workExpCardShadow: "-25px 47px 66px 0px #00000014 !important",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
