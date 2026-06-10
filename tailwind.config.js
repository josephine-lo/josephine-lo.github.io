/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FBFBFA',
        bone: '#F7F6F3',
        ink: '#111111',
        charcoal: '#2F3437',
        muted: '#787774',
        border: '#EAEAEA',
        surface: '#F9F9F8',
        'pastel-red': { bg: '#FDEBEC', text: '#9F2F2D' },
        'pastel-blue': { bg: '#E1F3FE', text: '#1F6C9F' },
        'pastel-green': { bg: '#EDF3EC', text: '#346538' },
        'pastel-yellow': { bg: '#FBF3DB', text: '#956400' },
      },
      fontFamily: {
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
        prose: '42rem',
      },
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
        reveal: '500ms',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
