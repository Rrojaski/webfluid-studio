import { Typography } from "@mui/material";
import "./OurProcess.css";
import { Box } from "@mui/system";

function OurProcess() {
  return (
    <Box className="our-process-component-container">
      <Box className="our-process-item">
        <img src="./assets/images/ourprocess-guy-1.svg" alt="Group hugging" />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>1.Website Strategy & Planning</Typography>
        <Typography>We analyze your business goals and audience to develop a personalized strategic plan. Our aim is to ensure your website meets your needs and drives the desired results.</Typography>
      </Box>
      <Box className="our-process-item">
        <img src="./assets/images/ourprocess-guy-2.svg" alt="Group hugging" />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>2.Website Design & Development</Typography>
        <Typography>We create professional, responsive, and high-performing websites. Using clean and optimized code, we deliver an engaging user experience focused on functionality and aesthetics.</Typography>
      </Box>
      <Box className="our-process-item">
        <img src="./assets/images/ourprocess-guy-3.svg" alt="Group hugging" />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>3.Website Launch & Support</Typography>
        <Typography>We ensure a hassle-free launch, making sure everything runs smoothly. Additionally, we provide training for your team and ongoing support to keep your website efficient, updated, and aligned with your goals.</Typography>
      </Box>
    </Box>
  );
}

export default OurProcess;
