import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import type { ReactNode } from "react";
import Logo from "./Logo";
import { contact, navLinks } from "@/data/landing";

const linkSx = { color: "grey.400", "&:hover": { color: "common.white" } };
const socialLinkSx = { ...linkSx, display: "inline-flex", alignItems: "center", gap: 1 };

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Box>
      <Typography component="h2" sx={{ color: "common.white", fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", mb: 1.5 }}>
        {title}
      </Typography>
      <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "grid", gap: 1, fontSize: 15 }}>
        {children}
      </Box>
    </Box>
  );
}

// Rodapé: links, contatos e redes sociais
export default function Footer() {
  return (
    <Box component="footer" id="contato" sx={{ bgcolor: "secondary.main", color: "grey.400" }}>
      <Container
        maxWidth="lg"
        sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr 1fr 1fr" }, gap: 4, pt: 6, pb: 12 }}
      >
        <Box>
          <Logo variant="dark" />
          <Typography sx={{ mt: 1.75, fontSize: 15, maxWidth: "30ch" }}>
            Estampas em serigrafia e sublimação para empresas, escolas e eventos.
          </Typography>
        </Box>

        <Column title="Navegação">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} underline="hover" sx={linkSx}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/simular" underline="hover" sx={linkSx}>
              Simular pedido
            </Link>
          </li>
        </Column>

        <Column title="Contato">
          <li>WhatsApp: {contact.whatsapp}</li>
          <li>{contact.email}</li>
          <li>{contact.address}</li>
          <li>{contact.hours}</li>
        </Column>

        <Column title="Redes">
          <li>
            <Link href={contact.whatsappLink} underline="hover" sx={socialLinkSx}>
              <WhatsAppIcon fontSize="small" />
              WhatsApp
            </Link>
          </li>
          <li>
            <Link href={contact.instagram} underline="hover" sx={socialLinkSx}>
              <InstagramIcon fontSize="small" />
              Instagram
            </Link>
          </li>
          <li>
            <Link href={contact.facebook} underline="hover" sx={socialLinkSx}>
              <FacebookIcon fontSize="small" />
              Facebook
            </Link>
          </li>
        </Column>

        <Typography sx={{ gridColumn: "1 / -1", borderTop: 1, borderColor: "secondary.light", pt: 2.5, fontSize: 13, color: "grey.500" }}>
          {/* Ano fixo: o Next 16 não aceita new Date() em página gerada antes (pré-renderizada) */}
          © 2026 AX Serigrafia
        </Typography>
      </Container>
    </Box>
  );
}
