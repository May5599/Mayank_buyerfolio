import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateIncomeSource } from '../../featureForm/userSlice'; // Import updateIncomeSource action
import { Container, Typography, Box, IconButton, Button, Grid, MenuItem, Select } from '@mui/material';
import { ArrowBack, ArrowForward, ArrowDropDown } from '@mui/icons-material';
import StyledLinearProgress from '../StyledLinearProgress';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

import { setErrorMessage } from '../../featureForm/errorSlice';  // Import setErrorMessage action
import { setDoc } from 'firebase/firestore'; // Changed import for setDoc

function Form6() {
  // Declare state variables
  const [selectedValue, setSelectedValue] = useState('');
  
  // Retrieve dispatch function and user info from Redux store
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);
  
  // Initialize navigate function for routing
  const navigate = useNavigate();

  // Handle select change event
  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  // Handle next button click event
  const handleNextClick = async () => {
    // Check if selectedValue is not empty
    if (selectedValue.trim() !== '') {
      try {
        const userId = localStorage.getItem("user");
        // Update income source in Firestore
        await setDoc(doc(db, "users", userId), {
          incomeSource: selectedValue
        });
  
        // Dispatch action to update income source in Redux store
        dispatch(updateIncomeSource(selectedValue));
        
        // Navigate to next form
        navigate('/form7');
      } catch (error) {
        console.error('Error:', error.message);
        // Handle error message display logic elsewhere
      }
    } else {
      // Dispatch action to display validation error message
      dispatch(setErrorMessage('Please select a source of income before proceeding.'));
    }
  };
  
  // Determine if next button should be enabled
  const canProceed = selectedValue.trim() !== '';

  // Render UI
  return (
    <Container>
      <div className="form-container">
        {/* Display linear progress bar */}
        <StyledLinearProgress variant="determinate" value={6} />
        
        {/* Display navigation buttons and title */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <IconButton onClick={() => navigate('/form5')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginRight: 'auto', marginLeft: 'auto' }}>
            Financial Situation: Source
          </Typography>
          <IconButton onClick={handleNextClick} disabled={!canProceed}>
            <ArrowForward />
          </IconButton>
        </Box>
        
        {/* Display form title */}
        <Typography variant="h5" style={{ marginBottom: '20px', textAlign: 'center' }}>
          What is your primary source of income?
        </Typography>

        {/* Display select input for income source */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="subtitle1" style={{ marginBottom: '10px', textAlign: 'center' }}>
            Please select your primary source of income:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={10} md={6}>
              <Select
                value={selectedValue}
                onChange={(e) => handleSelect(e.target.value)}
                fullWidth
                variant="outlined"
                endIcon={<ArrowDropDown />}
              >
                {/* Display select options */}
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Traditional Employment">Traditional Employment</MenuItem>
                <MenuItem value="Self Employed">Self Employed</MenuItem>
                <MenuItem value="Pension & Disability Incomes">Pension & Disability Incomes</MenuItem>
                <MenuItem value="Alimony and Child Support">Alimony and Child Support</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </Grid>
          </Grid>

          {/* Display next button */}
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              variant="contained"
              onClick={handleNextClick}
              disabled={!canProceed}
              style={{ backgroundColor: '#7731E4', color: 'white', borderRadius: '8px', minWidth: '200px', padding: '10px 20px' }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </div>
    </Container>
  );
}

export default Form6;
