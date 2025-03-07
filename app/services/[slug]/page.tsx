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
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = Object.values(ServiceType).find((x) => x.icon.toString() === params.slug);
  if (!service) return {};

  return {
    title: `${service.label} - Webfluid Studio`,
    description: `Learn more about our ${service.label} services at Webfluid Studio. We offer custom website design, web development, and digital transformation solutions tailored to your business needs.`,
    keywords: `Webfluid Studio, ${service.label}, Website Design, Web Development, Digital Transformation`,
    authors: [{ name: "Webfluid Studio" }],
    openGraph: {
      title: `${service.label} - Webfluid Studio`,
      description: `Learn more about our ${service.label} services at Webfluid Studio. We offer custom website design, web development, and digital transformation solutions tailored to your business needs.`,
      type: "website",
      url: `https://www.webfluid.studio/services/${params.slug}`,
      images: [
        {
          url: "https://images.webfluid.studio/team-image-1200x630.jpg",
          alt: "Team around a table",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.label} - Webfluid Studio`,
      description: `Learn more about our ${service.label} services at Webfluid Studio. We offer custom website design, web development, and digital transformation solutions tailored to your business needs.`,
      images: "https://images.webfluid.studio/team-image-1200x630.jpg",
    },
  };
}

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
      <div>
        <Box className="service-view-header" sx={{ padding: "40px 0" }}>
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
            <Typography variant="subtitle1" className="service-description" align="justify">
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
