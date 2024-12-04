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
          <Typography className="call-to-action-title" mb={3} variant="h3">
            {"Have a { project } in mind?"}
          </Typography>
          <Typography className="call-to-action-sub" mb={3} variant="h6">
            Let's discuss your project and find out how we can help your business grow.
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
