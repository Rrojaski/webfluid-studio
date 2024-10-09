import { Card, CardContent, Typography } from "@mui/material";
import "./WhatsappCode.css";

function WhatsappCode() {
  return (
    <Card id="whatsapp-code">
      <CardContent id="whatsapp-code-content">
        <img id="whatsapp-code-avatar" alt="whatsapp avatar" src="https://images.webfluid.studio/whatsapp-avatar-2.png" />
        <Typography id="whatsapp-code-text" fontWeight={700}>
          Webfluid Studio
        </Typography>
        <img id="whatsapp-code-image" alt="whatsapp qr code" src="https://images.webfluid.studio/whatsapp.jpg" />
      </CardContent>
    </Card>
  );
}

export default WhatsappCode;
