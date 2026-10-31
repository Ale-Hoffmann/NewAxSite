import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: ReactNode;
};

// Título + subtítulo usado no topo de cada seção
export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <Box sx={{ maxWidth: 760 }}>
      <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 42 }, textWrap: "balance" }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography component="div" sx={{ color: "text.secondary", fontSize: 18, mt: 1.5 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
