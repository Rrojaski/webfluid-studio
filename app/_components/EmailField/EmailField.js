import React from 'react';
import TextField from '@mui/material/TextField';

const EmailField = ({
  email,
  setEmail,
  emailError,
  setEmailError,
  setValidEmail,
  emailTouched,
  setEmailTouched,
}) => {
  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    if (!value) {
      setEmailError(false);
      setValidEmail(false);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value);
    if (isValid) {
      setEmailError(false);
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const handleBlur = (event) => {
    setEmailTouched(true);
    const { value } = event.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(value));
    if (!value) {
      setEmailError(false);
    }
  };

  return (
    <TextField
      InputProps={{
        style: {
          borderRadius: '10px',
        },
      }}
      className="filled-text-field"
      label="Email"
      id="email"
      name="email"
      type="email"
      variant="outlined"
      value={email}
      onChange={handleChange}
      onBlur={handleBlur}
      required
      error={emailError || (!email && emailTouched)}
      helperText={
        emailError
          ? 'Please enter a valid email address.'
          : '' + (!email && emailTouched ? 'Email is required.' : '')
      }
    />
  );
};

export default EmailField;
