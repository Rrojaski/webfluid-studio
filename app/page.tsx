import { Box, Container, Typography } from "@mui/material";
import "./page.css";
import Services from "./_components/Services/Services";
import AboutUs from "./_components/AboutUs/AboutUs";
import MissionStatement from "./_components/MissionStatement/MissionStatement";
import TestimonialList from "./_components/TestimonialList/TestimonialList";
import CallToActionWhatsapp from "./_components/CallToActionWhatsapp/CallToActionWhatsapp";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Improve Your Online Presence | Webfluid Studio</title>
        <meta
          name="description"
          content="Enhance your online presence, user experience, and digital strategy with innovative solutions from Webfluid Studio."
        />
        <meta name="keywords" content="online presence, user experience, digital strategy, Webfluid Studio" />
        <meta name="author" content="Webfluid Studio" />
        <meta property="og:title" content="Improve Your Online Presence | Webfluid Studio" />
        <meta
          property="og:description"
          content="Enhance your online presence, user experience, and digital strategy with innovative solutions from Webfluid Studio."
        />
        <meta property="og:image" content="https://images.webfluid.studio/laptop-guy.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Improve Your Online Presence | Webfluid Studio" />
        <meta
          name="twitter:description"
          content="Enhance your online presence, user experience, and digital strategy with innovative solutions from Webfluid Studio."
        />
        <meta name="twitter:image" content="https://images.webfluid.studio/laptop-guy.png" />
      </Head>
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
