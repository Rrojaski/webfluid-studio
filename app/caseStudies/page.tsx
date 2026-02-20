import "./page.css";
import { Box, Container, Typography, Divider, Grid2 } from "@mui/material";
import { CaseStudyList } from "../_utils/constants/CaseStudyList";
import CaseStudyWidget from "../_components/CaseStudyWidget/CaseStudyWidget";
import { Metadata } from "next";
import CallToAction2 from "../_components/CallToAction2/CallToAction2";

export const metadata: Metadata = {
  title: "Case Studies - Webfluid Studio",
  description:
    "Explore our case studies to see how Webfluid Studio has helped businesses enhance their online presence with custom website design and development solutions.",
  keywords: "Webfluid Studio, Case Studies, Website Design, Web Development, Digital Transformation",
  authors: [{ name: "Webfluid Studio" }],
  openGraph: {
    title: "Case Studies - Webfluid Studio",
    description:
      "Explore our case studies to see how Webfluid Studio has helped businesses enhance their online presence with custom website design and development solutions.",
    type: "website",
    url: "https://www.webfluid.studio/caseStudies",
    images: [
      {
        url: "/assets/images/imhaf-maulana-NGTkvzikPmA-unsplash-removebg-preview.png",
        alt: "Group hugging",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies - Webfluid Studio",
    description:
      "Explore our case studies to see how Webfluid Studio has helped businesses enhance their online presence with custom website design and development solutions.",
    images: "/assets/images/imhaf-maulana-NGTkvzikPmA-unsplash-removebg-preview.png",
  },
};

function CaseStudies() {
  // const LabelList = [...Object.values(Label)];
  const selectedLabel: string | null = null;

  return (
    <>
      <section className="content-container">
        <Box className="case-studies-header">
          <Container maxWidth="lg">
            <Box className="case-studies-header-content-wrapper">
              <Box className="case-studies-header-content">
                <Typography variant="h2" mb={2}>
                  Our Clients
                </Typography>
                <Typography variant="h6">
                  Discover how our Our Clients are more than stories—they&apos;re blueprints for success. Unlock the wisdom of real-world problem solving and
                  innovation within every narrative.
                </Typography>
              </Box>
              <Divider className="case-studies-devider" orientation="vertical" flexItem />
              <Box className="case-studies-header-content">
                <img src="./assets/images/imhaf-maulana-NGTkvzikPmA-unsplash-removebg-preview.png" alt="Group hugging" />
              </Box>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="lg">
          <Box
            mt={6}
            mb={6}
            sx={{
              width: "100%",
            }}>
            {/* <Box
              component="ul"
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
                margin: "0 auto 50px auto",
              }}>
              {LabelList.filter((x) => !!CaseStudyList.find((y) => y.active && y.label === x)).map((label, key) => {
                return (
                  <ListItem
                    sx={{
                      width: "fit-content",
                      padding: 0,
                      height: "fit-content",
                    }}
                    key={key}>
                    <Chip
                      className={label === selectedLabel ? "selected-label" : ""}
                      clickable
                      variant="outlined"
                      sx={{
                        border: "none",
                        padding: "20px 10px",
                        fontSize: "20px",
                      }}
                      label={label}
                    />
                  </ListItem>
                );
              })}
            </Box> */}
            <Typography variant="h4">Their Stories</Typography>
          </Box>
          <Grid2 container spacing={4}>
            {CaseStudyList.filter((x) => x.active && (!selectedLabel ? true : x.label === selectedLabel)).map((element, i) => (
              <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={i}>
                <Box className="case-study">
                  <CaseStudyWidget key={i} caseStudy={element} />
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Container>
        <Box mt={22} mb={25}>
          <Container maxWidth="lg">
            <CallToAction2 />
          </Container>
        </Box>
      </section>
    </>
  );
}

export default CaseStudies;
