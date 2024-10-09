import React from 'react';
import './WelcomeModal.css';
import { Button, Card, Typography, IconButton } from '@mui/material';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function WelcomeModal({ setOpenModal }) {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleButtonClick = () => {
    setOpenModal(false);
    setTimeout(() => {
      navigate('/contactUs');
    }, 300);
  };

  return (
    <Card id="welcome-modal">
      <IconButton id="welcome-modal-close" onClick={handleClose}>
        <FontAwesomeIcon icon={faClose} />
      </IconButton>
      <Typography variant="h3" id="welcome-modal-header">
        Welcome to Webfluid Studio!
      </Typography>
      <Typography variant="h7" id="welcome-modal-sub-header">
        Start by Getting a Custom Pricing Estimate for Your Project
      </Typography>
      <Button
        color="warning"
        variant="contained"
        id="welcome-modal-button"
        onClick={handleButtonClick}
      >
        Build Your Plan
      </Button>

      <img
        id="welcome-modal-image"
        src="https://images.webfluid.studio/planners.png"
        alt="planner"
      />
    </Card>
  );
}

export default WelcomeModal;
