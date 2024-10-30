"use client";
import "./page.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons"; // Import the circle icon

interface Page {
  url: string;
  title: string;
}

const Sitemap: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    // Fetch the list of pages dynamically
    // This could be from an API, a CMS, or your file system
    const fetchPages = async () => {
      const pagesData: Page[] = [
        { url: "/", title: "Home" },
        { url: "/aboutUs", title: "About Us" },
        { url: "/services", title: "Services" },
        { url: "/caseStudies", title: "Case Studies" },
        { url: "/contactUs", title: "Contact Us" },
      ];
      setPages(pagesData);
    };

    fetchPages();
  }, []);

  return (
    <Container id="sitemap-container">
      <Typography variant="h1" gutterBottom>
        Pages
      </Typography>
      <List>
        {pages.map((page, index) => (
          <ListItem key={index}>
            <Link className="sitemap-page-link" href={page.url}>
              <ListItemIcon className="sitemap-page-icon">
                <FontAwesomeIcon icon={faCircle} size="2xs" />
              </ListItemIcon>
              <ListItemText primary={page.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Sitemap;
