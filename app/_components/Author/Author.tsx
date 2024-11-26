import { Author as AuthorData } from "@/app/_utils/constants/BlogPosts";
import "./Author.css";
import { Box, Typography } from "@mui/material";

function Author(data: AuthorData) {
  return (
    <Box className="author-image-wrapper">
      <img className="author-image" src={data.avatar} alt={data.name} />
      <Box>
        <Typography variant="h6">{data.name}</Typography>
        <Typography variant="subtitle1">{data.title}</Typography>
      </Box>
    </Box>
  );
}

export default Author;
