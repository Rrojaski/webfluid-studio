import React from 'react';
import './ServiceView.css';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ServiceType } from '../../utils/constants/ServiceType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getIcon from '../../utils/constants/GetIcon';
import ServicePage from './ServicePage/ServicePage';
import SEOServicePage from './SEOServicePage/SEOServicePage';
import WebApplicationsDevelopmentPage from './WebApplicationsDevelopmentPage/WebApplicationsDevelopmentPage';
import DigitalMarketingPage from './DigitalMarketingPage/DigitalMarketingPage';
import CallToActionContactUs from '../../components/CallToActionContactUs/CallToActionContactUs';

const rendePage = (id) => {
  switch (id) {
    case 1:
      return <WebApplicationsDevelopmentPage />;
    case 3:
      return <SEOServicePage />;
    case 6:
      return <ServicePage />;
    case 7:
      return <DigitalMarketingPage />;
    default:
      return;
  }
};
function ServiceView() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  if (!params.id) return null;
  const service = Object.values(ServiceType).find(
    (x) => x.id.toString() === params.id
  );
  if (!service) return null;
  let color;
  switch (service.id) {
    case 1:
      color = 'black';
      break;
    case 3:
      color = 'yellow';
      break;
    case 5:
      color = 'blue';
      break;
    case 7:
      color = 'purple';
      break;
    default:
      color = 'blue';
  }
  return (
    <div>
      <Box
        className="service-view-header"
        sx={{ backgroundColor: '#f5f5f5', padding: '40px 0' }}
      >
        <Container maxWidth="lg" className="d-flex alig-items-center gap-3">
          <Box
            className={'service-container-view service-view-container-' + color}
          >
            <Box className="service-view-label-wrapper">
              <FontAwesomeIcon
                color="white"
                size="2x"
                icon={getIcon(service.icon)}
              />
            </Box>
          </Box>
          <Typography variant="h3">{service.label}</Typography>
        </Container>
      </Box>
      <Box className="service-view-content">
        <Container maxWidth="lg">
          <Typography
            className="service-description"
            align="justify"
            variant="subtitle1"
          >
            {service.description}
          </Typography>
          {rendePage(service.id)}
        </Container>
      </Box>
      <CallToActionContactUs />
    </div>
  );
}

export default ServiceView;
