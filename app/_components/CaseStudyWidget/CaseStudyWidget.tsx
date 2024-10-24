import React from "react";
import "./CaseStudyWidget.css";
import { Box, Typography } from "@mui/material";
import BlogWidget from "../BlogWidget/BlogWidget";

export interface CaseStudyWidgetData {
  caseStudy: {
    id: string;
    title: string;
    image: string;
    introduction: string;
    clientBackground: string;
    slug: string;
  };
  isHero: boolean;
  showDescription?: boolean;
}
function CaseStudyWidget(data: CaseStudyWidgetData) {
  const d = {
    id: data.caseStudy.id,
    title: data.caseStudy.title,
    label: "",
    image: data.caseStudy.image,
    content: data.caseStudy.introduction,
    html: `<p>${data.caseStudy.clientBackground}</p>`,
    slug: data.caseStudy.slug,
  };
  return (
    <Box className="case-study-widget">
      <BlogWidget size="small" data={d} route="caseStudies" showShadow={false} />
      <Typography mt={2} variant="h5">
        {d.title}
      </Typography>
      {data.showDescription ? (
        <Typography mt={2} mb={2}>
          {d.content.substring(0, 150)} {d.content.length > 150 ? ". . ." : ""}
        </Typography>
      ) : (
        ""
      )}
    </Box>
  );
}

export default CaseStudyWidget;
