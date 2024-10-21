import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faLightbulb, faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import { employees } from "../_utils/constants/Emloyees";
import EmployeeDesciption from "../_components/EmployeeDesciption/EmployeeDesciption";
import CallToAction from "../_components/CallToAction/CallToAction";

function AboutUs() {
  const isHero = false;
  if (isHero) {
    return (
      <Box id="hero-about-us-container">
        <Box id="hero-about-us-container-content">
          <Typography id="hero-about-us-container-text" sx={{ typography: { sm: "h2", xs: "h4" } }} align="center">
            The best software
            <span className="text-orange"> teams </span>
            ship early and often
          </Typography>
        </Box>
      </Box>
    );
  } else {
    return (
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
          <Container maxWidth="lg" className="d-flex justify-content-center gap-4 flex-wrap">
            {employees.map((employee, index) => (
              <EmployeeDesciption key={index} employee={employee} />
            ))}
          </Container>
        </Box>
        <Box mb={15}>
          <Container maxWidth="lg" className="d-flex flex-column align-items-center text-center mb-5">
            <Typography variant="h4" mb={10}>
              Our Vision
            </Typography>
            <Box className="d-flex justify-content-center gap-5 flex-wrap">
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
          <Container maxWidth="lg" className="d-flex flex-column align-items-center text-center mb-5">
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
    );
  }
}

export default AboutUs;
