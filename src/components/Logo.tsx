import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  // "light" para fundo claro (cabeçalho), "dark" para fundo escuro (rodapé)
  variant?: "light" | "dark";
};

// Logo provisório: quadrado azul com "AX" + nome e slogan
export default function Logo({ variant = "light" }: Props) {
  const dark = variant === "dark";

  return (
    <Box component="a" href="#inicio" sx={{ display: "flex", alignItems: "center", gap: 1.25, textDecoration: "none" }}>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: 1.5,
          bgcolor: "primary.main",
          color: "primary.contrastText",
          display: "grid",
          placeItems: "center",
          fontWeight: 900,
          fontSize: 17,
        }}
      >
        AX
      </Box>
      <Box sx={{ lineHeight: 1.1 }}>
        <Typography sx={{ fontWeight: 800, fontSize: 16, letterSpacing: 0.3, color: dark ? "common.white" : "text.primary" }}>
          AX SERIGRAFIA
        </Typography>
        <Typography sx={{ fontSize: 11, color: dark ? "grey.500" : "text.secondary" }}>Sua ideia em estampa</Typography>
      </Box>
    </Box>
  );
}
