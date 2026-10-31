import Box from "@mui/material/Box";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesPanel from "@/components/ServicesPanel";
import ProductCards from "@/components/ProductCards";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";

// Landing page (one page): cada seção é um componente em src/components
export default function Home() {
  return (
    <>
      <Header />
      <Box component="main" id="inicio">
        <HeroCarousel />
        <ServicesPanel />
        <ProductCards />
        <AboutSection />
        <Testimonials />
        <CallToAction />
      </Box>
      <Footer />
      <ContactButton />
    </>
  );
}
