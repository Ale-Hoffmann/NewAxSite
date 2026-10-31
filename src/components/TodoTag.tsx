import Box from "@mui/material/Box";

// Etiqueta amarela que marca um conteúdo provisório (ainda depende de informação da AX)
export default function TodoTag({ children }: { children: string }) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        fontSize: 12,
        fontWeight: 700,
        color: "warning.dark",
        bgcolor: "#FFF3C4",
        borderRadius: 1,
        px: 0.875,
        py: 0.25,
        verticalAlign: "middle",
      }}
    >
      {children}
    </Box>
  );
}
