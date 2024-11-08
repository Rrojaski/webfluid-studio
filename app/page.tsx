import { Box, Container, Typography } from "@mui/material";
import "./page.css";
import Services from "./_components/Services/Services";
import AboutUs from "./_components/AboutUs/AboutUs";
import MissionStatement from "./_components/MissionStatement/MissionStatement";
import TestimonialList from "./_components/TestimonialList/TestimonialList";
import CallToActionWhatsapp from "./_components/CallToActionWhatsapp/CallToActionWhatsapp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Improve Your Online Presence | Webfluid Studio",
  description: "Enhance your online presence, user experience, and digital strategy with innovative solutions from Webfluid Studio.",
  keywords: "online presence, user experience, digital strategy, Webfluid Studio",
  authors: [{ name: "Webfluid Studio" }],
  openGraph: {
    title: "Improve Your Online Presence | Webfluid Studio",
    description: "Enhance your online presence, user experience, and digital strategy with innovative solutions from Webfluid Studio.",
    images: [
      {
        url: "https://images.webfluid.studio/team-image.jpg",
        alt: "Laptop Guy",
      },
    ],
    url: "https://yourwebsite.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Improve Your Online Presence | Webfluid Studio",
    description: "Enhance your online presence, user experience, and digital strategy with innovative solutions from Webfluid Studio.",
    images: "https://images.webfluid.studio/team-image.jpg",
  },
};

export default function Home() {
  return (
    <>
      <section className="content-container">
        <div className="hero-container home-container">
          <div className="hero-text-container">
            <div className="hero-text">
              <Typography className="title" variant="h1" component="h1" mb={2}>
                Improve your online presence
              </Typography>
              <Typography className="subtext" variant="h6">
                Enhance your online presence, user experience, and digital strategy with innovative solutions from Webfluid Studio.
              </Typography>
            </div>
            <img className="laptop" src="https://images.webfluid.studio/laptop-guy.png" alt="laptop" />
          </div>
          <img id="home-wave-2" className="wave-image" src="/assets/svg/wave-2.svg" alt="Wave border" loading="eager"></img>
        </div>
        <Box className="home-content-wrapper">
          <Container maxWidth="lg" className="home-section" id="services">
            <Services />
          </Container>

          <div id="about-us">
            <AboutUs />
          </div>
          <Container maxWidth="lg" className="home-section" id="about-us">
            <MissionStatement />
          </Container>
          <div id="testimonials">
            <TestimonialList />
          </div>

          <Container maxWidth="lg" id="contact-form-whatsapp-code" className="home-section">
            <CallToActionWhatsapp />
          </Container>
        </Box>
      </section>
    </>
  );
}
