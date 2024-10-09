import './BasicImage.css';

function BasicImage({ id, src, alt }) {
  return <img className="basic-image" id={id} src={src} alt={alt} />;
}

export default BasicImage;
