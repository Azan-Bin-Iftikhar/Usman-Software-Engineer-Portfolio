import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0f766e" },
    secondary: { main: "#d97706" },
    background: {
      default: "#f4efe7",
      paper: "rgba(255, 255, 255, 0.78)",
    },
    text: {
      primary: "#14213d",
      secondary: "#4b5563",
    },
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", "Manrope", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Space Grotesk", "Manrope", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Space Grotesk", "Manrope", sans-serif',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundImage:
            "radial-gradient(circle at top left, rgba(15, 118, 110, 0.16), transparent 28%), radial-gradient(circle at right center, rgba(217, 119, 6, 0.13), transparent 24%), linear-gradient(180deg, #f9f5ee 0%, #f4efe7 100%)",
        },
        "*::selection": {
          backgroundColor: "rgba(15, 118, 110, 0.22)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(20, 33, 61, 0.08)",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#5eead4" },
    secondary: { main: "#f59e0b" },
    background: {
      default: "#07111f",
      paper: "rgba(9, 18, 33, 0.8)",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
    },
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", "Manrope", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Space Grotesk", "Manrope", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Space Grotesk", "Manrope", sans-serif',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundImage:
            "radial-gradient(circle at top left, rgba(94, 234, 212, 0.12), transparent 28%), radial-gradient(circle at right center, rgba(245, 158, 11, 0.1), transparent 24%), linear-gradient(180deg, #07111f 0%, #0d1726 100%)",
        },
        "*::selection": {
          backgroundColor: "rgba(94, 234, 212, 0.24)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(203, 213, 225, 0.12)",
        },
      },
    },
  },
});
