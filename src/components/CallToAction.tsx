import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// Faixa azul que leva ao simulador de pedido
export default function CallToAction() {
  return (
    <Box component="section" sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexWrap: "wrap", gap: 2.5, alignItems: "center", justifyContent: "space-between", py: 5 }}
      >
        <Box>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 32 } }}>
            Pronto para tirar a ideia do papel?
          </Typography>
          <Typography sx={{ opacity: 0.9, mt: 0.75 }}>Monte o pedido em 3 etapas. Mínimo de 10 peças.</Typography>
        </Box>
        <Button href="/simular" variant="contained" color="secondary" size="large" disableElevation>
          Simular pedido →
        </Button>
      </Container>
    </Box>
  );
}
