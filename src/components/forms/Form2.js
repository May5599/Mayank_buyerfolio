import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField, IconButton, InputAdornment } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from '../StyledLinearProgress';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateLocation } from '../../featureForm/userSlice';
import { setErrorMessage } from '../../featureForm/errorSlice';  // Import setErrorMessage action
//import { updateLocation } from '../../reducers';
import { doc, setDoc } from 'firebase/firestore'; // Changed import for setDoc

import { db } from '../../firebase';
import '../../css/form2.css';

function Form2() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);

  const handleLocationClick = (value) => {
    setLocation(value);
  };

  const handleNextClick = async () => {
    if (!location.trim()) {
      dispatch(setErrorMessage('Please select a location before proceeding.'));
      return;
    }

    try {
      const userId = localStorage.getItem("user");
      console.log('userID'.userId);
      if (!userId)
        throw new Error('User ID not found');

      // Update location in Firebase Firestore
      await setDoc(doc(db, "users", userId), {
        location: location
      }, { merge: true });

      // Dispatch the updateLocation action
      dispatch(updateLocation(location));

      // Navigate to the next page
      navigate('/Form3');
    } catch (error) {
      console.error('Error:', error.message);
      dispatch(setErrorMessage('An error occurred while updating location.'));
    }
  };

  const canProceed = location.trim() !== '';

  return (
    <Container>
    <div className="form-container">
      <StyledLinearProgress variant="determinate" value={2} />
      <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <IconButton onClick={() => navigate('/primaryapplicant')}>
          <ArrowBack />
        </IconButton>
        <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>
          Future Home
        </Typography>
        <IconButton onClick={handleNextClick} disabled={!canProceed}>
          <ArrowForward />
        </IconButton>
      </Box>
      <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
        Where are you looking to buy?
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Box width="100%" textAlign="left" mb={3}>
          <Typography variant="subtitle1">Location</Typography>
        </Box>
        <TextField
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          sx={{ marginBottom: 3, width: '100%', borderRadius: '6px' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />

        <Typography variant="body2" gutterBottom>
          By entering the location, our agent-buyer matching algorithm will help you find the perfect home.
        </Typography>

        <Box display="flex" className="location-box" flexDirection="row" flexWrap="wrap" justifyContent="center" gap={2} mt={3} mb={3}>
          <Button variant="outlined" onClick={() => handleLocationClick('Waterloo')}>
            <span>Waterloo</span>
          </Button>
          <Button variant="outlined" onClick={() => handleLocationClick('Toronto')}>
            <span>Toronto</span>
          </Button>
          <Button variant="outlined" onClick={() => handleLocationClick('Vancouver')}>
            <span>Vancouver</span>
          </Button>
          <Button variant="outlined" onClick={() => handleLocationClick('Montreal')}>
            <span>Montreal</span>
          </Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button
          variant="contained"
          style={{
            width: '305px',
            height: '56px',
            borderRadius: '39px',
            backgroundColor: '#7731E4',
          }}
          onClick={handleNextClick}
          disabled={!canProceed}
        >
          Next
        </Button>
      </Box>
    </div>
  </Container>
);
}

export default Form2;

