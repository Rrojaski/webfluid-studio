import "./BasicImage.css";
export interface BasicImageData {
  id: string;
  src: string;
  alt: string;
}
function BasicImage(data: BasicImageData) {
  return <img className="basic-image" id={data.id} src={data.src} alt={data.alt} />;
}

export default BasicImage;
