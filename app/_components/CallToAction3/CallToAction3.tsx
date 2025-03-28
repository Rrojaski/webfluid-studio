import "./CallToAction3.css";
import { Box, Button, Typography } from "@mui/material";

function CallToAction3() {
  return (
    <Box className="call-to-action-3-wrapper">
      <Typography sx={{ typography: { md: "h2", sm: "h3", xs: "h4" } }}>Create better together.</Typography>
      <Typography>
        Great ideas start with a simple conversation. We&apos;re here to listen, collaborate, and turn your ideas into extraordinary results. Let&apos;s create something
        unique together!
      </Typography>
      <Button variant="outlined">Contact Us</Button>
      <img className="call-to-action-3-image" src="https://images.webfluid.studio/getty-images-gEEj-X_03Cs-unsplash.svg" alt="Picture of the a group" />
    </Box>
  );
}

export default CallToAction3;
