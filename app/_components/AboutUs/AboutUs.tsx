import { Box, Typography } from "@mui/material";
import "./AboutUs.css";

function AboutUs() {
  return (
    <Box id="hero-about-us-container">
      <Box id="hero-about-us-container-content">
        <Typography sx={{ typography: { sm: "h2", xs: "h4" } }} id="hero-about-us-container-text" align="center">
          The best software
          <span className="text-orange"> teams </span>
          ship early and often
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutUs;
