"use client";
import { AppBar, Button, Drawer, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import "./Navigation.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

function Navigation() {
  const pathName = usePathname();
  const router = useRouter();
  const [whiteHeader, setWhiteHeader] = useState(false);
  const [allowInvisableHeader, setAllowInvisableHeader] = useState(true);

  useEffect(() => {
    const invisibleHeaderRoutes = [""];
    const whiteHeaderRoutes = ["aboutUs", "services", "caseStudies", "blog", "contactUs"];
    const p = pathName.split("/")[1];
    setAllowInvisableHeader(invisibleHeaderRoutes.includes(p));
    setWhiteHeader(whiteHeaderRoutes.includes(p));
  }, [pathName, router]);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const appBarFixed = false;
  const scroll = true;

  const toggleDrawer = (val) => {
    setOpen(val);
  };
  return (
    <AppBar
      position={appBarFixed ? "fixed" : "absolute"}
      className={"app-bar " + (scroll && allowInvisableHeader ? "invisable-header" : "") + (whiteHeader ? "white-header" : "")}>
      <Toolbar className="app-bar">
        <div className="app-bar-content">
          <Link className="hamburger-menu-item-link" className="navigation-link" href="/">
            <Typography id="logo-text" variant="h5" color="inherit" sx={{ flexGrow: 1 }}>
              <span className="normal-text">Webfluid Studio</span>
            </Typography>
          </Link>
          <div className="desktop-menu-items">
            <Link className="hamburger-menu-item-link" className="navigation-link" href="/aboutUs">
              <Button className="navigation-buttons" color="inherit">
                About Us
              </Button>
            </Link>
            <Link className="hamburger-menu-item-link" className="navigation-link" href="/services">
              <Button className="navigation-buttons" color="inherit">
                Services
              </Button>
            </Link>
            <Link className="hamburger-menu-item-link" className="navigation-link" href="/caseStudies">
              <Button className="navigation-buttons" color="inherit">
                Our Clients
              </Button>
            </Link>
            <Link className="hamburger-menu-item-link" className="navigation-link" href="/contactUs">
              <Button
                className={"desktop-menu-items contact-us-button " + (whiteHeader ? "contact-us-button-blue" : "")}
                color="warning"
                variant={whiteHeader ? "outlined" : "contained"}>
                Contact us
                <span className="contact-us-extra">or Call (786) 540-8851</span>
              </Button>
            </Link>
          </div>
          <Button
            className="hamburger-menu"
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={() => toggleDrawer(true)}>
            <FontAwesomeIcon color={whiteHeader ? "black" : "white"} size="2x" icon={faBars} />
          </Button>

          <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
            <ListItem disablePadding>
              <Link className="hamburger-menu-item-link" href="/contactUs">
                <ListItemButton onClick={() => toggleDrawer(false)}>
                  <Button color="warning" variant="contained" tabIndex={-1}>
                    <ListItemText id="contact-us" className="hamburger-menu-item-text">
                      Contact Us
                    </ListItemText>
                  </Button>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link className="hamburger-menu-item-link" href="/aboutUs">
                <ListItemButton onClick={() => toggleDrawer(false)}>
                  <ListItemText className="hamburger-menu-item-text"> About Us</ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link className="hamburger-menu-item-link" href="/services">
                <ListItemButton onClick={() => toggleDrawer(false)}>
                  <ListItemText className="hamburger-menu-item-text">Services </ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <Link className="hamburger-menu-item-link" href="/caseStudies">
                <ListItemButton onClick={() => toggleDrawer(false)}>
                  <ListItemText className="hamburger-menu-item-text"> Our Clients</ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
