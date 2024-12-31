import Link from "next/link";
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
        <Typography sx={{ typography: { xs: "h5" } }} id="testimonial-title">
          {data.testimonial.name}
        </Typography>
        <Typography sx={{ typography: { xs: "body1" } }} id="testimonial-description">
          <span className="mb-3">⭐️⭐️⭐️⭐️⭐️</span>
          {data.testimonial.testimonial}
        </Typography>
      </CardContent>
      <Box id="testimonial-actions">
        <Link href="aboutUs">
          <Button id="testimonial-action" color="warning" variant="contained" size="medium">
            learn more
          </Button>
        </Link>
      </Box>
    </Card>
  );
}

export default Testimonial;
