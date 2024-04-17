export const appTheme = {
  palette: {
    mode: "light",
    primary: {
      main: "#625F55",
      light: "#ffffff",
      dark: "#292929",
      contrastText: "#ffffff",
      hover: "#7EC98E"
    },
    secondary: {
      main: "#7EC98E",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      default: '#706C61',
      disabled: "#e0e0e0",
    },

    // Custom colors that don't fit into the standard theme options can be added here
    custom: {
      emerald: '#7EC98E',
      darkEmerald: '#33843E'
    },
  },
  // typography: {
  //   h2: {
  //     fontStyle: "normal",
  //     fontWeight: 400,
  //     fontSize: "2rem",
  //   },
  //   h3: {
  //     fontStyle: "normal",
  //     fontWeight: 600,
  //     fontSize: "1.5rem",
  //     lineHeight: "1.813rem",
  //   },
  //   h4: {
  //     fontStyle: "normal",
  //     fontWeight: 400,
  //     fontSize: "1.25rem",
  //     lineHeight: "1.5rem",
  //     letterSpacing: "0.0015rem",
  //   },
  //   h5: {
  //     fontSize: "1rem",
  //     fontWeight: 400,
  //     lineHeight: "1.375rem",
  //   },
  //   h6: {
  //     fontSize: "0.9rem",
  //     fontWeight: "bold",
  //   },
  //   subtitle2: {
  //     fontSize: "0.9rem",
  //     fontWeight: 400,
  //     lineHeight: "1.063rem",
  //   },
  //   overline: {
  //     fontSize: "0.8rem",
  //     textTransform: "uppercase",
  //     fontWeight: 100,
  //     lineHeight: "0.875rem",
  //   },
  //   body1: {
  //     fontStyle: "normal",
  //     fontWeight: 400,
  //     fontSize: "1rem",
  //     lineHeight: "1.375",
  //     letterSpacing: "0.009rem",
  //   },
  //   body2: {
  //     fontSize: "1rem",
  //     fontWeight: 300,
  //     lineHeight: "1.188rem",
  //   },
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: 16,
          borderRadius: 0
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          padding: 8,
          paddingBottom: 16,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
    },
  },
};