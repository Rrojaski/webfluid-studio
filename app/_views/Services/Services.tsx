import "./Services.css";
import Box from "@mui/material/Box";
import { Container, Typography, Divider } from "@mui/material";
import DisplayWidget from "@/app/_components/DisplayWidget/DisplayWidget";
import { ServiceType } from "@/app/_utils/constants/ServiceType";
import { Color } from "@/app/_utils/constants/CaseStudyWidget2Models";
import Service from "@/app/_components/Service/Service";
import CallToAction from "@/app/_components/CallToAction/CallToAction";

function Services() {
  const isHero = false;
  if (isHero) {
    return (
      <Box className="hero-services-container">
        <Typography variant="h3" mb={8}>
          Our Services
        </Typography>
        <Box className="services-box-container">
          <Box className="services-box-wrapper">
            <Box className="hero-service-box-display">
              <DisplayWidget
                isHero={true}
                data={{
                  companyName: "",
                  title: ServiceType.websites.label,
                }}
                color={Color.Blue}
                route={"services/" + ServiceType.websites.id}
              />
            </Box>
            <Box className="services-box">
              <Service serviceType={ServiceType.websites} isHero />
            </Box>
          </Box>
          <Box className="services-box-wrapper">
            <Box className="hero-service-box-display">
              <DisplayWidget
                isHero={true}
                data={{
                  companyName: "",
                  title: ServiceType.SEO.label,
                }}
                color={Color.Yellow}
                route={"services/" + ServiceType.SEO.id}
              />
            </Box>
            <Box className="services-box">
              <Service serviceType={ServiceType.SEO} color="service-container-yellow" isHero />
            </Box>
          </Box>
          <Box className="services-box-wrapper">
            <Box className="hero-service-box-display">
              <DisplayWidget
                isHero={true}
                data={{
                  companyName: "",
                  title: ServiceType.digitalMarketing.label,
                }}
                color={Color.Purple}
                route={"services/" + ServiceType.digitalMarketing.id}
              />
            </Box>
            <Box className="services-box">
              <Service serviceType={ServiceType.digitalMarketing} color="service-container-black" isHero />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <section className="content-container">
        <Box className="services-header-content-content">
          <Container variant="lg">
            <Box className="services-header-content-wrapper">
              <Box className="services-header-content">
                <Typography className="services-subtitle" variant="h7" mb={2} fontWeight={600}>
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
                      route={"/services/" + ServiceType.websites.id}
                    />
                  </Box>
                  <Box className="services-box">
                    <Service serviceType={ServiceType.websites} />
                  </Box>
                </Box>
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
                      route={"/services/" + ServiceType.SEO.id}
                    />
                  </Box>
                  <Box className="services-box">
                    <Service serviceType={ServiceType.SEO} color="service-container-yellow" />
                  </Box>
                </Box>
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
                      route={"/services/" + ServiceType.development.id}
                    />
                  </Box>
                  <Box className="services-box">
                    <Service serviceType={ServiceType.development} color="service-container-black" />
                  </Box>
                </Box>
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
                      route={"/services/" + ServiceType.digitalMarketing.id}
                    />
                  </Box>
                  <Box className="services-box">
                    <Service serviceType={ServiceType.digitalMarketing} color="service-container-purple" />
                  </Box>
                </Box>
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
    );
  }
}

export default Services;
