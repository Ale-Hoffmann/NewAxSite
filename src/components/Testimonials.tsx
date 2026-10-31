import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SectionHeading from "./SectionHeading";
import TodoTag from "./TodoTag";
import { testimonials } from "@/data/landing";

// Depoimentos de clientes (por enquanto, exemplos)
export default function Testimonials() {
  return (
    <Box component="section" id="depoimentos" sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <SectionHeading title="Quem já estampou com a gente" subtitle={<TodoTag>exemplos: trocar por depoimentos reais</TodoTag>} />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2.5, mt: 4.5 }}>
          {testimonials.map((item) => (
            <Box
              component="figure"
              key={item.quote}
              sx={{ m: 0, borderTop: 3, borderColor: "primary.main", pt: 2.25, display: "flex", flexDirection: "column", gap: 1.75 }}
            >
              <Typography component="blockquote" sx={{ m: 0, fontSize: 17 }}>
                “{item.quote}”
              </Typography>
              <Typography component="figcaption" sx={{ color: "text.secondary", fontWeight: 600, fontSize: 14 }}>
                {item.author}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
