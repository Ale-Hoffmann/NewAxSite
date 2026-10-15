"use client";

import { createTheme } from "@mui/material/styles";

// Identidade visual da AX Serigrafia: preto, vermelho e branco
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#D7262E",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#111111",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F6F8",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111111",
      secondary: "#5A5F69",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), Arial, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
