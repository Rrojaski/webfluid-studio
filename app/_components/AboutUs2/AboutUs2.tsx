import { Box, IconButton } from "@mui/material";
import "./AboutUs2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";



function AboutUs2() {
  return (
    <Box id="aboutus2">
      <p className="p-aboutus">About Us</p>
      <div className="container">
        <Box id="box-1-1">
          <h1 className="box-1">
            The best software <span className="box-1-2">teams</span> ship early and often.
          </h1>
        </Box>
        <Box id="box-2-1">
          <h3 className="box-2">We have assembled an organization with the core focus of technology to salve the solve the most complex challenges as efficiently as possible for our customers.</h3>
          <button className="text-button">
            About Us
          </button>
          <div className="img-aboutus-container">
            <img className="img-aboutus" src="https://images.webfluid.studio/romaura.jfif"></img>
            <img className="img-aboutus" src="https://images.webfluid.studio/roman_3.JPG"></img>
            <img className="img-aboutus" src="https://images.webfluid.studio/marcio.jfif"></img>
            <IconButton className="img-aboutus" aria-label="go to post">
              <FontAwesomeIcon icon={faPlus} />
            </IconButton>
          </div>
        </Box>
        
      </div>
      <Box id="aboutus-line">
                                  
      </Box>
    </Box>
  );
}

export default AboutUs2;
