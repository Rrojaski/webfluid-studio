import React from "react";
import "./page.css";
import Box from "@mui/material/Box";

async function BlogPost({ params }: { params: { slug: string } }) {
  if (!params.slug) return null;


  return (
    <Box>
   
    </Box>
  );
}

export default BlogPost;
