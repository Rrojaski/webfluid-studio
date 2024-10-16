import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";

import { AppBar, Button, Drawer, Fab, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Footer from "./_components/Footer/Footer";

export const metadata: Metadata = {
  title: "Webfluid Studio - Website Design Solutions",
  description:
    "Webfluid Studio offers custom website design and development solutions tailored to your business needs. Specializing in user-friendly, responsive, and visually appealing websites, we help you stand out online. Contact us for professional web design services today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appBarFixed = false;
  const allowInvisableHeader = true;
  const whiteHeader = false;
  const scroll = true;
  const open = false;
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <div className="App">
              <AppBar
                position={appBarFixed ? "fixed" : "absolute"}
                className={"app-bar " + (scroll && allowInvisableHeader ? "invisable-header" : "") + (whiteHeader ? "white-header" : "")}>
                <Toolbar className="app-bar">
                  <div className="app-bar-content">
                    <Typography id="logo-text" variant="h5" color="inherit" sx={{ flexGrow: 1 }}>
                      <span className="normal-text">Webfluid Studio</span>
                    </Typography>
                    <div className="desktop-menu-items">
                      <Button className="navigation-buttons" color="inherit">
                        About Us
                      </Button>
                      <Button className="navigation-buttons" color="inherit">
                        Services
                      </Button>
                      <Button className="navigation-buttons" color="inherit">
                        Our Clients
                      </Button>
                      <Button
                        className={"desktop-menu-items contact-us-button " + (whiteHeader ? "contact-us-button-blue" : "")}
                        color="warning"
                        variant={whiteHeader ? "outlined" : "contained"}>
                        Contact us
                        <span className="contact-us-extra">or Call (786) 540-8851</span>
                      </Button>
                    </div>
                    <Button
                      className="hamburger-menu"
                      id="composition-button"
                      aria-controls={open ? "composition-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true">
                      <FontAwesomeIcon color={whiteHeader ? "black" : "white"} size="2x" icon={faBars} />
                    </Button>
                  </div>
                </Toolbar>
              </AppBar>

              {children}

              <Footer />
              <Drawer anchor="right">
                <ListItem disablePadding>
                  <ListItemButton>
                    <Button color="warning" variant="contained" tabIndex={-1}>
                      <ListItemText> Contact Us</ListItemText>
                    </Button>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText> About Us</ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText>Services </ListItemText>
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText> Our Clients</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Drawer>
              <Fab
                id="whatsapp-fab"
                color="primary"
                aria-label="Whatsapp"
                href="https://api.whatsapp.com/send?phone=7868562000"
                rel="noreferrer"
                target="_blank">
                <img id="whatsapp-icon" alt="Whatsapp logo" src="./assets/svg/whatsapp.svg" />
              </Fab>
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
