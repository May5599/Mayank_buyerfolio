import React, { useState } from 'react';
import { Container, Typography, Box, Button, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from '../StyledLinearProgress';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../firebase';
import { setDownPayment } from '../../featureForm/userSlice';
import { setErrorMessage } from '../../featureForm/errorSlice';
import { doc, setDoc } from 'firebase/firestore'; // Changed import for setDoc

function Form5() {
  const [serverMessage, setServerMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedValue = useSelector(state => state.user.downPayment); // Select down payment from Redux state

  const handleSelect = (value) => {
    dispatch(setDownPayment(value)); // Dispatch action to set down payment
  };

  const handleNextClick = async () => {
    if (selectedValue && selectedValue.trim() !== '') {
      try {
        const userId = localStorage.getItem("user");

        await setDoc(doc(db, "users", userId), {
          downPayment: selectedValue });
        dispatch(setErrorMessage("Data successfully submitted.")); // Use setErrorMessage instead of setServerMessage
        navigate('/form6');
      } catch (error) {
        console.error('Error:', error);
        dispatch(setErrorMessage('An error occurred')); // Use setErrorMessage instead of setServerMessage
      }
    } else {
      alert('Please select a down payment option before proceeding.');
    }
  };

  const buttonStyle = {
    width: '100%', // Full width for small screens
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: '700',
    borderRadius: '47px',
    border: '2.375px solid #E7E7E7',
    marginBottom: '10px',
  };

  return (
    <Container>
      <div style={{ margin: '10px auto', padding: '20px' }}>
        <StyledLinearProgress variant="determinate" value={5} />
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <IconButton onClick={() => navigate('/form4')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>
            Financial Situation: Payment
          </Typography>
          <IconButton onClick={handleNextClick} disabled={selectedValue.trim() === ''}>
            <ArrowForward />
          </IconButton>
        </Box>
        <Typography color="error" style={{ marginBottom: '10px' }}>
          {serverMessage}
        </Typography>
        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
          How much do you have for down payment?
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
          <Button
            variant={selectedValue === 'Nothing' ? 'contained' : 'outlined'}
            style={buttonStyle}
            onClick={() => handleSelect('Nothing')}
          >
            Nothing right now
          </Button>
          <Button
            variant={selectedValue === 'Less than 7k' ? 'contained' : 'outlined'}
            style={buttonStyle}
            onClick={() => handleSelect('Less than 7k')}
          >
            Less than $7k
          </Button>
          <Button
            variant={selectedValue === '7k - 15k' ? 'contained' : 'outlined'}
            style={buttonStyle}
            onClick={() => handleSelect('7k - 15k')}
          >
            $7k - $15k
          </Button>
          <Button
            variant={selectedValue === '15k - 25k' ? 'contained' : 'outlined'}
            style={buttonStyle}
            onClick={() => handleSelect('15k - 25k')}
          >
            $15k - $25k
          </Button>
          <Button
            variant={selectedValue === '25k+' ? 'contained' : 'outlined'}
            style={buttonStyle}
            onClick={() => handleSelect('25k+')}
          >
            $25k+
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            style={{
              width: '305px',
              height: '56px',
              borderRadius: '8px',
              backgroundColor: '#7731E4',
              color: 'white',
            }}
            onClick={handleNextClick}
            disabled={selectedValue.trim() === ''}
          >
            Next
          </Button>
        </Box>
      </div>
    </Container>
  );
}

export default Form5;
