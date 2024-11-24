import React from "react";
import "./page.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import CallToActionContactUs from "../../_components/CallToActionContactUs/CallToActionContactUs";
import { PortableText, SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { sanityToPost } from "@/app/_utils/SanityCMS";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
const options = { next: { revalidate: 30 } };

async function BlogPost({ params }: { params: { slug: string } }) {
  if (!params.slug) return null;

  const post = sanityToPost(await client.fetch<SanityDocument>(POST_QUERY, params, options), true);
  if (!post) return null;

  return (
    <Box>
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
          <Box id="blog-post">{Array.isArray(post.body) && <PortableText value={post.body} />}</Box>
        </Container>
      </Box>
      <CallToActionContactUs />
    </Box>
  );
}

export default BlogPost;
