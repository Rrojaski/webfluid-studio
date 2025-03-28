import { Box } from "@mui/system";
import "./TeamWidget.css";
import { employees } from "../../_utils/constants/Emloyees";
import { Typography } from "@mui/material";

function TeamWidget() {
  return (
    <Box id="team-widget">
      <Box id="team-widget-employee-list">
        {employees.map((employee, index) => (
          <Box key={index} className="team-widget-employee">
            <img className="team-widget-employee-avatar" src={employee.avatar} alt={employee.name} />
          </Box>
        ))}
      </Box>
      <Typography variant="h5" id="team-widget-text">
        Your Personal Sucess Team
      </Typography>
    </Box>
  );
}

export default TeamWidget;
