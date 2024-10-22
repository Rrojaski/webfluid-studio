import Link from "next/link";
import "./DisplayWidget.css";
import { Box, Typography } from "@mui/material";
export interface DisplayWidgetData {
  isHero: boolean;
  data: { companyName: string; title: string };
  color: string;
  small?: boolean;
  route: string;
  companyName?: string;
  year?: string;
}

function DisplayWidget(data: DisplayWidgetData) {
  return (
    <Link href={data.route}>
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
    </Link>
  );
}

export default DisplayWidget;
