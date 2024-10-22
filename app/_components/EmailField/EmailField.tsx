import React, { Dispatch, SetStateAction } from "react";
import TextField from "@mui/material/TextField";

export interface EmailFieldData {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  emailError: boolean;
  setEmailError: Dispatch<SetStateAction<boolean>>;
  setValidEmail: Dispatch<SetStateAction<boolean>>;
  emailTouched: boolean;
  setEmailTouched: Dispatch<SetStateAction<boolean>>;
}

const EmailField = (data: EmailFieldData) => {
  const handleChange = (event: any) => {
    const { value } = event.target;
    data.setEmail(value);
    if (!value) {
      data.setEmailError(false);
      data.setValidEmail(false);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value);
    if (isValid) {
      data.setEmailError(false);
      data.setValidEmail(true);
    } else {
      data.setValidEmail(false);
    }
  };

  const handleBlur = (event: any) => {
    data.setEmailTouched(true);
    const { value } = event.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    data.setEmailError(!emailRegex.test(value));
    if (!value) {
      data.setEmailError(false);
    }
  };

  return (
    <TextField
      InputProps={{
        style: {
          borderRadius: "10px",
        },
      }}
      className="filled-text-field"
      label="Email"
      id="email"
      name="email"
      type="email"
      variant="outlined"
      value={data.email}
      onChange={handleChange}
      onBlur={handleBlur}
      required
      error={data.emailError || (!data.email && data.emailTouched)}
      helperText={data.emailError ? "Please enter a valid email address." : "" + (!data.email && data.emailTouched ? "Email is required." : "")}
    />
  );
};

export default EmailField;
