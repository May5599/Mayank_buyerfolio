



import React, { useState } from 'react';
import { Container, Typography, Box, Button, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from '../StyledLinearProgress';
import { useNavigate } from 'react-router-dom';
import { setErrorMessage } from '../../featureForm/errorSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateBuyingTimeframe } from '../../featureForm/userSlice'; // Import the action creator
import { doc, setDoc } from 'firebase/firestore'; // Changed import for setDoc
import { db } from '../../firebase';

function Form3() {
  const [serverMessage, setServerMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buyingTimeframe = useSelector(state => state.user.buyingTimeframe); // Access buying timeframe from Redux store

  const handleTimeframeClick = (value) => {
    dispatch(updateBuyingTimeframe(value)); // Dispatch action to update buying timeframe in Redux store
  };

  const buttonStyle = {
    alignItems: 'center',
    border: '2.38px solid',
    borderColor: '#e6e6e6',
    borderRadius: '47px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    padding: '16px 205px',
    position: 'relative',
    width: '563px',
    marginBottom: '10px',
    fontFamily: 'Raleway-Bold',
    textTransform: 'none',
  };

  const handleNextClick = async () => {
    try {
      const userId = localStorage.getItem("user");
      console.log('userID', userId); // Corrected console.log syntax
      if (!userId)
        throw new Error('User ID not found');
        await setDoc(doc(db, "users", userId), {
          buyingTimeframe: buyingTimeframe
        });
      // Update buying timeframe in Firebase Firestore
      // This part is missing in the provided code. You need to handle Firestore operations here.

      // Navigate to the next page
      navigate('/form4');
    } catch (error) {
      console.error('Error:', error.message);
      dispatch(setErrorMessage('An error occurred while updating buying timeframe.'));
    }
  };
  
  const canProceed = buyingTimeframe.trim() !== '';

  return (
    <Container>
      <div style={{ margin: '10px auto', padding: '20px' }}>
        <StyledLinearProgress variant="determinate" value={3} />
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <IconButton onClick={() => navigate('/form2')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>
            Home Buying Timeframe
          </Typography>
          <IconButton onClick={handleNextClick} disabled={!buyingTimeframe}>
            <ArrowForward />
          </IconButton>
        </Box>
        {serverMessage && (
          <Typography color="error" style={{ marginBottom: '10px' }}>
            {serverMessage}
          </Typography>
        )}
        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
          When are you looking to buy?
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button style={{ ...buttonStyle, justifyContent: 'center',whiteSpace: 'nowrap', }} 
            onClick={() => handleTimeframeClick('As soon as possible')}
            variant={buyingTimeframe === 'As soon as possible' ? 'contained' : 'outlined'}
          >
            <span>As soon as possible</span>
          </Button>
          <Button style={buttonStyle} onClick={() => handleTimeframeClick('1-2 months')}
            variant={buyingTimeframe === '1-2 months' ? 'contained' : 'outlined'}
          >
            <span>1-2 months</span>
          </Button>
          <Button style={buttonStyle} onClick={() => handleTimeframeClick('3-4 months')}
            variant={buyingTimeframe === '3-4 months' ? 'contained' : 'outlined'}
          >
            <span>3-4 months</span>
          </Button>
          <Button style={buttonStyle} onClick={() => handleTimeframeClick('4+ months')}
            variant={buyingTimeframe === '4+ months' ? 'contained' : 'outlined'}
          >
            <span>4+ months</span>
          </Button>
          <Button style={buttonStyle} onClick={() => handleTimeframeClick('Not sure')}
            variant={buyingTimeframe === 'Not sure' ? 'contained' : 'outlined'}
          >
            <span>Not sure</span>
          </Button>
        </div>
        <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            style={{
              width: '305px',
              height: '56px',
              borderRadius: '39px',
              backgroundColor: '#7731E4',
            }}
            onClick={handleNextClick}
            disabled={!buyingTimeframe}
          >
            Next
          </Button>
        </Box>
      </div>
    </Container>
  );
}

export default Form3;
