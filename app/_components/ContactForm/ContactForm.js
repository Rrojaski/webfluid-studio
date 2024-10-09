import { Button, Divider, TextField, Typography } from '@mui/material';
import './ContactForm.css';
import { Box } from '@mui/system';
import EmailField from '../EmailField/EmailField';
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleNameBlur = (event) => {
    setNameTouched(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setEmail('');
        setNameTouched(false);
        setValidEmail(false);
        setEmailError(false);
        setEmailTouched(false);
        alert('Thank you! We will be reaching out soon.');
      })
      .catch((error) => alert(error));
  };
  return (
    <form name="contact" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <Typography className="contact-us-subheader" variant="h6">
        Get in Touch
      </Typography>
      <Typography variant="h4">Let's Chat, Reach Out to Us</Typography>
      <Typography mb={3}>You can reach us anytime</Typography>
      <Divider />
      <Box
        mt={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <TextField
          InputProps={{
            style: {
              borderRadius: '10px',
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
          helperText={!formData.name && nameTouched ? 'Name is required.' : ''}
        />
        <EmailField
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          setEmailError={setEmailError}
          setValidEmail={setValidEmail}
          emailTouched={emailTouched}
          setEmailTouched={setEmailTouched}
          onChange={handleChange}
        />
        <TextField
          InputProps={{
            style: {
              borderRadius: '10px',
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

        <Button
          disabled={!formData.name || !email || !validEmail}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default ContactForm;
