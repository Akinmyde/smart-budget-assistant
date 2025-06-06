export const COLORS = {
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

export const SPACING = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};
export const FONT_SIZES = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 30,
};
export const FONT_WEIGHTS = {
    regular: 'normal',
    medium: '500',
    bold: 'bold',
};
export const BORDER_RADIUS = {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 20,
    round: 9999,
};
