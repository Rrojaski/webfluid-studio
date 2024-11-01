import "./page.css";
import { Box, Container, Typography, Divider, Grid2 } from "@mui/material";
import { CaseStudyList } from "../_utils/constants/CaseStudyList";
import CallToAction from "../_components/CallToAction/CallToAction";
import CaseStudyWidget from "../_components/CaseStudyWidget/CaseStudyWidget";
import Head from "next/head";

function CaseStudies() {
  // const LabelList = [...Object.values(Label)];
  const selectedLabel: string | null = null;

  return (
    <>
      <Head>
        <title>Case Studies - Webfluid Studio</title>
        <meta
          name="description"
          content="Explore our case studies to see how Webfluid Studio has helped businesses enhance their online presence with custom website design and development solutions."
        />
        <meta name="keywords" content="Webfluid Studio, Case Studies, Website Design, Web Development, Digital Transformation" />
        <meta name="author" content="Webfluid Studio" />
        <meta property="og:title" content="Case Studies - Webfluid Studio" />
        <meta
          property="og:description"
          content="Explore our case studies to see how Webfluid Studio has helped businesses enhance their online presence with custom website design and development solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webfluid.studio/caseStudies" />
        <meta property="og:image" content="https://images.webfluid.studio/laptop-guy.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies - Webfluid Studio" />
        <meta
          name="twitter:description"
          content="Explore our case studies to see how Webfluid Studio has helped businesses enhance their online presence with custom website design and development solutions."
        />
        <meta name="twitter:image" content="https://images.webfluid.studio/laptop-guy.png" />
      </Head>
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
                <img src="https://images.webfluid.studio/hugging.png" alt="Group hugging" />
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
        <Box mt={30} mb={20}>
          <Container maxWidth="lg">
            <CallToAction />
          </Container>
        </Box>
      </section>
    </>
  );
}

export default CaseStudies;
