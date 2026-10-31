import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SectionHeading from "./SectionHeading";
import TodoTag from "./TodoTag";
import { orderSteps } from "@/data/landing";

// Sobre a AX + os 3 passos de um pedido pelo site
export default function AboutSection() {
  return (
    <Box component="section" id="sobre" sx={{ py: 8 }}>
      <Container
        maxWidth="lg"
        sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 4, md: 7 }, alignItems: "center" }}
      >
        {/* Lugar da foto da oficina ou da equipe (a enviar) */}
        <Box
          sx={{
            aspectRatio: "4 / 3",
            maxWidth: "100%",
            borderRadius: 3,
            border: "1px dashed",
            borderColor: "grey.400",
            background: "repeating-linear-gradient(135deg, #EDEEF1 0 14px, #F5F6F8 14px 28px)",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            color: "text.secondary",
            fontSize: 14,
            p: 2,
          }}
        >
          Foto da oficina ou da equipe (a enviar)
        </Box>

        <Box>
          <SectionHeading
            title="Sobre a AX Serigrafia"
            subtitle={
              <>
                História da serigrafia, desde quando existe e o que a torna diferente. <TodoTag>texto a definir</TodoTag>
              </>
            }
          />
          <Box component="ol" sx={{ listStyle: "none", p: 0, m: 0, mt: 3, display: "grid", gap: 1.75 }}>
            {orderSteps.map((step, i) => (
              <Box component="li" key={step.title} sx={{ display: "flex", gap: 1.75, alignItems: "flex-start" }}>
                <Box
                  sx={{
                    flex: "0 0 32px",
                    height: 32,
                    borderRadius: "50%",
                    bgcolor: "secondary.main",
                    color: "secondary.contrastText",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  {i + 1}
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography sx={{ fontWeight: 700 }}>{step.title}</Typography>
                  <Typography sx={{ color: "text.secondary", fontSize: 15 }}>{step.text}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
