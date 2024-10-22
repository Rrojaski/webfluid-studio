import { Box, Container } from "@mui/system";
import "./CallToActionContactUs.css";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

function CallToActionContactUs() {
  return (
    <Box id="cta-section">
      <Container maxWidth="lg">
        <Typography variant="h5" mb={2}>
          Interested in Similar Results?
        </Typography>
        <Link href="/contactUs">
          <Button variant="contained" color="warning" size="large">
            Contact Us
          </Button>
        </Link>
      </Container>
    </Box>
  );
}

export default CallToActionContactUs;
