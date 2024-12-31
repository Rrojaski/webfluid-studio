import { Box } from "@mui/system";
import "./MissionStatement.css";
import { Button, Typography } from "@mui/material";
import BasicImage from "../BasicImage/BasicImage";
import Link from "next/link";

function MissionStatement() {
  return (
    <Box id="mission-statement">
      <Box id="mission-statement-content">
        <Box id="mission-statement-content-text">
          <Typography variant="h4">
            We don&apos;t just build <span className="text-blue">websites</span> — we bring your vision to life
          </Typography>
          <Typography variant="h6" id="mission-statement-content-text-description">
            At Webfluid Studio, we turn ideas into impactful digital experiences. Our team is committed to developing high-quality projects that meet your
            unique business needs, delivering on time and ensuring client satisfaction every step of the way.
          </Typography>
          <Box id="mission-statement-actions">
            <Link href="aboutUs">
              <Button variant="outlined" color="primary">
                Learn More
              </Button>
            </Link>
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
