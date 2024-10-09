import "./CallToActionWhatsapp.css";
import WhatsappCode from "../WhatsappCode/WhatsappCode";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import TeamWidget from "../TeamWidget/TeamWidget";

function CallToActionWhatsapp() {
  return (
    <Box id="cta-whatsapp">
      <Box id="cta-whatsapp-text">
        <Typography sx={{ typography: { md: "h2", xs: "h4" } }}>
          Have a <span id="cta-whatsapp-text-highlight">BIG IDEIA</span> in mind? Lest&apos;'s discuss what we can achieve together
        </Typography>
        <Box id="cta-whatsapp-team">
          <TeamWidget />
        </Box>
      </Box>
      <Box id="cta-whatsapp-code-wrapper">
        <WhatsappCode />
      </Box>
    </Box>
  );
}

export default CallToActionWhatsapp;
