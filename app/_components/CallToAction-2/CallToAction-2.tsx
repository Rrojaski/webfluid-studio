import { Box } from "@mui/system";
import "./CallToAction-2.css";
import { Button, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

function CallToAction2() {
  return (
    <Card className="call-to-action-card-2" variant="outlined">
      <CardContent
        className="call-to-action-wrapper"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}>
        <Box
          sx={{
            maxWidth: "650px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
            textAlign: "center",
          }}>
          <Typography variant="h5" mb={3} sx={{ typography: { md: "h3", sm: "h4", sx: "h5" } }}>
            {"Have a { project } in mind?"}
          </Typography>
          <Typography variant="h6" className="call-to-action-sub" mb={3}>
            Let&apos;s discuss your project and find out how we can help your business grow.
          </Typography>
          <Link href="/contactUs">
            <Button size="large" color="warning" variant="contained">
              Bring it to life
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CallToAction2;
