import { Card, CardContent, Typography } from "@mui/material";
import "./WhatsappCode.css";
import Link from "next/link";

function WhatsappCode() {
  return (
    <Link id="whats-app-code-link" target="_blank" href="https://api.whatsapp.com/send?phone=7868562000">
      <Card id="whatsapp-code">
        <CardContent id="whatsapp-code-content">
          <img id="whatsapp-code-avatar" alt="whatsapp avatar" src="./images/whatsapp-avatar-2.png" />
          <Typography id="whatsapp-code-text" fontWeight={700}>
            Webfluid Studio
          </Typography>
          <img id="whatsapp-code-image" alt="whatsapp qr code" src="./images/whatsapp.jpg" />
        </CardContent>
      </Card>
    </Link>
  );
}

export default WhatsappCode;
