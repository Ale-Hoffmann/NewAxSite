import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const metadata: Metadata = {
  title: "Simular pedido | AX Serigrafia",
};

// Página provisória: o simulador de pedido é a próxima parte do sistema
export default function SimularPage() {
  return (
    <Box component="main" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", bgcolor: "background.default" }}>
      <Container maxWidth="sm">
        <Typography sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 1.5, fontSize: 12, textTransform: "uppercase" }}>
          Em construção
        </Typography>
        <Typography variant="h2" component="h1" sx={{ fontSize: { xs: 30, md: 40 }, mt: 1 }}>
          Simulador de pedido
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 1.5, mb: 3 }}>
          Em breve você vai montar o pedido por aqui: peça e tamanhos, arte por local de estampa e seus dados.
        </Typography>
        <Button href="/" variant="contained" disableElevation>
          Voltar para o início
        </Button>
      </Container>
    </Box>
  );
}
