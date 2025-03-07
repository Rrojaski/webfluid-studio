import React from "react";
import { Typography, Grid, Box, List, ListItem } from "@mui/material";

const DigitalMarketingPage = () => {
  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        Key Features:
      </Typography>
      <List className="mb-4">
        <ListItem className="service-description-list">
          <Typography variant="h6">Comprehensive Strategies</Typography>
          <Typography variant="subtitle1" className="text-muted">
            We create customized digital marketing strategies that align with your business goals and target audience.
          </Typography>
        </ListItem>
        <ListItem className="service-description-list">
          <Typography variant="h6">SEO and SEM</Typography>
          <Typography variant="subtitle1" className="text-muted">
            Our team leverages Search Engine Optimization (SEO) and Search Engine Marketing (SEM) to improve your website&apos;s visibility and drive qualified
            traffic.
          </Typography>
        </ListItem>

        <ListItem className="service-description-list">
          <Typography variant="h6">Social Media Marketing</Typography>
          <Typography variant="subtitle1" className="text-muted">
            We develop and manage effective social media campaigns to engage your audience and build brand loyalty.
          </Typography>
        </ListItem>

        <ListItem className="service-description-list">
          <Typography variant="h6">Content Marketing</Typography>
          <Typography variant="subtitle1" className="text-muted">
            Our content marketing strategies focus on creating valuable, relevant, and consistent content to attract and retain a clearly defined audience.
          </Typography>
        </ListItem>

        <ListItem className="service-description-list">
          <Typography variant="h6">Email Marketing</Typography>
          <Typography variant="subtitle1" className="text-muted">
            We design and implement email marketing campaigns that nurture leads and drive conversions.
          </Typography>
        </ListItem>
      </List>
      <Typography variant="h4" gutterBottom>
        Our Process:
      </Typography>
      <Typography variant="subtitle1" className="mb-5">
        Our digital marketing process is tailored to help you achieve your business objectives, from increasing brand awareness to driving conversions.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            1. Discovery and Strategy
          </Typography>
          <Typography variant="subtitle1">
            We begin by understanding your business goals, target audience, and competitive landscape to craft a strategy that delivers results.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            2. Campaign Creation
          </Typography>
          <Typography variant="subtitle1">
            Our team creates targeted digital marketing campaigns that resonate with your audience and align with your business objectives.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            3. Execution and Management
          </Typography>
          <Typography variant="subtitle1">
            We execute your campaigns across various digital channels, continuously monitoring and optimizing for the best performance.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            4. Reporting and Analysis
          </Typography>
          <Typography variant="subtitle1">
            We provide detailed reports and insights on campaign performance, helping you make informed decisions and adjust strategies as needed.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            5. Continuous Optimization
          </Typography>
          <Typography variant="subtitle1">Our team continuously optimizes your digital marketing efforts to ensure sustained growth and success.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DigitalMarketingPage;
