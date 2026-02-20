"use client";
import { Button, Divider, TextField, Typography } from "@mui/material";
import "./ContactForm.css";
import { Box } from "@mui/system";
import EmailField from "../EmailField/EmailField";
import { useState } from "react";
import { useForm } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mpwzwbjz");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const handleChange = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleNameBlur = () => {
    setNameTouched(true);
  };

  const getRandomNumber = (): number => {
    return Math.floor(Math.random() * 4) + 1;
  };

  if (state.succeeded) {
    return (
      <Box className="success-message">
        <img id="thank-you-image" src={"./images/dog_" + getRandomNumber() + ".jpg"} alt="cute puppy" />
        <Typography variant="h6">&quot;Thank you for contacting us! We will get back to you soon.&quot; - Rex</Typography>
      </Box>
    );
  }

  return (
    <form name="contact" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <Typography variant="h6" className="contact-us-subheader" >
        Get in Touch
      </Typography>
      <Typography variant="h4">Let&apos;s Chat, Reach Out to Us</Typography>
      <Typography mb={3}>You can reach us anytime</Typography>
      <Divider />
      <Box
        mt={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}>
        <TextField
          InputProps={{
            style: {
              borderRadius: "10px",
            },
          }}
          className="filled-text-field"
          label="Name"
          required
          id="name"
          name="name"
          type="text"
          error={!formData.name && nameTouched}
          variant="outlined"
          value={formData.name}
          onBlur={handleNameBlur}
          onChange={handleChange}
          helperText={!formData.name && nameTouched ? "Name is required." : ""}
        />
        <EmailField
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          setEmailError={setEmailError}
          setValidEmail={setValidEmail}
          emailTouched={emailTouched}
          setEmailTouched={setEmailTouched}
        />
        <TextField
          InputProps={{
            style: {
              borderRadius: "10px",
            },
          }}
          className="filled-text-field"
          label="Message"
          id="message"
          name="message"
          type="text"
          variant="outlined"
          multiline
          rows={6}
          value={formData.message}
          onChange={handleChange}
        />

        <Button disabled={!formData.name || !email || !validEmail} variant="contained" color="secondary" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default ContactForm;
