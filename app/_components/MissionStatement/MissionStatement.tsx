import { Box } from "@mui/system";
import "./MissionStatement.css";
import { Button, Typography } from "@mui/material";
import BasicImage from "../BasicImage/BasicImage";

function MissionStatement() {
  return (
    <Box id="mission-statement">
      <Box id="mission-statement-content">
        <Box id="mission-statement-content-text">
          <Typography variant="h4">
            We don't just build <span className="text-blue">websites</span> — we bring your vision to life
          </Typography>
          <Typography id="mission-statement-content-text-description" variant="h7">
            At Webfluid Studio, we turn ideas into impactful digital experiences. Our team is committed to developing high-quality projects that meet your
            unique business needs, delivering on time and ensuring client satisfaction every step of the way.
          </Typography>
          <Box className="w-100 d-flex justify-content-center justify-content-lg-end">
            <Button variant="outlined" color="primary">
              Learn More
            </Button>
          </Box>
        </Box>
        <Box id="mission-statement-content-image">
          <BasicImage id="team-image" src="https://images.webfluid.studio/team-image.jpg" alt="team" />
        </Box>
      </Box>
    </Box>
  );
}

export default MissionStatement;
