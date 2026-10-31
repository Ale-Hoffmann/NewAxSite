import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PieceArt from "./PieceArt";
import SectionHeading from "./SectionHeading";
import TodoTag from "./TodoTag";
import { products } from "@/data/landing";

// Cards com cada tipo de peça e a sua grade de tamanhos
export default function ProductCards() {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Peças que a gente estampa"
          subtitle="Grades de tamanho de cada modelo. No simulador você preenche a quantidade de cada tamanho."
        />

        <Grid container spacing={2.5} sx={{ mt: 4.5 }}>
          {products.map((product) => (
            <Grid key={product.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card variant="outlined" sx={{ height: "100%", borderRadius: 3, display: "flex", flexDirection: "column" }}>
                <Box sx={{ aspectRatio: "16 / 10", display: "grid", placeItems: "center", background: product.background }}>
                  <PieceArt shape={product.shape} color={product.pieceColor} width="38%" />
                </Box>
                <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
                  <Typography sx={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "text.secondary" }}>
                    {product.eyebrow}
                  </Typography>
                  <Typography variant="h3" sx={{ fontSize: 20 }}>
                    {product.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", fontSize: 15 }}>{product.text}</Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: "auto", pt: 1.25 }}>
                    {product.sizes.length === 0 ? (
                      <TodoTag>grade a definir</TodoTag>
                    ) : (
                      product.sizes.map((size) => (
                        <Box
                          key={size}
                          component="span"
                          sx={{
                            fontSize: 12,
                            fontWeight: 600,
                            px: 1,
                            py: 0.375,
                            borderRadius: 1,
                            bgcolor: "background.default",
                            border: 1,
                            borderColor: "divider",
                          }}
                        >
                          {size}
                        </Box>
                      ))
                    )}
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
