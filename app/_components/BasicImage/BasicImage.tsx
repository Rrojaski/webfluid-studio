import "./BasicImage.css";

function BasicImage(data: any) {
  return <img className="basic-image" id={data.id} src={data.src} alt={data.alt} />;
}

export default BasicImage;
