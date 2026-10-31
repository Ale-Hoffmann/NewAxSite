// Textos e dados da landing page.
// Para mudar um texto do site, mude aqui: os componentes só desenham o que está neste arquivo.
// Itens marcados com "A DEFINIR" ainda dependem de informações da AX (ver Especificação no Obsidian).

export type PieceShape = "tee" | "polo" | "tank" | "hoodie";

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

// A DEFINIR: telefone, e-mail, endereço, horário e redes sociais reais
export const contact = {
  whatsapp: "(51) 98051-2920",
  // Link que abre a conversa no WhatsApp: wa.me/ + 55 (Brasil) + DDD + número, só dígitos
  whatsappLink: "https://wa.me/5551980512920",
  email: "axserigrafia.cachoeirinha@gmail.com",
  address: "Rua Abrahan Lincoln 170, sala 03, Bairro Vista Alegre, Cachoeirinha - Rs",
  hours: "Seg. a sex., 9:00 às 18:00",
  instagram: "https://www.instagram.com/axserigrafia/",
  facebook: "https://www.facebook.com/axserigrafia",
};

export const slides = [
  {
    eyebrow: "Serigrafia e sublimação",
    title: "Sua ideia em estampa, do desenho à peça pronta.",
    text: "Camisetas, polos, regatas, moletons e abadás estampados para empresas, escolas, eventos e equipes. Pedido a partir de 10 peças.",
    shape: "tee" as PieceShape,
    background: "linear-gradient(135deg, #2C3E55, #15212E)",
    pieceColor: "#FFFFFF",
    label: "AX",
  },
  {
    eyebrow: "Uniformes",
    title: "Uniforme da sua empresa com a cara da sua marca.",
    text: "Polo em piquet, camiseta em algodão ou dry. Você escolhe o modelo, o tecido e onde vai a estampa.",
    shape: "polo" as PieceShape,
    background: "linear-gradient(135deg, #0070F2, #0040B0)",
    pieceColor: "#1D2D3E",
  },
  {
    eyebrow: "Eventos e formaturas",
    title: "Abadás, camisetas de turma e de evento.",
    text: "Sublimação na peça inteira para quem quer cor do ombro à barra.",
    shape: "tee" as PieceShape,
    background: "linear-gradient(135deg, #F4F4F4, #D9DBE0)",
    pieceColor: "gradient",
  },
];

export const services = [
  {
    title: "Serigrafia",
    text: "A técnica clássica: tinta aplicada por tela, cor por cor. Fica viva, resistente e compensa em pedidos maiores.",
    shape: "tee" as PieceShape,
    background: "linear-gradient(135deg, #1D2D3E, #354A5F)",
    pieceColor: "#FFFFFF",
    chip: "Cores vivas e resistentes",
  },
  {
    title: "Sublimação",
    text: "A arte entra no tecido e pode cobrir a camiseta inteira, com degradês e fotos. Funciona em tecido de poliéster.",
    shape: "tee" as PieceShape,
    background: "linear-gradient(135deg, #0070F2, #1D2D3E)",
    pieceColor: "gradient",
    chip: "Camiseta completa",
  },
  {
    title: "Uniformes para empresas",
    text: "Polos e camisetas com o logo da sua empresa no peito e nas costas, na grade de tamanhos que a sua equipe precisa.",
    shape: "polo" as PieceShape,
    background: "linear-gradient(135deg, #E9EAED, #C9CBD1)",
    pieceColor: "#1D2D3E",
    chip: "Polo em piquet",
  },
  {
    title: "Turmas, times e eventos",
    text: "Camisetas de formatura, de time e abadás. Cada local da estampa recebe a sua própria arte.",
    shape: "tank" as PieceShape,
    background: "linear-gradient(135deg, #0040B0, #0070F2)",
    pieceColor: "#FFFFFF",
    chip: "Abadás e regatas",
  },
  {
    title: "Moletons",
    text: "Careca, aberto, canguru ou colegial, em moletom ou malha colegial. Ótimo para turmas de escola.",
    shape: "hoodie" as PieceShape,
    background: "linear-gradient(135deg, #2C3E55, #1D2D3E)",
    pieceColor: "#0070F2",
    chip: "4 modelos",
  },
];

// Grades de tamanho (regras da Especificação, seção 5)
const adultSizes = ["PP", "P", "M", "G", "GG", "G1", "G2", "G3", "Especial"];
const babylookSizes = ["PP", "P", "M", "G", "G1"];

export const products = [
  {
    eyebrow: "Adulto e infantil",
    title: "Camiseta tradicional",
    text: "Poliviscose, poliéster, algodão ou dry. Serigrafia ou sublimação.",
    shape: "tee" as PieceShape,
    background: "#1D2D3E",
    pieceColor: "#FFFFFF",
    sizes: adultSizes,
  },
  {
    eyebrow: "Masculina, feminina e infantil",
    title: "Polo",
    text: "Ideal para uniforme. Estampa em serigrafia (sem sublimação).",
    shape: "polo" as PieceShape,
    background: "#0070F2",
    pieceColor: "#FFFFFF",
    sizes: adultSizes,
  },
  {
    eyebrow: "Masculina, feminina e infantil",
    title: "Regata",
    text: "Para academia, corrida e eventos de verão.",
    shape: "tank" as PieceShape,
    background: "#E9EAED",
    pieceColor: "#1D2D3E",
    sizes: adultSizes,
  },
  {
    eyebrow: "Feminina",
    title: "Babylook",
    text: "Modelagem mais ajustada ao corpo.",
    shape: "tee" as PieceShape,
    background: "#2C3E55",
    pieceColor: "#0070F2",
    sizes: babylookSizes,
  },
  {
    eyebrow: "Careca, aberto, canguru e colegial",
    title: "Moletom",
    text: "Em moletom ou malha colegial, para turmas e equipes.",
    shape: "hoodie" as PieceShape,
    background: "#F5F6F8",
    pieceColor: "#1D2D3E",
    sizes: adultSizes,
  },
  {
    eyebrow: "Eventos",
    title: "Abadá",
    text: "Para blocos, festas e formaturas.",
    shape: "tank" as PieceShape,
    background: "linear-gradient(135deg, #0070F2, #1D2D3E)",
    pieceColor: "#FFFFFF",
    sizes: [] as string[], // A DEFINIR: grade do abadá
  },
];

export const orderSteps = [
  { title: "Monte o pedido no site", text: "Peça, tecido, cor e quantidade por tamanho." },
  { title: "Envie a arte", text: "Um arquivo para cada local: peito, costas, barra, mangas." },
  { title: "Receba o orçamento", text: "A AX entra em contato pelo canal que você escolher." },
];

// A DEFINIR: trocar pelos depoimentos reais de clientes
export const testimonials = [
  { quote: "Fizemos 60 camisetas para o evento da escola e chegaram antes do prazo.", author: "Cliente exemplo · Escola" },
  { quote: "As polos da equipe ficaram com a estampa perfeita, mesmo depois de muitas lavagens.", author: "Cliente exemplo · Empresa" },
  { quote: "Mandei a arte pelo site e em pouco tempo já tinha o orçamento no WhatsApp.", author: "Cliente exemplo · Time de futebol" },
];
