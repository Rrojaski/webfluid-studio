import { Typography } from "@mui/material";
import "./OurProcess.css";
import { Box } from "@mui/system";

function OurProcess() {
  return (
    <Box className="our-process-component-container">
      <Box className="our-process-item">
        <img src="https://images.webfluid.studio/ourprocess-guy-1.svg" alt="Group hugging" />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>1.Website Strategy & Planning</Typography>
        <Typography>We analyze your business goals and audience to develop a personalized strategic plan. Our aim is to ensure your website meets your needs and drives the desired results.</Typography>
      </Box>
      <Box className="our-process-item">
        <img src="https://images.webfluid.studio/ourprocess-guy-2.svg" alt="Group hugging" />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>1.Website Strategy & Planning</Typography>
        <Typography>We analyze your business goals and audience to develop a personalized strategic plan. Our aim is to ensure your website meets your needs and drives the desired results.</Typography>
      </Box>
      <Box className="our-process-item">
        <img src="https://images.webfluid.studio/ourprocess-guy-3.svg" alt="Group hugging" />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>1.Website Strategy & Planning</Typography>
        <Typography>We analyze your business goals and audience to develop a personalized strategic plan. Our aim is to ensure your website meets your needs and drives the desired results.</Typography>
      </Box>
    </Box>
  );
}

export default OurProcess;
