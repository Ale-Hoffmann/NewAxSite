"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { contact } from "@/data/landing";

// Botão "Fale Conosco" fixo no canto da tela. Ao clicar, abre um cartão com o telefone e as redes.
export default function ContactButton() {
  const [open, setOpen] = useState(false);

  const items = [
    { icon: <WhatsAppIcon />, title: "WhatsApp", text: "Chame a gente para um orçamento.", href: contact.whatsappLink },
    { icon: <InstagramIcon />, title: "Instagram", text: "Veja nossos trabalhos recentes.", href: contact.instagram },
    { icon: <MailOutlinedIcon />, title: "E-mail", text: contact.email, href: `mailto:${contact.email}` },
  ];

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box
        sx={{
          position: "fixed",
          right: 16,
          bottom: 16,
          zIndex: "speedDial",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 1.5,
        }}
      >
        <Grow in={open} style={{ transformOrigin: "bottom right" }} unmountOnExit>
          <Paper id="fale-conosco" elevation={8} sx={{ width: "min(320px, calc(100vw - 32px))", borderRadius: 3, overflow: "hidden" }}>
            <Box sx={{ bgcolor: "primary.main", color: "primary.contrastText", p: 2.75, textAlign: "center" }}>
              <Typography sx={{ fontSize: 14, opacity: 0.9 }}>Orçamentos pelo WhatsApp</Typography>
              <Typography sx={{ fontSize: 26, fontWeight: 800, mt: 0.5 }}>{contact.whatsapp}</Typography>
            </Box>
            <Box component="ul" sx={{ listStyle: "none", m: 0, py: 1, px: 0 }}>
              {items.map((item) => (
                <Box
                  component="li"
                  key={item.title}
                  sx={{ display: "flex", gap: 1.5, px: 2.5, py: 1.5, alignItems: "flex-start", color: "text.primary" }}
                >
                  {item.icon}
                  <Box sx={{ minWidth: 0 }}>
                    <Typography component="a" href={item.href} sx={{ fontWeight: 700, color: "primary.dark" }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: 14 }}>{item.text}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grow>

        <Button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="fale-conosco"
          startIcon={<ChatBubbleOutlineOutlinedIcon />}
          sx={{
            bgcolor: "background.paper",
            color: "primary.dark",
            border: 2,
            borderColor: "primary.dark",
            borderRadius: 2.5,
            px: 2.25,
            py: 1.25,
            fontWeight: 700,
            fontSize: 16,
            boxShadow: 6,
            "&:hover": { bgcolor: "background.default" },
          }}
        >
          Fale Conosco
        </Button>
      </Box>
    </ClickAwayListener>
  );
}
