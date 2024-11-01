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
import { faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { ServiceType } from "../_utils/constants/ServiceType";
import { CaseStudyList } from "../_utils/constants/CaseStudyList";

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
  const services = Object.values(ServiceType);

  return (
    <Container id="sitemap-container">
      <Typography variant="h1" gutterBottom>
        Pages
      </Typography>
      <List>
        {pages.map((page, index) => (
          <ListItem className="sitemap-list-item" key={index}>
            <Link className="sitemap-page-link" href={page.url}>
              <ListItemIcon className="sitemap-page-icon">
                <FontAwesomeIcon icon={faCircleSolid} size="2xs" />
              </ListItemIcon>
              <ListItemText primary={page.title} />
            </Link>
            {page.url === "/services" ? (
              <List component="div" disablePadding>
                {services.map((service) => (
                  <ListItem key={service.id}>
                    <Link className="sitemap-page-link" href={"/services/" + service.icon}>
                      <ListItemIcon className="sitemap-page-icon">
                        <FontAwesomeIcon icon={faCircle} size="2xs" />
                      </ListItemIcon>
                      <ListItemText primary={service.label} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              ""
            )}
            {page.url === "/caseStudies" ? (
              <List component="div" disablePadding>
                {CaseStudyList.filter((x) => x.active).map((caseStudy) => (
                  <ListItem key={caseStudy.id}>
                    <Link className="sitemap-page-link" href={"/caseStudies/" + caseStudy.slug}>
                      <ListItemIcon className="sitemap-page-icon">
                        <FontAwesomeIcon icon={faCircle} size="2xs" />
                      </ListItemIcon>
                      <ListItemText primary={caseStudy.title} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              ""
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Sitemap;
