import './Home.css';
import { useEffect, createRef } from 'react';
import Box from '@mui/material/Box';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import { Typography } from '@mui/material';
import Wave2 from '../../assets/svg/wave-2.svg';
import Container from '@mui/material/Container';
import MissionStatement from '../../components/MissionStatement/MissionStatement';
import TestimonialList from '../../components/TestimonialList/TestimonialList';
import CallToActionWhatsapp from '../../components/CallToActionWhatsapp/CallToActionWhatsapp';

function Home({ height, setHeight }) {
  const container = createRef(null);
  const serviceRef = createRef(null);
  const aboutUsRef = createRef(null);
  const caseStudiesRef = createRef(null);

  // const [sideNavSelectedItem, setSideNavSelectedItem] = useState(1);
  // const [preventScrollEmit, setPreventScrollEmit] = useState(false);

  useEffect(() => {
    document.title = 'Webfluid Studio - Website Design Solutions';
  }, []);

  useEffect(() => {
    const setHeightDelayed = (count) => {
      setTimeout(() => {
        if (container?.current?.offsetHeight) {
          count = 10;
          setHeight(container.current.offsetHeight);
        } else if (count < 10) {
          count++;
          setHeightDelayed(count);
        }
      }, 500);
    };
    window.addEventListener('resize', () => {
      if (container?.current?.offsetHeight) {
        setHeight(container.current.offsetHeight);
      }
    });
    window.addEventListener('scroll', () => {
      // if (preventScrollEmit) {
      //   return;
      // }
      if (caseStudiesRef.current?.offsetHeight && aboutUsRef.current?.offsetHeight && serviceRef.current?.offsetHeight) {
        // const scrollY = window.scrollY - 1900;
        // const aboutUsRefHeight = aboutUsRef?.current?.offsetHeight - 400;
        // const caseStudiesRefHeight = caseStudiesRef?.current?.offsetHeight + 1;
        // if (scrollY > caseStudiesRefHeight) {
        //   setSideNavSelectedItem(3);
        // } else if (
        //   scrollY < caseStudiesRefHeight &&
        //   scrollY > aboutUsRefHeight
        // ) {
        //   setSideNavSelectedItem(2);
        // } else {
        //   setSideNavSelectedItem(1);
        // }
      }
    });

    setHeightDelayed(0);
  }, [container, setHeight, serviceRef, aboutUsRef, caseStudiesRef]);

  // const goToSection = (selected) => {
  //   setPreventScrollEmit(true);
  //   setSideNavSelectedItem(selected);
  //   switch (selected) {
  //     case 1:
  //       serviceRef.current.scrollIntoView();
  //       break;
  //     case 2:
  //       aboutUsRef.current.scrollIntoView();
  //       break;
  //     case 3:
  //       caseStudiesRef.current.scrollIntoView();
  //       break;
  //     default:
  //   }
  //   setTimeout(() => {
  //     setPreventScrollEmit(false);
  //   }, 500);
  // };

  return (
    <section className="content-container">
      <div className="hero-container home-container" ref={container}>
        <div className="hero-text-container">
          <div className="hero-text">
            <Typography className="title" variant="h1" component="h1" mb={2} bold>
              Improve your online presence
            </Typography>
            <Typography className="subtext" variant="h6">
              Enhance your online presence, user experience, and digital strategy with innovative solutions from Webfluid Studio.
            </Typography>
          </div>
          <img className="laptop" src="https://images.webfluid.studio/laptop-guy.png" alt="laptop" />
        </div>
        <img id="home-wave-2" className="wave-image" src={Wave2} alt="Wave border" loading="eager"></img>
      </div>
      <Box className="home-content-wrapper">
        <Container maxWidth="lg" className="home-section" id="services" ref={serviceRef}>
          <Services isHero={true} />
        </Container>

        <div id="about-us" ref={aboutUsRef}>
          <AboutUs isHero={true} />
        </div>
        <Container maxWidth="lg" className="home-section" id="about-us" ref={aboutUsRef}>
          <MissionStatement isHero={true} />
        </Container>
        <div id="testimonials" ref={aboutUsRef}>
          <TestimonialList />
        </div>

        <Container maxWidth="lg" id="contact-form-whatsapp-code" className="home-section">
          <CallToActionWhatsapp />
        </Container>
        {/* </Box> */}
        {/* <Box className="side-nav-wrapper">
            <Box className="side-nav">
              <Typography variant="h5" mb={3}>
                Table of contents
              </Typography>
              <List className="side-nav-list">
                <ListItem disablePadding>
                  <ListItemButton
                    className={
                      'side-nav-button ' +
                      (sideNavSelectedItem > 1 ? 'side-nav-visited' : '')
                    }
                    selected={sideNavSelectedItem === 1}
                    onClick={() => goToSection(1)}
                  >
                    <Typography variant="h5">Services</Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    className={
                      'side-nav-button ' +
                      (sideNavSelectedItem > 2 ? 'side-nav-visited' : '')
                    }
                    selected={sideNavSelectedItem === 2}
                    onClick={() => goToSection(2)}
                  >
                    <Typography variant="h5">About Us</Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    className="side-nav-button"
                    selected={sideNavSelectedItem === 3}
                    onClick={() => goToSection(3)}
                  >
                    <Typography variant="h5">Our Clients</Typography>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Box> */}
      </Box>
    </section>
  );
}

export default Home;
