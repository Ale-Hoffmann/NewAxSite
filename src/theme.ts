"use client";

import { createTheme } from "@mui/material/styles";

// Identidade visual da AX Serigrafia: paleta inspirada no site da SAP
// (azul de destaque, azul-marinho nas áreas escuras e branco)
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0070F2",
      dark: "#0057D2",
      light: "#6CB4FF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#1D2D3E",
      light: "#2C3E55",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F6F8",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1D2D3E",
      secondary: "#5A5F69",
    },
    divider: "#E3E5EA",
  },
  typography: {
    fontFamily: "var(--font-inter), Arial, sans-serif",
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 800, letterSpacing: "-0.015em" },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
