import React from 'react';
import './BlogWidget.css';
import { Box, Typography, Chip, IconButton } from '@mui/material';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function BlogWidget({ data, size, route, showShadow = true }) {
  return (
    <Box
      component={Link}
      to={route ? route + '/' + data.id : data.id}
      className={
        'blog-widget-container ' +
        size +
        (showShadow ? ' blog-widget-container-shaddow' : '')
      }
      style={{
        backgroundImage: `url("${data.image}")`,
      }}
    >
      <Box className={'blog-widget-title-container ' + size}>
        {data.label ?? (
          <Chip
            label={data.label}
            sx={{
              fontSize: '14px',
              color: '#fff',
              backgroundColor: 'rgba(105, 105, 105, .8)',
              marginBottom: '10px',
            }}
          />
        )}
        {size === 'large' && (
          <Typography
            className="blog-widget-title"
            variant={size === 'small' ? 'h5' : 'h4'}
            fontWeight={500}
          >
            {data.title}
          </Typography>
        )}
      </Box>
      {size === 'large' && (
        <IconButton className="arrow-button" aria-label="go to post">
          <FontAwesomeIcon icon={faArrowUp} />
        </IconButton>
      )}
    </Box>
  );
}

export default BlogWidget;
