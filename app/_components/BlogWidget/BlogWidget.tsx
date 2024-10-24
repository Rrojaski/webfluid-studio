import React from "react";
import "./BlogWidget.css";
import { Box, Typography, Chip, IconButton } from "@mui/material";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export interface BlogWidgetData {
  data: {
    id: string;
    image: string;
    label: string;
    title: string;
    slug: string;
  };
  size: string;
  route: string;
  showShadow: boolean;
}

function BlogWidget(data: BlogWidgetData) {
  return (
    <Link href={data.route ? data.route + "/" + data.data.slug : data.data.slug}>
      <Box
        className={"blog-widget-container " + data.size + (data.showShadow ? " blog-widget-container-shaddow" : "")}
        style={{
          backgroundImage: `url("${data.data.image}")`,
        }}>
        <Box className={"blog-widget-title-container " + data.size}>
          {data.data.label ?? (
            <Chip
              label={data.data.label}
              sx={{
                fontSize: "14px",
                color: "#fff",
                backgroundColor: "rgba(105, 105, 105, .8)",
                marginBottom: "10px",
              }}
            />
          )}
          {data.size === "large" && (
            <Typography className="blog-widget-title" variant="h4" fontWeight={500}>
              {data.data.title}
            </Typography>
          )}
        </Box>
        {data.size === "large" && (
          <IconButton className="arrow-button" aria-label="go to post">
            <FontAwesomeIcon icon={faArrowUp} />
          </IconButton>
        )}
      </Box>
    </Link>
  );
}

export default BlogWidget;
