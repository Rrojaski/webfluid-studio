import React from 'react';
import './BlogPost.css';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { BlogPosts } from '../../utils/constants/BlogPosts';
import SafeHtml from '../../components/SafeHtml/SafeHtml';
import { useEffect } from 'react';
import CallToActionContactUs from '../../components/CallToActionContactUs/CallToActionContactUs';

function BlogPost() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  if (!params.id) return null;
  const post = BlogPosts.find((x) => x.id === params.id);
  if (!post) return null;

  return (
    <div>
      <Box
        mt={15}
        mb={10}
        sx={{ backgroundColor: '#f5f5f5', padding: '40px 0' }}
      >
        <Container maxWidth="lg">
          <div className="chip chip blue mb-3">Blog Post</div>
          <Typography variant="h3">{post.title}</Typography>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="lg" className="d-flex justify-content-center">
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
