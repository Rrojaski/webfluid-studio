import "./Footer.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <Box className="footer-container" py={5}>
      <Container maxWidth="lg">
        <h3 className="footer-header">Connect With Us</h3>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                <Link href="https://www.facebook.com/people/Webfluid-Studio/61563334992641/" target="_blank" color="inherit" underline="none">
                  Facebook
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="https://x.com/webfluidstudio/" target="_blank" color="inherit" underline="none">
                  Twitter
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="https://www.linkedin.com/company/webfluid-studio/" target="_blank" color="inherit" underline="none">
                  LinkedIn
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="https://www.instagram.com/webfluidstudio/" target="_blank" color="inherit" underline="none">
                  Instagram
                </Link>
              </Grid>
              <Grid item xs={12} md={2}>
                <Link href="https://github.com/webfluidstudio/" target="_blank" color="inherit" underline="none">
                  GitHub
                </Link>
              </Grid>
              {/* <Grid item xs={12} md={2}>
                <ReactLink to="/blog" id="blog-button">
                  Blog
                </ReactLink>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid mt={4} item xs={12}>
            <h3 className="footer-header">Contact Us</h3>
            <p>Address: 601 Brickell Key Drive, Suite 700 Miami, FL 33131</p>
            <p className="footer-phone">
              Phone:
              <a href="tel:786-856-2000">786 856 2000</a>
            </p>
            <p className="footer-whatsapp">
              WhatsApp:
              <a href="https://api.whatsapp.com/send?phone=7868562000" rel="noreferrer" target="_blank">
                Chat With Us
              </a>
            </p>
            <p className="footer-email">
              Email:
              <a
                href="mailto:ask@webfluid.studio.com?subject=Inquiry%20from%20Website:%20Seeking%20Webfluid%20Studio's%20Expert%20Services"
                rel="noreferrer"
                target="_blank">
                ask@webfluid.studio
              </a>
            </p>
          </Grid>
          <Grid item xs={12}>
            Copyright © 2024 Webfluid Studio
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
