module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'ui-sans-serif', 'system-ui'],
        'inter': ['"Inter"', 'sans-serif'],
        'jetbrains': ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
