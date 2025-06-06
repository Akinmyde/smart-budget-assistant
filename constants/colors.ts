export const colors = {
  // Primary colors
  primary: {
    main: '#2C3E50',    // Deep taupe blue
    light: '#34495E',   // Lighter taupe blue
    dark: '#1A252F',    // Darker taupe blue
  },
  
  // Secondary colors
  secondary: {
    main: '#3498DB',    // Bright blue
    light: '#5DADE2',   // Light blue
    dark: '#0b64da',  
    // Dark blue
  },
  
  // Success colors
  success: {
    main: '#27AE60',    // Green
    light: '#2ECC71',   // Light green
    dark: '#219A52',    // Dark green
  },
  
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    background: '#F8F9FA',
    border: '#E0E0EA',
    text: {
      primary: '#2C3E50',
      secondary: '#7F8C8D',
      disabled: '#BDC3C7',
    },
  },
  
  // UI elements
  ui: {
    card: {
      background: '#FFFFFF',
      border: '#E0E0EA',
      shadow: 'rgba(0, 0, 0, 0.03)',
    },
    progress: {
      background: '#E0E0EA',
      fill: '#1A2D87',
    },
  },
} as const; 