import "./page.css";
import Box from "@mui/material/Box";
import { Container, Typography, Divider } from "@mui/material";
import DisplayWidget from "../_components/DisplayWidget/DisplayWidget";
import { ServiceType } from "../_utils/constants/ServiceType";
import Service from "../_components/Service/Service";
import { Color } from "../_utils/constants/CaseStudyWidget2Models";
import CallToAction from "../_components/CallToAction/CallToAction";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Webfluid Studio",
  description:
    "Discover the range of services offered by Webfluid Studio, including custom website design, web development, and digital transformation solutions tailored to your business needs.",
  keywords: "Webfluid Studio, Services, Website Design, Web Development, Digital Transformation",
  authors: [{ name: "Webfluid Studio" }],
  openGraph: {
    title: "Our Services - Webfluid Studio",
    description:
      "Discover the range of services offered by Webfluid Studio, including custom website design, web development, and digital transformation solutions tailored to your business needs.",
    type: "website",
    url: "https://www.webfluid.studio/services",
    images: [
      {
        url: "https://images.webfluid.studio/team-image-1200x630.jpg",
        alt: "Team around a table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Webfluid Studio",
    description:
      "Discover the range of services offered by Webfluid Studio, including custom website design, web development, and digital transformation solutions tailored to your business needs.",
    images: "https://images.webfluid.studio/team-image-1200x630.jpg",
  },
};

function Services() {
  return (
    <>
      <section className="content-container">
        <Box className="services-header-content-content">
          <Container maxWidth="lg">
            <Box className="services-header-content-wrapper">
              <Box className="services-header-content">
                <Typography className="services-subtitle" variant="subtitle1" fontWeight={600}>
                  WE GOT THIS
                </Typography>
                <Typography variant="h3" fontWeight={700}>
                  Our work.
                </Typography>
                <Typography variant="h3" mb={2} fontWeight={700}>
                  Done right.
                </Typography>
              </Box>
              <Divider className="services-devider" orientation="vertical" flexItem />
              <Box className="services-header-content">
                <Typography className="services-subtitle" variant="h6">
                  We help businesses navigate digital transformation, from upgrading IT infrastructure to implementing cutting-edge technologies, ensuring they
                  stay ahead in the digital age.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box className="services-box-container-2-container">
          <Container maxWidth="xl">
            <Box className="services-box-container-2-warapper">
              <Box className="services-box-container-2">
                <Link className="services-box-container-2-link" href={"/services/" + ServiceType.websites.icon}>
                  <Box className="services-box-wrapper-2">
                    <Box>
                      <DisplayWidget
                        small
                        isHero={true}
                        data={{
                          companyName: "",
                          title: ServiceType.websites.label,
                        }}
                        color={Color.Blue}
                      />
                    </Box>
                    <Box className="services-box">
                      <Service serviceType={ServiceType.websites} />
                    </Box>
                  </Box>
                </Link>
                <Link className="services-box-container-2-link" href={"/services/" + ServiceType.SEO.icon}>
                  <Box className="services-box-wrapper-2">
                    <Box>
                      <DisplayWidget
                        small
                        isHero={true}
                        data={{
                          companyName: "",
                          title: ServiceType.SEO.label,
                        }}
                        color={Color.Yellow}
                      />
                    </Box>
                    <Box className="services-box">
                      <Service serviceType={ServiceType.SEO} color="service-container-yellow" />
                    </Box>
                  </Box>
                </Link>
                <Link className="services-box-container-2-link" href={"/services/" + ServiceType.development.icon}>
                  <Box className="services-box-wrapper-2">
                    <Box>
                      <DisplayWidget
                        small
                        isHero={true}
                        data={{
                          companyName: "",
                          title: ServiceType.development.label,
                        }}
                        color={Color.Black2}
                      />
                    </Box>
                    <Box className="services-box">
                      <Service serviceType={ServiceType.development} color="service-container-black" />
                    </Box>
                  </Box>
                </Link>
                <Link className="services-box-container-2-link" href={"/services/" + ServiceType.digitalMarketing.icon}>
                  <Box className="services-box-wrapper-2">
                    <Box>
                      <DisplayWidget
                        small
                        isHero={true}
                        data={{
                          companyName: "",
                          title: ServiceType.digitalMarketing.label,
                        }}
                        color={Color.Purple}
                      />
                    </Box>
                    <Box className="services-box">
                      <Service serviceType={ServiceType.digitalMarketing} color="service-container-purple" />
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box mb={20}>
          <Container maxWidth="xl">
            <Box className="services-call-to-action">
              <CallToAction />
            </Box>
          </Container>
        </Box>
      </section>
    </>
  );
}

export default Services;
