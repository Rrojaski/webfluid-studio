"use client";

import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "./Testimonial2.css";

const testimonials = [
  {
    text: "Since we started working with this team, our presence on social media has grown significantly.",
    name: "Roberta Cross",
    role: "CEO - Relax Pools",
    image: "https://images.webfluid.studio/img-perfil-roberta.svg",
  },
  {
    text: "Webfluid Studio transformed our website into something truly special!",
    name: "John Doe",
    role: "Founder - Tech Solutions",
    image: "https://images.webfluid.studio/img-perfil-roberta.svg",

  },
  {
    text: "Amazing service and great results. Highly recommended!",
    name: "Alice Smith",
    role: "CMO - Digital Experts",
    image: "https://images.webfluid.studio/img-perfil-roberta.svg",
  },
];

function Testimonial2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box id="testimonial2">
      {/* Seção de título */}
      <Box className="box-textimonial-1">
        <Typography sx={{fontWeight: 'bold !important',typography: { sm:"h2",xs:"h3"}}} className="text-box-1">
          From our <span className="text-box-1-2">community.</span>
        </Typography>
        <Typography sx={{typography: { sm:"h5",xs:"h5"}}} className="text-box-2">
          Here's what other subscribers had to say about Webfluid Studio.
        </Typography>
        {/* Botões do carrossel */}
        <Box className="carousel-buttons">
          <Button onClick={handleBack} className="button-1" color="primary">
            <ArrowBack/>
          </Button>
          <Button onClick={handleNext} className="button-2" color="primary">
            <ArrowForward/>
          </Button>
        </Box>
      </Box>

      {/* Seção do depoimento */}
      <Box className="box-testimonial-2">
        <img className="aspas-testimonial"
          src="https://images.webfluid.studio/image 11.svg"
          alt="Illustration representing testimonials"
        />
        {testimonials[currentIndex] && (
          <>
            <Typography sx={{typography: { sm:"h5",xs:"h5"}}} className="paragrafo">
              {testimonials[currentIndex].text}"
            </Typography>

            {/* Perfil */}
            <Box className="box-testimonial-2-1">
              <img
                src="https://images.webfluid.studio/img-perfil.svg"
                alt="Profile picture"
              />
              <Box className="box-textimonial-2-3">
                <Typography sx={{fontWeight: 'bold !important',typography: { body1: 'p'}}}>{testimonials[currentIndex].name}</Typography>
                <Typography sx={{typography: { body1: 'p'}}}>{testimonials[currentIndex].role}</Typography>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default Testimonial2;
