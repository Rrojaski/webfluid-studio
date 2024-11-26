import React from "react";
import "./page.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Card, Typography, Divider, Grid, Tooltip } from "@mui/material";
import { CaseStudyList } from "@/app/_utils/constants/CaseStudyList";
import appList from "@/app/_utils/constants/AppList";
import CallToActionContactUs from "@/app/_components/CallToActionContactUs/CallToActionContactUs";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const caseStudy = CaseStudyList.find((x) => x.slug === params.slug);
  if (!caseStudy) return {};
  return {
    title: `Case Study - ${caseStudy.title} | Webfluid Studio`,
    description: `Explore our detailed case study on ${caseStudy.title} to see how Webfluid Studio has helped businesses enhance their online presence with custom website design and development solutions.`,
    keywords: "Webfluid Studio, Case Study, Website Design, Web Development, Digital Transformation",
    authors: [{ name: "Webfluid Studio" }],
    openGraph: {
      title: `Case Study - ${caseStudy.title} | Webfluid Studio`,
      description: `Explore our detailed case study on ${caseStudy.title} to see how Webfluid Studio has helped businesses enhance their online presence with custom website design and development solutions.`,
      type: "website",
      url: `https://www.webfluid.studio/caseStudies/${caseStudy.slug}`,
      images: [
        {
          url: caseStudy.image,
          alt: caseStudy.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Case Study - ${caseStudy.title} | Webfluid Studio`,
      description: `Explore our detailed case study on ${caseStudy.title} to see how Webfluid Studio has helped businesses enhance their online presence with custom website design and development solutions.`,
      images: caseStudy.image,
    },
  };
}

function CaseStudyView({ params }: { params: { slug: string } }) {
  const caseStudy = CaseStudyList.find((x) => x.slug === params.slug);
  if (!caseStudy) return null;

  let ids: number[] = [];
  switch (parseInt(caseStudy.id)) {
    case 1:
      ids = [7, 9, 10];
      break;
    case 7:
      ids = [1, 3, 5, 6, 9];
      break;
    default:
  }
  const apps = appList.filter((x) => ids.includes(x.id));

  return (
    <>
      <div>
        <Box className="case-study-view-header" sx={{ padding: "40px 0" }}>
          <Container maxWidth="lg">
            <div className="chip">Case Study</div>
            <Typography variant="h3">{caseStudy.title}</Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" className="d-flex flex-column justify-content-center">
          <img
            className="case-study-image"
            src={caseStudy.image}
            alt={caseStudy.caption}
            style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
          />

          {apps.length ? (
            <Box>
              <Grid container spacing={2} sx={{ padding: "10px 0" }}>
                {apps.map((x) => (
                  <Grid item key={x.title}>
                    <Tooltip title={x.title}>
                      <Card
                        sx={{
                          background: "#fff",
                          borderRadius: "10px",
                          padding: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: 60,
                          height: 60,
                        }}
                        variant="outlined">
                        <img width={50} src={x.icon} alt={x.title} />
                      </Card>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
              <Box id="case-study-chip-wrapper">
                <div className="chip chip-blue">Developed With</div>
              </Box>
            </Box>
          ) : (
            ""
          )}
        </Container>

        <Box className="case-study-view-content" sx={{ padding: "40px 0" }}>
          <Container maxWidth="lg">
            <Box mb={6}>
              <Typography variant="h4" mb={2}>
                About the Client
              </Typography>
              <Divider />
              <Typography variant="body1" mt={3}>
                {caseStudy.clientBackground}
              </Typography>
            </Box>
            <Box mb={6}>
              <Typography variant="h4" mb={2}>
                The Challenge
              </Typography>
              <Divider />
              <Typography variant="body1" mt={3}>
                {caseStudy.challenges}
              </Typography>
            </Box>
            <Box mb={6}>
              <Typography variant="h4" mb={2}>
                The Solution
              </Typography>
              <Divider />
              <Typography variant="body1" mt={3}>
                {caseStudy.approach}
              </Typography>
              <Typography variant="body1" mt={3}>
                {caseStudy.solution}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" mb={2}>
                The Result
              </Typography>
              <Divider />
              <Typography variant="body1" mt={3}>
                {caseStudy.results}
              </Typography>
            </Box>
          </Container>
        </Box>
        <CallToActionContactUs />
      </div>
    </>
  );
}

export default CaseStudyView;
