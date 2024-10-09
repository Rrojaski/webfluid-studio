import { Box, Container } from '@mui/system';
import './CallToActionContactUs.css';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function CallToActionContactUs() {
  return (
    <Box id="cta-section">
      <Container maxWidth="lg">
        <Typography variant="h5" mb={2}>
          Interested in Similar Results?
        </Typography>
        <Button
          component={Link}
          to="/contactUs"
          variant="contained"
          color="warning"
          size="large"
        >
          Contact Us
        </Button>
      </Container>
    </Box>
  );
}

export default CallToActionContactUs;
