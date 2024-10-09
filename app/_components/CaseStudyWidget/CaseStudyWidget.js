import React from 'react';
import './CaseStudyWidget.css';
import BlogWidget from '../BlogWidget/BlogWidget';
import { Box, Typography } from '@mui/material';
function CaseStudyWidget({ caseStudy, isHero, showDescription }) {
  const data = {
    id: caseStudy.id,
    title: caseStudy.title,
    label: '',
    image: caseStudy.image,
    content: caseStudy.introduction,
    html: `<p>${caseStudy.clientBackground}</p>`,
  };
  return (
    <Box className="case-study-widget">
      <BlogWidget
        size="small"
        data={data}
        route={isHero ? 'caseStudies' : ''}
        showShadow={false}
      />
      <Typography mt={2} variant="h5">
        {data.title}
      </Typography>
      {showDescription ? (
        <Typography mt={2} mb={2}>
          {data.content.substring(0, 150)}{' '}
          {data.content.length > 150 ? '. . .' : ''}
        </Typography>
      ) : (
        ''
      )}
    </Box>
  );
}

export default CaseStudyWidget;
