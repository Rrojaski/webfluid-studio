import "./CallToActionWhatsapp.css";
import WhatsappCode from "../WhatsappCode/WhatsappCode";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import TeamWidget from "../TeamWidget/TeamWidget";
import Link from "next/link";

function CallToActionWhatsapp() {
  return (
    <Box id="cta-whatsapp">
      <Box id="cta-whatsapp-text">
        <Typography sx={{ typography: { md: "h2", xs: "h4" } }}>
          Have a <span id="cta-whatsapp-text-highlight">BIG IDEA</span> in mind? Let&apos;s discuss what we can achieve together
        </Typography>
        <Box id="cta-whatsapp-team">
          <TeamWidget />
          <Link href="aboutUs">
            <Button id="cta-whatsapp-text-link" size="large" variant="contained" color="warning">
              Contact Us
            </Button>
          </Link>
        </Box>
        <Link id="cta-mobile-link" href="contactUs">
          <Button size="large" variant="contained" color="warning">
            Contact Us
          </Button>
        </Link>
      </Box>
      <Box id="cta-whatsapp-code-wrapper">
        <WhatsappCode />
      </Box>
    </Box>
  );
}

export default CallToActionWhatsapp;
