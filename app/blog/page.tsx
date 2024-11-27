import "./page.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import CallToAction from "../_components/CallToAction/CallToAction";

async function Blog() {
  // const LabelList = [...Object.values(Label)];

  return (
    <section className="content-container">
      <Box mt={15} mb={20}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          {/* <Box id="blog-wdiget-container">
            <BlogWidget size="large" data={blogPost} route="blog" showShadow={false} />
          </Box> */}
          <Container className="recent-posts-container" maxWidth="lg">
            <Box
              mt={6}
              mb={6}
              sx={{
                width: "100%",
              }}>
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                  padding: 0,
                  marginBottom: "50px",
                }}>
                {/* {LabelList.map((label, key) => {
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
                        onClick={() => (selectedLabel === label ? setSelectedLabel("") : setSelectedLabel(label))}
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
                })} */}
              </Box>
              <Typography variant="h4">Recent Blog</Typography>
            </Box>
            <Grid container spacing={4}>
              {/* {blogPosts
                .filter((x) => (!selectedLabel ? true : x.label === selectedLabel))
                .map((element, i) => {
                  const d = {
                    id: element.id,
                    title: element.title,
                    label: element.label,
                    image: element.image,
                    description: element.description,
                    body: element.body,
                    slug: element.slug,
                    date: element.date,
                  };
                  return (
                    <Grid
                      sx={{
                        width: "100%",
                      }}
                      item
                      sm={12}
                      md={6}
                      lg={4}
                      key={i}>
                      <BlogWidget size="small" data={d} route="blog" showShadow={false} />
                      <Typography mt={2} variant="h5">
                        {element.title}
                      </Typography>
                      <Typography mt={2} mb={2}>
                        {element.description?.substring(0, 150)} {element.description?.length > 150 ? ". . ." : ""}
                      </Typography>
                      <Typography mt={2}>{new Date(element.date).toLocaleDateString("en-US", { month: "long", day: "numeric" })}</Typography>
                    </Grid>
                  );
                })} */}
            </Grid>
          </Container>
        </Container>
      </Box>
      <Box mb={20}>
        <Container maxWidth="lg">
          <CallToAction />
        </Container>
      </Box>
    </section>
  );
}

export default Blog;
