import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import { Button, Drawer, Fab, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Footer from "./_components/Footer/Footer";
import Link from "next/link";
import Navigation from "./_components/Navigation/Navigation";

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
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <div className="App">
              <Navigation />
              {children}

              <Footer />
              <Drawer anchor="right">
                <ListItem disablePadding>
                  <Link className="navigation-link" href="/contactUs">
                    <ListItemButton>
                      <Button color="warning" variant="contained" tabIndex={-1}>
                        <ListItemText> Contact Us</ListItemText>
                      </Button>
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link className="navigation-link" href="/aboutUs">
                    <ListItemButton>
                      <ListItemText> About Us</ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link className="navigation-link" href="/services">
                    <ListItemButton>
                      <ListItemText>Services </ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItem>

                <ListItem disablePadding>
                  <Link className="navigation-link" href="/caseStudies">
                    <ListItemButton>
                      <ListItemText> Our Clients</ListItemText>
                    </ListItemButton>
                  </Link>
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
