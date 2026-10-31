"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import PieceArt from "./PieceArt";
import SectionHeading from "./SectionHeading";
import { services } from "@/data/landing";

// Painel interativo (estilo SAP): tópicos à esquerda; o tópico escolhido abre o texto e troca a imagem à direita
export default function ServicesPanel() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <Box component="section" id="servicos" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Do jeito que a sua estampa precisa"
          subtitle="Cada técnica tem o seu ponto forte. Escolha um serviço para ver como funciona."
        />

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "5fr 7fr" }, gap: { xs: 3.5, md: 6 }, mt: 4.5 }}>
          <Box role="tablist" aria-label="Serviços" sx={{ borderLeft: 2, borderColor: "divider", display: "flex", flexDirection: "column" }}>
            {services.map((item, i) => {
              const isActive = i === active;
              return (
                <ButtonBase
                  key={item.title}
                  role="tab"
                  id={`servico-${i}`}
                  aria-selected={isActive}
                  aria-controls="servico-painel"
                  onClick={() => setActive(i)}
                  sx={{
                    display: "block",
                    textAlign: "left",
                    ml: "-2px",
                    py: 1.75,
                    pl: 2.5,
                    borderLeft: 3,
                    borderColor: isActive ? "primary.main" : "transparent",
                    "&:hover h3": { color: "primary.main" },
                    "&.Mui-focusVisible": { outline: 2, outlineColor: "primary.main" },
                  }}
                >
                  <Typography variant="h3" sx={{ fontSize: 19, fontWeight: 600, color: isActive ? "primary.main" : "text.primary" }}>
                    {item.title}
                  </Typography>
                  {isActive && (
                    <Box sx={{ mt: 1.25 }}>
                      <Typography sx={{ color: "text.secondary", fontSize: 15 }}>{item.text}</Typography>
                      <Link
                        href="/simular"
                        underline="hover"
                        onClick={(e) => e.stopPropagation()}
                        sx={{ display: "inline-block", mt: 1.5, fontWeight: 600, fontSize: 15 }}
                      >
                        Simular pedido ›
                      </Link>
                    </Box>
                  )}
                </ButtonBase>
              );
            })}
          </Box>

          <Box
            id="servico-painel"
            role="tabpanel"
            aria-labelledby={`servico-${active}`}
            sx={{
              position: "relative",
              aspectRatio: "16 / 11",
              maxWidth: "100%",
              borderRadius: 3,
              overflow: "hidden",
              display: "grid",
              placeItems: "center",
              background: service.background,
              transition: "background .35s",
            }}
          >
            <PieceArt shape={service.shape} color={service.pieceColor} width="48%" />
            <Box
              sx={{
                position: "absolute",
                left: 16,
                bottom: 16,
                bgcolor: "background.paper",
                borderRadius: 2,
                px: 1.75,
                py: 1.25,
                fontWeight: 700,
                fontSize: 14,
                boxShadow: 3,
              }}
            >
              {service.chip}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
