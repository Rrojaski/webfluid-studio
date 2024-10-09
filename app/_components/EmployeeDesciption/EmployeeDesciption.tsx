import React from "react";
import "./EmployeeDesciption.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function EmployeeDesciption(data: any) {
  return (
    <Box className="d-flex flex-column align-items-center">
      <Box className="avatar-container">
        <img className="avatar mb-3" src={data.employee.avatar} alt={data.employee.name} />
      </Box>
      <Typography variant="h5">{data.employee.name}</Typography>
      <Typography className="employee-description-sub" variant="subtitle1">
        {data.employee.position}
      </Typography>
    </Box>
  );
}
export default EmployeeDesciption;
