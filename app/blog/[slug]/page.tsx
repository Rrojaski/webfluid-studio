import React from "react";
import "./page.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { BlogPosts } from "../../_utils/constants/BlogPosts";
import SafeHtml from "../../_components/SafeHtml/SafeHtml";
import CallToActionContactUs from "../../_components/CallToActionContactUs/CallToActionContactUs";

function BlogPost({ params }: { params: { slug: string } }) {
  if (!params.slug) return null;
  const post = BlogPosts.find((x) => x.slug === params.slug);
  if (!post) return null;

  return (
    <div>
      <Box mt={15} mb={10} sx={{ backgroundColor: "#f5f5f5", padding: "40px 0" }}>
        <Container maxWidth="lg">
          <div className="chip chip blue mb-3">Blog Post</div>
          <Typography variant="h3">{post.title}</Typography>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="lg" id="blog-post-image-wrapper">
          <img className="blog-post-image" src={post.image} alt={post.title} />
        </Container>
      </Box>
      <Box mt={10} mb={18}>
        <Container maxWidth="lg">
          <Box id="blog-post">
            <SafeHtml htmlString={post.html} />
          </Box>
        </Container>
      </Box>
      <CallToActionContactUs />
    </div>
  );
}

export default BlogPost;
