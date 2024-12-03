import { Typography } from "@mui/material";
import "./OurProcessItem.css";
import { Box } from "@mui/system";
import { OurProcessItemProps } from "@/app/_utils/constants/OurProcessData";
import Image from "next/image";

function OurProcessItem({ data }: { data: OurProcessItemProps }) {
  const { step, title, image } = data;
  return (
    <Box className="our-process-item">
      <Typography variant="h3" className="our-process-item-step">
        {step}.
      </Typography>
      <Image className="our-process-item-image" src={image} alt={title} width={320} height={200} />
      <Typography variant="h4" className="our-process-item-title">
        {title}
      </Typography>
    </Box>
  );
}

export default OurProcessItem;
