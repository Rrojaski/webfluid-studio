import Testimonial from "../Testimonial/Testimonial";
import "./TestimonialList.css";
import { Box, Typography } from "@mui/material";

function TestimonialList() {
  const testimonials = [
    {
      name: "Psi do Futuro",
      image: "https://images.webfluid.studio/female.png",
      testimonial: `"Partnering with Webfluid Studio has been a game-changer for us! Their team consistently goes above and beyond, delivering fast, reliable, and efficient service. We couldn't recommend them more!" - Laura Souza`,
    },
    {
      name: "Otakuchan",
      image: "https://images.webfluid.studio/francisco.jfif",
      testimonial: `"Webfluid Studio completely revamped our website, turning it into a cutting-edge platform that has significantly boosted our online presence. Their professionalism, efficiency, and responsiveness were unmatched!" - Francisco Pena`,
    },
    {
      name: "Jardin Floral",
      image: "https://images.webfluid.studio/claudio.jfif",
      testimonial: `"Collaborating with Webfluid Studio was a fantastic experience. They truly grasped our vision and delivered a beautifully designed, user-friendly website that exceeded all our expectations. We're thrilled with the outcome!" - Claudio Rojas`,
    },
  ];
  return (
    <Box id="testimonial-list">
      <Typography id="testimonial-list-header" sx={{ typography: { sm: "h3", xs: "h5" } }}>
        What Our Customers Are Saying{" "}
        <Typography id="testimonial-list-header-highlight" sx={{ typography: { sm: "h3", xs: "h5" } }}>
          About Us?
        </Typography>
      </Typography>
      <Box id="testimonial-list-content">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))}
      </Box>
    </Box>
  );
}

export default TestimonialList;
