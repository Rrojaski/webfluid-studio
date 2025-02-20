import "./CallToAction2.css";
import { Button, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

function CallToAction2() {
  return (
    <Card className="call-to-action-card-2" variant="outlined">
      <CardContent className="call-to-action-wrapper">
        <div className="call-to-action-container">
          <section className="call-to-action-item">
            <Typography
              className="part-1"
              variant="h5"
              sx={{
                typography: { md: "h5", sm: "h5", sx: "h5" },
              }}
            >
              {"Have a "}
              <Typography component="span" sx={{ color: "#ED6C02", fontSize: "2rem", fontWeight: "bold" }}>
                {"{"}
              </Typography>
              {"project"}
              <Typography component={"span"} sx={{ color: "#ED6C02", fontSize: "2rem", fontWeight: "bold" }}>
                {"}"}
              </Typography>
              {"in mind ?"}
            </Typography>
          </section>
          <div className="call-to-action-item">
            <Typography variant="h6" className="call-to-action-sub" mb={1}>
              Turn your ideas into innovative solutions with cutting-edge technology.
            </Typography>
          </div>
          <div className="call-to-action-item">
            <Link className="part-buttonaction" href="/contactUs">
              <Button id="buttonaction" size="large" variant="contained">
                <p className="textbutton">Bring your ideas to life!</p>
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CallToAction2;
