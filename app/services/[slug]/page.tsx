import React from "react";
import "./page.css";
import { Box, Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebApplicationsDevelopmentPage from "./_components/WebApplicationsDevelopmentPage/WebApplicationsDevelopmentPage";
import SEOServicePage from "./_components/SEOServicePage/SEOServicePage";
import ServicePage from "./_components/ServicePage/ServicePage";
import DigitalMarketingPage from "./_components/DigitalMarketingPage/DigitalMarketingPage";
import { ServiceType } from "@/app/_utils/constants/ServiceType";
import getIcon from "@/app/_utils/constants/GetIcon";
import CallToActionContactUs from "@/app/_components/CallToActionContactUs/CallToActionContactUs";
import Head from "next/head";

const rendePage = (id: number) => {
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
function ServiceView({ params }: { params: { slug: string } }) {
  if (!params.slug) return null;
  const service = Object.values(ServiceType).find((x) => x.icon.toString() === params.slug);
  if (!service) return null;
  let color;
  switch (service.id) {
    case 1:
      color = "black";
      break;
    case 3:
      color = "yellow";
      break;
    case 5:
      color = "blue";
      break;
    case 7:
      color = "purple";
      break;
    default:
      color = "blue";
  }
  return (
    <>
      <Head>
        <title>{service.label} - Webfluid Studio</title>
        <meta
          name="description"
          content={`Learn more about our ${service.label} services at Webfluid Studio. We offer custom website design, web development, and digital transformation solutions tailored to your business needs.`}
        />
        <meta name="keywords" content={`Webfluid Studio, ${service.label}, Website Design, Web Development, Digital Transformation`} />
        <meta name="author" content="Webfluid Studio" />
        <meta property="og:title" content={`${service.label} - Webfluid Studio`} />
        <meta
          property="og:description"
          content={`Learn more about our ${service.label} services at Webfluid Studio. We offer custom website design, web development, and digital transformation solutions tailored to your business needs.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.webfluid.studio/services/${params.slug}`} />
        <meta property="og:image" content="https://images.webfluid.studio/laptop-guy.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${service.label} - Webfluid Studio`} />
        <meta
          name="twitter:description"
          content={`Learn more about our ${service.label} services at Webfluid Studio. We offer custom website design, web development, and digital transformation solutions tailored to your business needs.`}
        />
        <meta name="twitter:image" content="https://images.webfluid.studio/laptop-guy.png" />
      </Head>
      <div>
        <Box className="service-view-header" sx={{ backgroundColor: "#f5f5f5", padding: "40px 0" }}>
          <Container maxWidth="lg" className="service-view-header-content">
            <Box className={"service-container-view service-view-container-" + color}>
              <Box className="service-view-label-wrapper">
                <FontAwesomeIcon color="white" size="2x" icon={getIcon(service.icon)} />
              </Box>
            </Box>
            <Typography variant="h3">{service.label}</Typography>
          </Container>
        </Box>
        <Box className="service-view-content">
          <Container maxWidth="lg">
            <Typography className="service-description" align="justify" variant="subtitle1">
              {service.description}
            </Typography>
            {rendePage(service.id)}
          </Container>
        </Box>
        <CallToActionContactUs />
      </div>
    </>
  );
}

export default ServiceView;
