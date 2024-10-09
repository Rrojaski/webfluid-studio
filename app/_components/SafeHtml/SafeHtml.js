import React from 'react';
import DOMPurify from 'dompurify';

const SafeHtml = ({ htmlString }) => {
  const cleanHtml = DOMPurify.sanitize(htmlString);

  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
};

export default SafeHtml;
