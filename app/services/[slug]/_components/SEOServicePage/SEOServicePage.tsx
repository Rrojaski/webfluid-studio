import React from "react";
import { Typography, Grid2, Box, List, ListItem } from "@mui/material";

const SEOServicePage = () => {
  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        Key Features:
      </Typography>
      <List className="mb-4">
        <ListItem className="service-description-list">
          <Typography variant="h6">Comprehensive SEO Audits</Typography>
          <Typography variant="subtitle1" className="text-muted">
            We perform in-depth audits to identify areas for improvement, ensuring your site is fully optimized for search engines.
          </Typography>
        </ListItem>
        <ListItem className="service-description-list">
          <Typography variant="h6">Keyword Research</Typography>
          <Typography variant="subtitle1" className="text-muted">
            Our team conducts thorough keyword research to identify the best opportunities for driving organic traffic to your site.
          </Typography>
        </ListItem>
        <ListItem className="service-description-list">
          <Typography variant="h6">On-Page Optimization</Typography>
          <Typography variant="subtitle1" className="text-muted">
            We optimize your website&apos;s content, meta tags, and structure to improve its relevance and visibility on search engines.
          </Typography>
        </ListItem>
        <ListItem className="service-description-list">
          <Typography variant="h6">Link Building</Typography>
          <Typography variant="subtitle1" className="text-muted">
            Our link-building strategies help improve your website&apos;s authority, making it more likely to rank higher on search engines.
          </Typography>
        </ListItem>
        <ListItem className="service-description-list">
          <Typography variant="h6">Content Strategy</Typography>
          <Typography variant="subtitle1" className="text-muted">
            We develop and implement content strategies that align with your SEO goals, ensuring consistent traffic growth over time.
          </Typography>
        </ListItem>
        <ListItem className="service-description-list">
          <Typography variant="h6">Performance Tracking and Reporting</Typography>
          <Typography variant="subtitle1" className="text-muted">
            We monitor your website&apos;s performance and provide detailed reports, helping you understand the impact of our SEO efforts.
          </Typography>
        </ListItem>
      </List>
      <Typography variant="h4" gutterBottom>
        Our Process:
      </Typography>
      <Typography variant="subtitle1" className="mb-5">
        Our SEO process is designed to maximize your website&apos;s visibility and attract high-quality organic traffic.
      </Typography>
      <Grid2 container spacing={4} justifyContent="center">
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" gutterBottom>
            1. Initial Consultation and Audit
          </Typography>
          <Typography variant="subtitle1">
            We start by understanding your business and current SEO standing, followed by a comprehensive audit to identify key areas for improvement.
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" gutterBottom>
            2. Strategy Development
          </Typography>
          <Typography variant="subtitle1">
            Based on the audit, we create a tailored SEO strategy that focuses on your business goals and target audience.
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" gutterBottom>
            3. Implementation and Optimization
          </Typography>
          <Typography variant="subtitle1">
            Our team implements the SEO strategy, optimizing on-page elements, content, and technical aspects of your site.
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" gutterBottom>
            4. Monitoring and Adjustment
          </Typography>
          <Typography variant="subtitle1">
            We continuously monitor your website’s performance, making adjustments as needed to ensure ongoing success.
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default SEOServicePage;
