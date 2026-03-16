// tailwind.config.cjs
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
    },
  },
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
};