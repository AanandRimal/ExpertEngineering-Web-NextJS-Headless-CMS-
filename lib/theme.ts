// Centralized theme configuration
export const theme = {
  colors: {
    primary: {
      main: "#0da04e",
      light: "#16a34a",
      dark: "#15803d",
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#0da04e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
    secondary: {
      main: "#054069",
      light: "#1e40af",
      dark: "#1e3a8a",
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#054069",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    neutral: {
      white: "#ffffff",
      black: "#000000",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
  },
  gradients: {
    primary: "linear-gradient(135deg, #0da04e 0%, #16a34a 100%)",
    secondary: "linear-gradient(135deg, #054069 0%, #1e40af 100%)",
    hero: "linear-gradient(135deg, rgba(13, 160, 78, 0.9) 0%, rgba(5, 64, 105, 0.9) 100%)",
  },
  shadows: {
    primary: "0 0 15px 2px rgba(13, 160, 78, 0.6)",
    secondary: "0 0 15px 2px rgba(5, 64, 105, 0.6)",
    card: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
} as const

// CSS-in-JS style objects for common patterns
export const themeStyles = {
  // Button styles
  button: {
    primary: {
      backgroundColor: theme.colors.primary.main,
      color: theme.colors.neutral.white,
    },
    secondary: {
      backgroundColor: theme.colors.secondary.main,
      color: theme.colors.neutral.white,
    },
  },

  // Background styles
  backgrounds: {
    primary: {
      backgroundColor: theme.colors.primary.main,
    },
    secondary: {
      backgroundColor: theme.colors.secondary.main,
    },
    primaryLight: {
      backgroundColor: theme.colors.primary[100],
    },
    secondaryLight: {
      backgroundColor: theme.colors.secondary[100],
    },
  },

  // Text colors
  text: {
    primary: {
      color: theme.colors.primary.main,
    },
    secondary: {
      color: theme.colors.secondary.main,
    },
  },

  // Icon styles
  icon: {
    primary: {
      color: theme.colors.primary.main,
    },
    secondary: {
      color: theme.colors.secondary.main,
    },
  },
}

// Tailwind class utilities
export const themeClasses = {
  // Background classes
  bg: {
    primary: "bg-green-500",
    primaryHover: "hover:bg-green-600",
    primaryLight: "bg-green-100",
    secondary: "bg-blue-600",
    secondaryHover: "hover:bg-blue-700",
    secondaryLight: "bg-blue-100",
  },

  // Text classes
  text: {
    primary: "text-green-500",
    primaryDark: "text-green-700",
    secondary: "text-blue-600",
    secondaryDark: "text-blue-700",
  },

  // Border classes
  border: {
    primary: "border-green-500",
    primaryHover: "hover:border-green-500",
    secondary: "border-blue-600",
    secondaryHover: "hover:border-blue-600",
  },

  // Ring/Focus classes
  ring: {
    primary: "focus:ring-green-500",
    secondary: "focus:ring-blue-600",
  },

  // Badge/Tag classes
  badge: {
    primary: "bg-green-100 text-green-700",
    secondary: "bg-blue-100 text-blue-700",
  },
}

// Company information
export const companyInfo = {
  name: "Expert Engineering Solution",
  shortName: "EES",
  tagline: "Engineering Excellence",
  email: "info@expertengineering.com",
  phone: "(123) 456-7890",
  address: "123 Expert Engineering Ave, Tech City, TC 12345",
  socialMedia: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
}
