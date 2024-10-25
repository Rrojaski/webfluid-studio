import "./DisplayWidget.css";
import { Box, Typography } from "@mui/material";
export interface DisplayWidgetData {
  isHero: boolean;
  data: { companyName: string; title: string };
  color: string;
  small?: boolean;
  companyName?: string;
  year?: string;
}

function DisplayWidget(data: DisplayWidgetData) {
  return (
    <Box className={"display-widget " + data.color + (data.small ? " display-widget-small" : "")}>
      <Box className="display-widget-label">
        <Typography variant="h6" fontWeight={700}>
          {data.companyName}
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          {data.year}
        </Typography>
      </Box>
    </Box>
  );
}

export default DisplayWidget;
