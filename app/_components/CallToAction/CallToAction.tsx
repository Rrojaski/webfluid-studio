import { Box } from "@mui/system";
import "./CallToAction.css";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import appList from "../../_utils/constants/AppList";

function CallToAction() {
  return (
    <Box className="call-to-action-wrapper">
      <Card className="call-to-action-card" variant="outlined">
        <CardContent
          className="call-to-action-content"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "500px",
            }}>
            <Typography className="call-to-action-title" mb={3} variant="h3">
              Achieving Remarkable Results with the Latest Technologies
            </Typography>
            <Typography className="call-to-action-sub" mb={3} variant="h6">
              Delivering Transformative Business Solutions through Cutting-Edge Innovations.
            </Typography>
            <Button
              sx={{
                width: "fit-content",
              }}
              color="warning"
              variant="contained">
              Get Started
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              minWidth: "220px",
              width: "100%",
              maxWidth: "400px",
            }}>
            {appList.slice(0, 4).map((x) => (
              <Card
                sx={{
                  background: "#fff",
                  borderRadius: "10px",
                  height: "90px",
                  width: "100%",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
                variant="outlined">
                <Card
                  sx={{
                    background: "#fff",
                    borderRadius: "10px",
                    width: "fit-content",
                    padding: "5px",
                    height: "fit-content",
                  }}
                  variant="outlined">
                  <img width={50} src={x.icon} alt={x.title} />
                </Card>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "2px",
                  }}>
                  <Typography sx={{ fontWeight: "600" }}>{x.title}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}>
                    <FontAwesomeIcon width={10} color="#00ff00" icon={faCircle} />
                    <Typography variant="body2">{x.version}</Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CallToAction;
