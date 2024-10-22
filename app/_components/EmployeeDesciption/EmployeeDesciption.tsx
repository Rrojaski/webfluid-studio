import React from "react";
import "./EmployeeDesciption.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
export interface EmployeeDesciptionData {
  employee: { avatar: string; name: string; position: string };
}
function EmployeeDesciption(data: EmployeeDesciptionData) {
  return (
    <Box id="employee-description">
      <Box className="avatar-container">
        <img id="employee-description-image" className="avatar" src={data.employee.avatar} alt={data.employee.name} />
      </Box>
      <Typography variant="h5">{data.employee.name}</Typography>
      <Typography className="employee-description-sub" variant="subtitle1">
        {data.employee.position}
      </Typography>
    </Box>
  );
}
export default EmployeeDesciption;
