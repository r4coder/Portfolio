/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#09090b', panel: '#101013', accent: '#8ea2ff' },
      fontFamily: { sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'], mono: ['"Geist Mono"', 'ui-monospace', 'monospace'] },
    },
  },
  plugins: [],
}
