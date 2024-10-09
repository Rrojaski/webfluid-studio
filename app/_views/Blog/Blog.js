import './Blog.css';
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  ListItem,
} from '@mui/material';
import CallToAction from '../../components/CallToAction/CallToAction';
import BlogWidget from '../../components/BlogWidget/BlogWidget';
import { BlogPosts, Label } from '../../utils/constants/BlogPosts';
import { useEffect, useState } from 'react';

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const LabelList = [...Object.values(Label)];
  const [selectedLabel, setSelectedLabel] = useState('');

  return (
    <section className="content-container">
      <Box mt={15} mb={20}>
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <BlogWidget size="large" data={BlogPosts[3]} />
          <Container className="recent-posts-container" maxWidth="lg">
            <Box
              mt={6}
              mb={6}
              sx={{
                width: '100%',
              }}
            >
              <Box
                component="ul"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '10px',
                  padding: 0,
                  marginBottom: '50px',
                }}
              >
                {LabelList.map((label, key) => {
                  return (
                    <ListItem
                      sx={{
                        width: 'fit-content',
                        padding: 0,
                        height: 'fit-content',
                      }}
                      key={key}
                    >
                      <Chip
                        className={
                          label === selectedLabel ? 'selected-label' : ''
                        }
                        clickable
                        onClick={() =>
                          selectedLabel === label
                            ? setSelectedLabel('')
                            : setSelectedLabel(label)
                        }
                        variant="outlined"
                        sx={{
                          border: 'none',
                          padding: '20px 10px',
                          fontSize: '20px',
                        }}
                        label={label}
                      />
                    </ListItem>
                  );
                })}
              </Box>
              <Typography variant="h4">Recent Blog</Typography>
            </Box>
            <Grid container spacing={4}>
              {BlogPosts.filter((x) =>
                !selectedLabel ? true : x.label === selectedLabel
              ).map((element, i) => (
                <Grid
                  sx={{
                    width: '100%',
                  }}
                  item
                  sm={12}
                  md={6}
                  lg={4}
                  key={i}
                >
                  <BlogWidget size="small" data={element} />
                  <Typography mt={2} variant="h5">
                    {element.title}
                  </Typography>
                  <Typography mt={2} mb={2}>
                    {element.content.substring(0, 150)}{' '}
                    {element.content.length > 150 ? '. . .' : ''}
                  </Typography>
                </Grid>
              ))}
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
