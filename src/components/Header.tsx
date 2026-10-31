"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "./Logo";
import { navLinks } from "@/data/landing";

// Cabeçalho fixo no topo. No celular, o menu vira um botão que abre a lista de links.
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: "background.paper", color: "text.primary", borderBottom: 1, borderColor: "divider" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 68, gap: 3 }}>
          <Logo />

          <Box component="nav" aria-label="Menu principal" sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, ml: "auto" }}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                sx={{ color: "text.primary", fontWeight: 500, "&:hover": { color: "primary.main", bgcolor: "background.default" } }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <Button href="/simular" variant="contained" disableElevation sx={{ ml: { xs: "auto", md: 1 }, whiteSpace: "nowrap" }}>
            Simular pedido
          </Button>

          <IconButton
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            sx={{ display: { md: "none" }, color: "text.primary" }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </Container>

      <Collapse in={open} sx={{ display: { md: "none" } }}>
        <Box component="nav" aria-label="Menu do celular" sx={{ borderTop: 1, borderColor: "divider" }}>
          {navLinks.map((link) => (
            <Box
              key={link.href}
              component="a"
              href={link.href}
              onClick={() => setOpen(false)}
              sx={{ display: "block", px: 2, py: 1.75, color: "text.primary", textDecoration: "none", borderBottom: 1, borderColor: "divider" }}
            >
              {link.label}
            </Box>
          ))}
        </Box>
      </Collapse>
    </AppBar>
  );
}
