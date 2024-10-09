import './CaseStudies.css';
import { CaseStudyList } from '../../utils/constants/CaseStudyList';
import CallToAction from '../../components/CallToAction/CallToAction';
import { useEffect, useState } from 'react';
import CaseStudyWidget from '../../components/CaseStudyWidget/CaseStudyWidget';
import { Label } from '../../utils/constants/CaseStudyList';
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  ListItem,
  Divider,
} from '@mui/material';

function CaseStudies({ isHero }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const LabelList = [...Object.values(Label)];
  const [selectedLabel, setSelectedLabel] = useState('');

  if (isHero) {
    return (
      <Box className="hero-case-studies-container">
        <Typography variant="h3" mb={3}>
          Our Clients
        </Typography>
        <Typography variant="h6" bold mb={10}>
          We're agile, adaptable, and dependable, driven by our customers'
          goals. Explore our Our Clients to see how our solutions deliver
          success.
        </Typography>
        <Box className="hero-case-studies-content">
          <Grid container spacing={5} justifyContent="start">
            <Grid item sx={12} sm={12} md={4}>
              <CaseStudyWidget
                isHero={isHero}
                caseStudy={CaseStudyList[0]}
                className="case-study"
              />
            </Grid>
            <Grid item sx={12} sm={12} md={4}>
              <CaseStudyWidget
                isHero={isHero}
                caseStudy={CaseStudyList[6]}
                className="case-study"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  } else {
    return (
      <section className="content-container">
        <Box className="case-studies-header">
          <Container variant="lg">
            <Box className="case-studies-header-content-wrapper">
              <Box className="case-studies-header-content">
                <Typography variant="h2" mb={2} bold>
                  Our Clients
                </Typography>
                <Typography variant="h6">
                  Discover how our Our Clients are more than stories—they're
                  blueprints for success. Unlock the wisdom of real-world
                  problem solving and innovation within every narrative.
                </Typography>
              </Box>
              <Divider
                className="case-studies-devider"
                orientation="vertical"
                flexItem
              />
              <Box className="case-studies-header-content">
                <img
                  src="https://images.webfluid.studio/hugging.png"
                  alt="Group hugging"
                />
              </Box>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="lg">
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
                margin: '0 auto 50px auto',
              }}
            >
              {LabelList.filter(
                (x) => !!CaseStudyList.find((y) => y.active && y.label === x)
              ).map((label, key) => {
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
            <Typography variant="h4">Their Stories</Typography>
          </Box>
          <Grid container spacing={4}>
            {CaseStudyList.filter(
              (x) =>
                x.active && (!selectedLabel ? true : x.label === selectedLabel)
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
                <CaseStudyWidget
                  key={i}
                  isHero={isHero}
                  caseStudy={element}
                  className="case-study"
                />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box mt={20} mb={20}>
          <Container maxWidth="lg">
            <CallToAction />
          </Container>
        </Box>
      </section>
    );
  }
}

export default CaseStudies;
