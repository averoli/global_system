import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#489A99",
    },
    secondary: {
      main: "#161C24",
    },
    error: {
      main: "#C22F2F",
    },
    black: {
      main: "#000000",
    },
    white: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamilyName: "Poppins",
    h1: {
      fontSize: "5.5rem",
      color: "white",
      
    },
    h2: {
      fontSize: "4.5rem",
      color: "white",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "bold",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
      containedPrimary: {
        color: "#fff",
      },
    },
    MuiTextField: {
      root: {
        backgroundColor: "#fff",
      },
    },
  },
});

export default theme;
