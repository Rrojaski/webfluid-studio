import React from "react";
import DOMPurify from "isomorphic-dompurify";

interface SafeHtmlProps {
  htmlString: string;
}

const SafeHtml: React.FC<SafeHtmlProps> = ({ htmlString }) => {
  const cleanHtml = DOMPurify.sanitize(htmlString);

  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
};

export default SafeHtml;
