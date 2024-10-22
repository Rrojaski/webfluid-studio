import React from "react";
import { Typography, Grid, Box, List, ListItem } from "@mui/material";

const ServicePage = () => {
  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        Key Features:
      </Typography>
      <List className="mb-4">
        <ListItem className="d-flex flex-column align-items-start">
          <Typography variant="h6">Custom Design</Typography>
          <Typography variant="h6" className="text-muted">
            Every website we create is uniquely designed to reflect your brand's identity and meet your specific business needs.
          </Typography>
        </ListItem>
        <ListItem className="d-flex flex-column align-items-start">
          <Typography variant="h6">Responsive Layouts</Typography>
          <Typography variant="h6" className="text-muted">
            Our websites are fully responsive, providing a seamless experience across all devices, including desktops, tablets, and mobile phones.
          </Typography>
        </ListItem>

        <ListItem className="d-flex flex-column align-items-start">
          <Typography variant="h6">SEO Optimization</Typography>
          <Typography variant="h6" className="text-muted">
            We implement best practices for search engine optimization (SEO) to ensure your site ranks well on search engines and attracts organic traffic.
          </Typography>
        </ListItem>

        <ListItem className="d-flex flex-column align-items-start">
          <Typography variant="h6">User-Centered Design</Typography>
          <Typography variant="h6" className="text-muted">
            We focus on user-centered design principles, creating intuitive and accessible websites that provide a positive user experience.
          </Typography>
        </ListItem>

        <ListItem className="d-flex flex-column align-items-start">
          <Typography variant="h6">Technological Excellence</Typography>
          <Typography variant="h6" className="text-muted">
            We leverage modern technologies like WordPress, Next.js, React, and Angular to build scalable and high-performing websites.
          </Typography>
        </ListItem>
      </List>
      <Typography variant="h4" gutterBottom>
        Our Process:
      </Typography>
      <Typography variant="h6" paragraph className="mb-5">
        Our website design and development process is tailored to your needs, ensuring a smooth and successful project from start to finish.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            1. Consultation and Planning
          </Typography>
          <Typography variant="h6">We start by understanding your business, goals, and target audience to create a detailed plan for your website.</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            2. Design and Development
          </Typography>
          <Typography variant="h6">
            Our team designs and develops your website, ensuring it aligns with your brand and meets all functional requirements.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            3. Testing and Launch
          </Typography>
          <Typography variant="h6">
            We rigorously test your website across different devices and browsers before launching it to ensure a flawless user experience.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            4. Ongoing Support and Maintenance
          </Typography>
          <Typography variant="h6">After launch, we provide ongoing support and maintenance to keep your website up-to-date and running smoothly.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicePage;
