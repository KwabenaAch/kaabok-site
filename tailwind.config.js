module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        kaabok: {
          deep:       '#070C16',
          surface:    '#0E1625',
          soft:       '#121D30',
          paper:      '#F6F3EE',
          inkDark:    '#0B1220',
          inkLight:   '#F5F2EC',
          inkMuted:   '#8A95A8',
          blue:       '#183A6B',
          blueHover:  '#1E4A87',
          gold:       '#B69B74',
        }
      },
      fontFamily: {
        sans:  ['DM Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      borderRadius: {
        card: '20px',
        pill: '9999px',
        frame: '24px',
      },
      boxShadow: {
        card: '0 16px 48px rgba(7,12,22,0.28)',
        soft: '0 10px 30px rgba(0,0,0,0.18)',
      },
      maxWidth: { container: '1200px' }
    }
  },
  plugins: []
}
