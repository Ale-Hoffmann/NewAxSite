import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// Página inicial provisória: será substituída pela landing page
export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "secondary.main",
        color: "secondary.contrastText",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="overline"
          sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}
        >
          Em construção
        </Typography>
        <Typography variant="h2" component="h1" gutterBottom>
          AX Serigrafia
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.8, mb: 4 }}>
          Sua ideia em estampa.
        </Typography>
        <Button variant="contained" size="large">
          Simular pedido
        </Button>
      </Container>
    </Box>
  );
}
