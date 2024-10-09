import "./DisplayWidget.css";
import { Box, Typography } from "@mui/material";

function DisplayWidget(data: any) {
  return (
    <Box className={"display-widget " + data.color + (data.small ? " display-widget-small" : "") + (data.route ? " display-widget-routable" : "")}>
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
