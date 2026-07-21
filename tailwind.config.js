export default {
  content: ['./*.html', './blog/*.html', './services/*.html'],
  theme: {
    extend: {
      colors: {
        nvidia: {
          green: '#76b900',
          greenDark: '#5a8d00',
          black: '#000000',
          white: '#ffffff',
          soft: '#f7f7f7',
          hairline: '#cccccc',
          body: '#1a1a1a',
          mute: '#757575'
        }
      },
      boxShadow: {
        none: 'none'
      },
      borderRadius: {
        none: '0px',
        sm: '2px'
      },
      letterSpacing: {
        tighter: '-0.03em'
      }
    }
  }
};