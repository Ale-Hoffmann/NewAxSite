"use client";

import { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PieceArt from "./PieceArt";
import { slides } from "@/data/landing";

const INTERVAL_MS = 6000;

// Carrossel de destaques: troca de slide sozinho a cada 6 segundos, ou pelas setas e pontinhos
export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  // Muda quando o usuário clica, para reiniciar a contagem do troca-sozinho
  const [resetKey, setResetKey] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
    setResetKey((k) => k + 1);
  }, []);

  useEffect(() => {
    // Quem pediu "menos movimento" no sistema não tem troca automática
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), INTERVAL_MS);
    return () => clearInterval(timer);
  }, [resetKey]);

  return (
    <Box
      component="section"
      aria-roledescription="carrossel"
      aria-label="Destaques"
      sx={{ position: "relative", overflow: "hidden", bgcolor: "secondary.main", color: "secondary.contrastText" }}
    >
      <Box
        sx={{
          display: "flex",
          transform: `translateX(-${current * 100}%)`,
          transition: "transform .5s ease",
          "@media (prefers-reduced-motion: reduce)": { transition: "none" },
        }}
      >
        {slides.map((slide, i) => (
          <Box
            key={slide.title}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${slides.length}`}
            aria-hidden={i !== current}
            sx={{ flex: "0 0 100%", minWidth: 0 }}
          >
            <Container
              maxWidth="lg"
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
                gap: 3,
                alignItems: "center",
                pt: { xs: 5, md: 8 },
                pb: { xs: 9, md: 11 },
              }}
            >
              <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "primary.light" }}>
                  {slide.eyebrow}
                </Typography>
                <Typography variant="h1" sx={{ fontSize: { xs: 32, md: 54 }, mt: 1.25, textWrap: "balance" }}>
                  {slide.title}
                </Typography>
                <Typography sx={{ color: "grey.400", fontSize: 17, maxWidth: "46ch", mt: 1.75 }}>{slide.text}</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 3 }}>
                  <Button href="/simular" variant="contained" size="large" disableElevation tabIndex={i === current ? 0 : -1}>
                    Simular pedido
                  </Button>
                  {i === 0 && (
                    <Button href="#servicos" variant="outlined" size="large" color="inherit" tabIndex={i === current ? 0 : -1}>
                      Ver serviços
                    </Button>
                  )}
                </Box>
              </Box>
              <Box
                sx={{
                  aspectRatio: "4 / 3",
                  maxWidth: "100%",
                  borderRadius: 3,
                  display: "grid",
                  placeItems: "center",
                  background: slide.background,
                }}
              >
                <PieceArt shape={slide.shape} color={slide.pieceColor} label={slide.label} width="62%" />
              </Box>
            </Container>
          </Box>
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: "absolute", left: 0, right: 0, bottom: 20, display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box sx={{ display: "flex", gap: 1, flex: 1 }}>
          {slides.map((slide, i) => (
            <Box
              key={slide.title}
              component="button"
              aria-label={`Ir para o slide ${i + 1}`}
              aria-current={i === current}
              onClick={() => goTo(i)}
              sx={{
                width: 28,
                height: 4,
                p: 0,
                border: 0,
                borderRadius: 1,
                cursor: "pointer",
                bgcolor: i === current ? "primary.main" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </Box>
        <IconButton aria-label="Slide anterior" onClick={() => goTo(current - 1)} sx={{ color: "common.white", border: 1, borderColor: "rgba(255,255,255,0.4)" }}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton aria-label="Próximo slide" onClick={() => goTo(current + 1)} sx={{ color: "common.white", border: 1, borderColor: "rgba(255,255,255,0.4)" }}>
          <ChevronRightIcon />
        </IconButton>
      </Container>
    </Box>
  );
}
