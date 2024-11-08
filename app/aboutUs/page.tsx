import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faLightbulb, faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import CallToAction from "../_components/CallToAction/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Webfluid Studio",
  description:
    "Learn more about Webfluid Studio, our vision, and our team. We specialize in custom website design and development solutions tailored to your business needs.",
  keywords: "Webfluid Studio, About Us, Website Design, Web Development, Digital Transformation",
  authors: [{ name: "Webfluid Studio" }],
  openGraph: {
    title: "About Us - Webfluid Studio",
    description:
      "Learn more about Webfluid Studio, our vision, and our team. We specialize in custom website design and development solutions tailored to your business needs.",
    type: "website",
    url: "https://www.webfluid.studio/aboutUs",
    images: [
      {
        url: "ttps://images.webfluid.studio/team-image-1200x630.jpg",
        alt: "Team around a table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Webfluid Studio",
    description:
      "Learn more about Webfluid Studio, our vision, and our team. We specialize in custom website design and development solutions tailored to your business needs.",
    images: "https://images.webfluid.studio/team-image-1200x630.jpg",
  },
};

export default function AboutUs() {
  return (
    <>
      <section className="content-container">
        <Box mt={15} mb={10}>
          <Container maxWidth="lg">
            <Typography className="about-us-title" variant="h6" mb={2}>
              ABOUT US
            </Typography>
            <Typography className="about-us-subtext" variant="h3" mb={10}>
              Linking Your Vision With <span>Skilled Precision</span>
            </Typography>
          </Container>
          <Container maxWidth="lg" id="employee-description-wrapper">
            {/* {employees.map((employee, index) => (
              <EmployeeDesciption key={index} employee={employee} />
            ))} */}
          </Container>
        </Box>
        <Box mb={15}>
          <Container maxWidth="lg" id="our-vision-container">
            <Typography variant="h4" mb={10}>
              Our Vision
            </Typography>
            <Box id="our-vision-content">
              <Typography variant="body1" className="values-text">
                <span>
                  <FontAwesomeIcon size="2x" icon={faBolt} />
                  <Typography variant="h5">Empowerment</Typography>
                </span>
                Equipping businesses with the tools and knowledge they need to thrive.
              </Typography>
              <Typography variant="body1" className="values-text">
                <span>
                  <FontAwesomeIcon size="2x" icon={faLightbulb} />
                  <Typography variant="h5">Innovation</Typography>
                </span>
                Upholding the highest standards of honesty and transparency in all our interactions.
              </Typography>
              <Typography variant="body1" className="values-text">
                <span>
                  <FontAwesomeIcon size="2x" icon={faHandshakeAngle} />
                  <Typography variant="h5">Collaboration</Typography>
                </span>
                We believe that we can achieve more when we work together.
              </Typography>
            </Box>
          </Container>
        </Box>
        <Box mb={15}>
          <Container maxWidth="lg" id="our-story-container">
            <Typography variant="h4" mb={10}>
              Our Story
            </Typography>

            <Typography variant="h6" maxWidth={910}>
              <span id="description-logo">Webfluid Studio</span> was founded with a vision to transform businesses through cutting-edge web development, UX/UI
              design, and digital transformation services. As a newly established startup, our small but dedicated team, led by Roman Rojas, brings together a
              wealth of expertise and a passion for innovation. We are committed to delivering high-quality, tailored solutions that help businesses enhance
              their online presence and achieve their digital goals. Join us as we embark on this exciting journey to make a significant impact in the digital
              landscape.
            </Typography>
          </Container>
        </Box>
        <Box mb={20}>
          <Container maxWidth="lg">
            <CallToAction />
          </Container>
        </Box>
      </section>
    </>
  );
}

export default AboutUs;
