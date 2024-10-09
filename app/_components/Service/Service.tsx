import "./Service.css";
import { Box, Typography } from "@mui/material";

function Service(data: any) {
  return (
    <Box className={"service-container " + (data.inverted ? "service-container-blue" : "") + (data.isHero ? "service-container-hero " : "") + data.color}>
      <Typography className="service-label" variant="h5" fontWeight={700}>
        {data.serviceType.label}
      </Typography>
      <Typography className="service-description" variant="h6">
        {data.serviceType.description}
      </Typography>
    </Box>
  );
}

export default Service;
