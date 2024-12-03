import "./Services.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DisplayWidget from "@/app/_components/DisplayWidget/DisplayWidget";
import { ServiceType } from "@/app/_utils/constants/ServiceType";
import { Color } from "@/app/_utils/constants/CaseStudyWidget2Models";
import Service from "@/app/_components/Service/Service";
import Link from "next/link";

function Services() {
  return (
    <Box className="hero-services-container">
      <Typography className="hero-title" variant="h3" mb={8}>
        Our Services
      </Typography>
      <Box className="services-box-container">
        <Link className="services-box-container-2-link" href={"/services/" + ServiceType.websites.icon}>
          <Box className="services-box-wrapper">
            <Box className="hero-service-box-display">
              <DisplayWidget
                isHero={true}
                data={{
                  companyName: "",
                  title: ServiceType.websites.label,
                }}
                color={Color.Blue}
              />
            </Box>
            <Box className="services-box">
              <Service serviceType={ServiceType.websites} isHero />
            </Box>
          </Box>
        </Link>
        <Link className="services-box-container-2-link" href={"/services/" + ServiceType.SEO.icon}>
          <Box className="services-box-wrapper">
            <Box className="hero-service-box-display">
              <DisplayWidget
                isHero={true}
                data={{
                  companyName: "",
                  title: ServiceType.SEO.label,
                }}
                color={Color.Yellow}
              />
            </Box>
            <Box className="services-box">
              <Service serviceType={ServiceType.SEO} color="service-container-yellow" isHero />
            </Box>
          </Box>
        </Link>
        <Link className="services-box-container-2-link" href={"/services/" + ServiceType.digitalMarketing.icon}>
          <Box className="services-box-wrapper">
            <Box className="hero-service-box-display">
              <DisplayWidget
                isHero={true}
                data={{
                  companyName: "",
                  title: ServiceType.digitalMarketing.label,
                }}
                color={Color.Purple}
              />
            </Box>
            <Box className="services-box">
              <Service serviceType={ServiceType.digitalMarketing} color="service-container-black" isHero />
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

export default Services;
