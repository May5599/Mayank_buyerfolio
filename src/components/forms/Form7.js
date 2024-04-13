import React, { useState } from 'react';
import { Container, InputAdornment, Typography, Box, Button, TextField, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from '../StyledLinearProgress';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../../reducers'; // Update import path for updateFormData
import { db } from '../../firebase'; // Import db from firebase.js
import { setErrorMessage } from '../../featureForm/errorSlice';  // Import setErrorMessage action
import { updateForm7 } from '../../featureForm/userSlice';
import { doc, setDoc } from 'firebase/firestore'; // Changed import for setDoc

function Form7() {
  const [currentRent, setCurrentRent] = useState('');
  const [desiredPayment, setDesiredPayment] = useState('');
  const [serverMessage, setServerMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.userId);

  const handleInputChange = (event, setStateFunction) => {
    const value = event.target.value;
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setStateFunction(value);
    }
  };

  const handleNextClick = async () => {
    if (currentRent.trim() !== '' && desiredPayment.trim() !== '') {
      try {
        const userId = localStorage.getItem("user");
      
        await setDoc(doc(db, "users", userId), {
          currentRent,
          desiredPayment,
        }, { merge: true }); // Use merge option to merge with existing data if it exists

        // Dispatch action to update form data
        dispatch(updateFormData({
          currentRent,
          desiredPayment,
        }));

        navigate('/form8');
      } catch (error) {
        console.error('Error:', error.message);
        setServerMessage('An error occurred while saving data.');
      }
    } else {
      alert('Please fill in all fields before proceeding.');
    }
  };

  return (
    <Container>
      <div className='form6-container'>
         <StyledLinearProgress variant="determinate" value={7} />
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <IconButton onClick={() => navigate('/form6')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>
            Financial Situation: Rent
          </Typography>
          <IconButton onClick={handleNextClick} disabled={!currentRent.trim() || !desiredPayment.trim()}>
            <ArrowForward />
          </IconButton>
        </Box>
        {serverMessage && (
          <Typography color="error" style={{ marginBottom: '10px' }}>
            {serverMessage}
          </Typography>
        )}
        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
          Enter your desired monthly mortgage payment details
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Box className="rent-box" >
            <Typography variant="subtitle1">Current monthly rent</Typography>
            <TextField
              variant="outlined"
              value={currentRent}
              onChange={(event) => handleInputChange(event, setCurrentRent)}
              sx={{ marginBottom: 3, height: '48px', borderRadius: '6px' }}
              InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
              id="currentRent"
              fullWidth
            />
          </Box>

         <Box className="rent-box" >
            <Typography variant="subtitle1">Desired co-ownership monthly payments</Typography>
            <TextField
              variant="outlined"
              value={desiredPayment}
              onChange={(event) => handleInputChange(event, setDesiredPayment)}
              sx={{ marginBottom: 3, height: '48px', borderRadius: '6px' }}
              InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
              id="desiredPayment"
              fullWidth
            />
          </Box>
        </Box>

       
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            className="next-btn"
            style={{
              fontSize:'1.1rem',
              borderRadius: '8px',
              color:'white',
              backgroundColor: '#7731E4',
              }}
            onClick={handleNextClick}
            disabled={!currentRent.trim() || !desiredPayment.trim()}
          >
            Next
          </Button>
        </Box>
      </div>
    </Container>
  );
}

export default Form7;
