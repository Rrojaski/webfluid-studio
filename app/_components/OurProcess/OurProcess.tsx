import { Typography } from "@mui/material";
import "./OurProcess.css";
import { Box } from "@mui/system";

function OurProcess() {
  return (
    <Box className="our-process-container">
      <Box>
        <img src="path/to/your/image.jpg" alt="Description of image" />
        <Typography>1.Website Strategy & Planning</Typography>
        <Typography>We analyze your business goals and audience to develop a personalized strategic plan. Our aim is to ensure your website meets your needs and drives the desired results.</Typography>
      </Box>
    </Box>
  );
}

export default OurProcess;
