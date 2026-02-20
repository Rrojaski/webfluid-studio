import "./page.css";
import Container from "@mui/material/Container";
import { Box, CardContent, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../_components/ContactForm/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Webfluid Studio",
  description:
    "Get in touch with Webfluid Studio for custom website design and development solutions. Contact us today to discuss your project and see how we can help you enhance your online presence.",
  keywords: "Webfluid Studio, Contact Us, Website Design, Web Development, Digital Transformation",
  authors: [{ name: "Webfluid Studio" }],
  openGraph: {
    title: "Contact Us - Webfluid Studio",
    description:
      "Get in touch with Webfluid Studio for custom website design and development solutions. Contact us today to discuss your project and see how we can help you enhance your online presence.",
    type: "website",
    url: "https://www.webfluid.studio/contactUs",
    images: [
      {
        url: "./images/team-image-1200x630.jpg",
        alt: "Team around a table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Webfluid Studio",
    description:
      "Get in touch with Webfluid Studio for custom website design and development solutions. Contact us today to discuss your project and see how we can help you enhance your online presence.",
    images: "./images/team-image-1200x630.jpg",
  },
};

function ContactUs() {
  return (
    <>
      <Box mt={17} mb={35}>
        <Container maxWidth="lg" className="contact-us-container">
          <div className="contact-us-container">
            <Box className="contact-us-card">
              <CardContent>
                <ContactForm />
              </CardContent>
            </Box>
            <Box
              className="contact-us-card-contact-info"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}>
              <Box className="contact-us-card contact-us-card-image"></Box>
              <Box
                sx={{
                  width: "100%",
                  padding: "30px",
                  borderRadius: "20px",
                }}>
                <Box mb={2} className="contact-info-container">
                  <FontAwesomeIcon className="contact-info-container-icon" color="#fff" icon={faEnvelope} />
                  <Box>
                    <Typography>Email</Typography>
                    <a
                      className="contactus-email"
                      href="mailto:ask@webfluid.studio?subject=Inquiry%20from%20Website:%20Seeking%20Webfluid%20Studio's%20Expert%20Services"
                      rel="noreferrer"
                      target="_blank">
                      ask@webfluid.studio
                    </a>
                  </Box>
                </Box>
                <Box mb={2} className="contact-info-container">
                  <FontAwesomeIcon className="contact-info-container-icon" color="#fff" icon={faPhone} />
                  <Box>
                    <Typography>Phone</Typography>
                    <Typography>
                      <a id="company-phone-number" href="tel:786-856-2000" rel="noreferrer">
                        786 856 2000
                      </a>
                    </Typography>
                  </Box>
                </Box>
                <Box className="contact-info-container">
                  <Box id="whatsapp-icon-container" className="contact-info-container-icon">
                    <img id="whatsapp-icon" alt="Whatsapp logo" src="/assets/svg/whatsapp.svg" />
                  </Box>
                  <Box>
                    <Typography>WhatsApp</Typography>
                    <Typography>
                      <a id="whatsapp-link" href="https://api.whatsapp.com/send?phone=7868562000" rel="noreferrer" target="_blank">
                        Chat With Us
                      </a>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>
        </Container>
      </Box>
    </>
  );
}

export default ContactUs;
