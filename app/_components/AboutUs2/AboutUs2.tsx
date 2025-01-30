import { Box } from "@mui/material";
import "./AboutUs2.css";
import Link from "next/link";

function AboutUs2() {
  return (
    <Box id="aboutus2">
      <p className="p-aboutus">About Us</p>
      <div className="section-principal">
        <h1 className="box-1">
          The best software <span className="box-1-2">teams</span> ship early and often.
        </h1>
        <Box id="box-2-1">
          <h3 className="box-2">
            We have assembled an organization with the core focus of technology to salve the solve the most complex challenges as efficiently as possible for
            our customers.
          </h3>
          <button className="text-button">
            <Link className="navigation-link" href="/aboutUs">
              About Us
            </Link>
          </button>
          <div className="img-aboutus-container">
            <img className="img-aboutus" src="https://images.webfluid.studio/romaura.jfif"></img>
            <img className="img-aboutus" src="https://images.webfluid.studio/roman_3.JPG"></img>
            <img className="img-aboutus" src="https://images.webfluid.studio/marcio.jfif"></img>
          </div>
        </Box>
      </div>

    </Box>
  );
}

export default AboutUs2;
