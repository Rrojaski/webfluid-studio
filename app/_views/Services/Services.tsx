import "./Services.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DisplayWidget from "@/app/_components/DisplayWidget/DisplayWidget";
import { ServiceType } from "@/app/_utils/constants/ServiceType";
import { Color } from "@/app/_utils/constants/CaseStudyWidget2Models";
import Service from "@/app/_components/Service/Service";

function Services() {
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
              route={"services/" + ServiceType.websites.icon}
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
              route={"services/" + ServiceType.SEO.icon}
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
              route={"services/" + ServiceType.digitalMarketing.icon}
            />
          </Box>
          <Box className="services-box">
            <Service serviceType={ServiceType.digitalMarketing} color="service-container-black" isHero />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Services;
