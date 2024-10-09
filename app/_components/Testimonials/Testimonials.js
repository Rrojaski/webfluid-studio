import { CarouselProvider, Dot, Slide, Slider } from 'pure-react-carousel';
import './Testimonials.css';
import { Box, Typography } from '@mui/material';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Testimonials() {
  return (
    <Box id="testimonials" sx={{ padding: '40px 0' }}>
      <Box textAlign="center">
        <Typography variant="h4" fontWeight={600} mb={2}>
          Testimonials
        </Typography>
        <Typography variant="h6" mb={4}>
          What our clients have to say about working with us
        </Typography>
      </Box>
      <Box>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={2}
          touchEnabled={true}
          isIntrinsicHeight={true}
        >
          <Slider>
            <Slide index={0}>
              <Box textAlign="center">
                <img
                  className="testimonial-image"
                  src="https://images.webfluid.studio/francisco.jfif"
                  alt="Testimonial 1"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    marginBottom: '30px',
                    marginTop: '20px',
                  }}
                />
                <Typography variant="h6" className="testimonial">
                  “Webfluid Studio transformed our outdated website into a
                  sleek, modern platform that has greatly improved our online
                  presence. Their team was professional, efficient, and
                  responsive throughout the entire process.”
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  Francisco Pena
                </Typography>
                <Typography variant="subtitle1">CTO, omgkawaii.com</Typography>
              </Box>
            </Slide>
            <Slide index={1}>
              <Box textAlign="center">
                <img
                  className="testimonial-image"
                  src="https://images.webfluid.studio/claudio.jfif"
                  alt="Testimonial 2"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    marginBottom: '30px',
                    marginTop: '20px',
                  }}
                />
                <Typography variant="h6" className="testimonial">
                  “Working with Webfluid Studio was an absolute pleasure. They
                  understood our needs perfectly and delivered a user-friendly
                  website that exceeded our expectations. We couldn’t be happier
                  with the results.”
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  Claudio Rojas
                </Typography>
                <Typography variant="subtitle1">
                  CEO, jardinfloral.com
                </Typography>
              </Box>
            </Slide>
          </Slider>
          <Box id="dot-container" mt={3}>
            <Dot className="dot" slide={0} />
            <Dot className="dot" slide={1} />
          </Box>
        </CarouselProvider>
      </Box>
    </Box>
  );
}

export default Testimonials;
