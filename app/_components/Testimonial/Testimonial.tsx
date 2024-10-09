import "./Testimonial.css";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
export interface TestimonialData {
  testimonial: { name: string; testimonial: string; image: string };
}
function Testimonial(data: TestimonialData) {
  return (
    <Card id="testimonial-container">
      <CardContent id="testimonial-content">
        <img id="testimonial-image" src={data.testimonial.image} alt={data.testimonial.name} />
        <Typography id="testimonial-title" sx={{ typography: { xs: "h5" } }}>
          {data.testimonial.name}
        </Typography>
        <Typography id="testimonial-description" sx={{ typography: { xs: "body1" } }}>
          <Typography className="mb-3">⭐️⭐️⭐️⭐️⭐️</Typography>
          {data.testimonial.testimonial}
        </Typography>
      </CardContent>
      <Box id="testimonial-actions">
        <Button id="testimonial-action" color="warning" variant="contained" size="medium">
          learn more
        </Button>
      </Box>
    </Card>
  );
}

export default Testimonial;
