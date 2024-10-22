import React from 'react';
import { Typography, Grid, Box, List, ListItem } from '@mui/material';

const WebApplicationsDevelopmentPage = () => {
  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        Key Features:
      </Typography>
      <List className="mb-4">
        <ListItem className="d-flex flex-column align-items-start">
          <Typography variant="h6">Custom Web Applications</Typography>
          <Typography variant="h7" className="text-muted">
            We build custom web applications tailored to your business needs
            using modern technologies like React, Node.js, and Angular.
          </Typography>
        </ListItem>
        <ListItem className="d-flex flex-column align-items-start">
          <Typography variant="h6">Scalable Architecture</Typography>
          <Typography variant="h7" className="text-muted">
            Our applications are built with scalable architectures to
            accommodate your growing user base and future needs.
          </Typography>
        </ListItem>

        <ListItem className="d-flex flex-column align-items-start">
          <Typography variant="h6">User-Centered Design</Typography>
          <Typography variant="h7" className="text-muted">
            We focus on creating intuitive and engaging user experiences,
            ensuring your application is easy to use and visually appealing.
          </Typography>
        </ListItem>

        <ListItem className="d-flex flex-column align-items-start">
          <Typography variant="h6">Performance Optimization</Typography>
          <Typography variant="h7" className="text-muted">
            Our team optimizes your web application for speed and performance,
            ensuring quick load times and a smooth user experience.
          </Typography>
        </ListItem>

        <ListItem className="d-flex flex-column align-items-start">
          <Typography variant="h6">Security Best Practices</Typography>
          <Typography variant="h7" className="text-muted">
            We implement robust security measures to protect your application
            from potential threats and vulnerabilities.
          </Typography>
        </ListItem>
      </List>
      <Typography variant="h4" gutterBottom>
        Our Process:
      </Typography>
      <Typography variant="h7" paragraph className="mb-5">
        Our web application development process is designed to deliver
        high-quality, custom solutions that meet your business objectives.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            1. Requirement Analysis
          </Typography>
          <Typography variant="h7">
            We work closely with you to understand your business requirements
            and define the scope of the project.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            2. Design and Prototyping
          </Typography>
          <Typography variant="h7">
            Our design team creates wireframes and prototypes to visualize the
            user interface and user experience.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            3. Development
          </Typography>
          <Typography variant="h7">
            We develop the web application using modern frameworks and best
            practices, ensuring it meets all functional requirements.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            4. Testing and Quality Assurance
          </Typography>
          <Typography variant="h7">
            Our QA team rigorously tests the application to ensure it functions
            correctly and meets performance standards.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            5. Deployment and Maintenance
          </Typography>
          <Typography variant="h7">
            We deploy your application to a production environment and provide
            ongoing support and maintenance.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WebApplicationsDevelopmentPage;
