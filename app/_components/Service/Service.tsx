import "./Service.css";
import { Box, Typography } from "@mui/material";
export interface ServiceData {
  inverted?: boolean;
  isHero?: boolean;
  color?: string;
  serviceType: { label: string; description: string };
}
function Service(data: ServiceData) {
  return (
    <Box className={"service-container " + (data.inverted ? "service-container-blue" : "") + (data.isHero ? "service-container-hero " : "") + data.color}>
      <Typography variant="h5" className="service-label" fontWeight={700}>
        {data.serviceType.label}
      </Typography>
      <Typography variant="subtitle2" className="service-description">
        {data.serviceType.description}
      </Typography>
    </Box>
  );
}

export default Service;
