import React from "react";
import "./page.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import CallToActionContactUs from "../../_components/CallToActionContactUs/CallToActionContactUs";
import { PortableText, SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { sanityToPost } from "@/app/_utils/SanityCMS";
import Author from "@/app/_components/Author/Author";

const POST_QUERY = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    slug,
    publishedAt,
    image,
    body,
    "author": author->{
      name,
      title,
      avatar
    },
    "label": label->{
      name
    }
  }
`;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = sanityToPost(await client.fetch<SanityDocument>(POST_QUERY, params), true);
  if (!post) return {};

  return {
    title: `${post.title} - Webfluid Studio`,
    description: post.description,
    keywords: "Webfluid Studio, Blog, Post, Website Design, Web Development, Digital Transformation",
    authors: [{ name: post.author.name }],
    openGraph: {
      title: `${post.title} - Webfluid Studio`,
      description: post.description,
      type: "article",
      url: `https://www.webfluid.studio/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - Webfluid Studio`,
      description: post.description,
      image: post.image,
    },
  };
}

const options = { next: { revalidate: 30 } };

async function BlogPost({ params }: { params: { slug: string } }) {
  if (!params.slug) return null;

  const post = sanityToPost(await client.fetch<SanityDocument>(POST_QUERY, params, options), true);
  if (!post) return null;

  return (
    <Box>
      <Box mt={25} mb={10}>
        <Container maxWidth="lg" id="published-top-section">
          <Box id="published-text-wrapper-container">
            <Box id="published-text-wrapper">
              <Typography id="published-text">
                Published {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </Typography>
              <Author {...post.author} />
            </Box>
            <Typography id="post-title" sx={{ typography: { md: "h3", sm: "h4", xs: "h4" } }}>
              {post.title}
            </Typography>
          </Box>
          <img className="blog-post-image" src={post.image} alt={post.title} />
        </Container>
      </Box>
      <Box>
        <Container id="blog-post-image-wrapper" maxWidth="lg" component="image"></Container>
      </Box>
      <Box mt={10} mb={18}>
        <Container maxWidth="lg">
          <Box id="blog-post" component="article">
            {Array.isArray(post.body) && <PortableText value={post.body} />}
          </Box>
        </Container>
      </Box>
      <CallToActionContactUs />
    </Box>
  );
}

export default BlogPost;
