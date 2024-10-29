import "./page.css";
import Box from "@mui/material/Box";
import { Container, Typography, Divider } from "@mui/material";
import DisplayWidget from "../_components/DisplayWidget/DisplayWidget";
import { ServiceType } from "../_utils/constants/ServiceType";
import Service from "../_components/Service/Service";
import { Color } from "../_utils/constants/CaseStudyWidget2Models";
import CallToAction from "../_components/CallToAction/CallToAction";
import Link from "next/link";
import Head from "next/head";

function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Webfluid Studio</title>
        <meta
          name="description"
          content="Discover the range of services offered by Webfluid Studio, including custom website design, web development, and digital transformation solutions tailored to your business needs."
        />
        <meta name="keywords" content="Webfluid Studio, Services, Website Design, Web Development, Digital Transformation" />
        <meta name="author" content="Webfluid Studio" />
        <meta property="og:title" content="Our Services - Webfluid Studio" />
        <meta
          property="og:description"
          content="Discover the range of services offered by Webfluid Studio, including custom website design, web development, and digital transformation solutions tailored to your business needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webfluid.studio/services" />
        <meta property="og:image" content="https://images.webfluid.studio/laptop-guy.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - Webfluid Studio" />
        <meta
          name="twitter:description"
          content="Discover the range of services offered by Webfluid Studio, including custom website design, web development, and digital transformation solutions tailored to your business needs."
        />
        <meta name="twitter:image" content="https://images.webfluid.studio/laptop-guy.png" />
      </Head>
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
