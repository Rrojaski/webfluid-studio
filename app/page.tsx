import { Box, Container, Typography } from "@mui/material";
import "./page.css";
import Services from "./_components/Services/Services";
import MissionStatement from "./_components/MissionStatement/MissionStatement";
import TestimonialList from "./_components/TestimonialList/TestimonialList";
import CallToActionWhatsapp from "./_components/CallToActionWhatsapp/CallToActionWhatsapp";
import { Metadata } from "next";
import AboutUs2 from "./_components/AboutUs2/AboutUs2";
import CallToAction2 from "./_components/CallToAction2/CallToAction2";
import OurProcess from "./_components/OurProcess/OurProcess";
import Testimonial2 from "./_components/Testimonial2/Testimonial2";

import CallToAction3 from "./_components/CallToAction3/CallToAction3";

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
        url: "https://images.webfluid.studio/team-image-1200x630.jpg",
        alt: "Team around a table",
      },
    ],
    url: "https://webfluid.studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Improve Your Online Presence | Webfluid Studio",
    description: "Enhance your online presence, user experience, and digital strategy with innovative solutions from Webfluid Studio.",
    images: "https://images.webfluid.studio/team-image-1200x630.jpg",
  },
};

export default function Home() {
  return (
    <>
      <section className="content-container">
        <div className="hero-container home-container">
          <div className="hero-text-container">
            <div className="hero-text">
              <Typography variant="h1" className="title" component="h1" mb={2}>
                Improve your online presence
              </Typography>
              <Typography variant="h6" className="subtext">
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

          <Container maxWidth="lg" className="home-section" id="about-us-2">
            <AboutUs2 />
          </Container>
          {/* <Container>
            <CallToAction2></CallToAction2>
          </Container> */}
          <Container>
            <Testimonial2 />
          </Container>

          <Container maxWidth="lg" id="contact-form-whatsapp-code" className="home-section">
            <CallToActionWhatsapp />
          </Container>
          <Container>
            <Typography variant="h3" className="hero-title" mb={8}>
              Our Process
            </Typography>
            <Box className="our-process-container">
              <OurProcess></OurProcess>
            </Box>
          </Container>
          <Container>
            <CallToAction3 />
          </Container>
        </Box>
      </section>
    </>
  );
}
