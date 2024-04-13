// Form1.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '../../featureForm/userSlice';
import { setErrorMessage } from '../../featureForm/errorSlice'; // Import setErrorMessage action
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { Container, Grid, Typography, TextField, IconButton, Radio, RadioGroup, FormControlLabel, Button, Box, Checkbox } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from '../StyledLinearProgress';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore'; // Changed import for setDoc

function Form1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [residentStatus, setResidentStatus] = useState('Canadian Resident or Citizen');
  const [emailConsent, setEmailConsent] = useState(true);
  const [formErrors, setFormErrors] = useState({});

  const goToPage = (page) => {
    navigate(page);
  };

  const handleSubmit = async () => {
    const isValid = validateRequiredFields();
    const userId = localStorage.getItem("user"); // Corrected typo in getItem
  
    if (isValid) {
      try {
        // Write document to Firestore
        await setDoc(doc(db, 'users', userId), { // Provide the document ID (userId)
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            residentStatus: residentStatus,
            emailConsent: emailConsent
          });
          
  
        // Dispatch action to update Redux store with user ID
        dispatch(updateUserInfo({ userId: userId }));
  
        // Clear form fields for next submission
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
        setResidentStatus('Canadian Resident or Citizen');
        setEmailConsent(true);
  
        // Navigate to the next form
        goToPage('/PrimaryApplicant');
      } catch (error) {
        console.error('Error writing document: ', error);
        // Dispatch error message
        dispatch(setErrorMessage('An error occurred while submitting data'));
      }
    }
  };
  
  

  const validateRequiredFields = () => {
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d+$/.test(phoneNumber)) {
      errors.phoneNumber = 'Phone Number must contain only numbers';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Invalid email format';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <Container className="form-container">
    <div style={{ margin: '10px auto', padding: '20px' }}>
      <StyledLinearProgress variant="determinate" value={1} />
      <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <IconButton onClick={() => goToPage('/form1')}>
          <ArrowBack />
        </IconButton>
        <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>Primary Applicant</Typography>
        <IconButton onClick={handleSubmit}>
          <ArrowForward />
        </IconButton>
      </Box>
      <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>Please enter your details</Typography>
      <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>Buyer</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} className="grid-item">
          <Typography variant="h7" style={{ marginBottom: '20px' }}>First Name</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={formErrors.firstName !== undefined}
            helperText={formErrors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6} className="grid-item">
          <Typography variant="h7" style={{ marginBottom: '20px' }}>Last Name</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={formErrors.lastName !== undefined}
            helperText={formErrors.lastName}
          />
        </Grid>
        <Grid item xs={12} sm={6} className="grid-item">
          <Typography variant="h7" style={{ marginBottom: '20px' }}>Phone Number</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            error={formErrors.phoneNumber !== undefined}
            helperText={formErrors.phoneNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6} className="grid-item">
          <Typography variant="h7" style={{ marginBottom: '20px' }}>Email</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={formErrors.email !== undefined}
            helperText={formErrors.email}
          />
        </Grid>
      </Grid>
      <Typography variant="h7" style={{ marginTop: '10px', marginBottom: '20px' }}>My Resident Status</Typography>
      <RadioGroup row value={residentStatus} onChange={(e) => setResidentStatus(e.target.value)}>
        <FormControlLabel value="Canadian Resident or Citizen" control={<Radio style={{ color: "#7731E4" }} />} label="Canadian Resident or Citizen" />
        <FormControlLabel value="Non-resident or citizen" control={<Radio style={{ color: "#7731E4" }} />} label="Non-resident or citizen" />
      </RadioGroup>
      <Box display="flex" alignItems="center">
        <Typography variant="subtitle1" style={{ marginRight: '10px' }}>Co-Buyer</Typography>
        <Button variant="" style={{ color: "#7731E4", marginBottom: '20px', marginLeft: 'auto' }}>+ Add</Button>
      </Box>
      <Typography variant="body2" style={{ marginBottom: '10px' }}>
        Having a co-buyer could increase your budget. A co-buyer is any person who will be living in your home with you and is over 18 years old.
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={emailConsent}
            onChange={(e) => setEmailConsent(e.target.checked)}
            style={{ color: "#7731E4" }}
          />
        }
        label="By entering my email, I agree to receive promotional emails from Buyer Folio. I can unsubscribe any time."
      />
      <Box display="flex" justifyContent="center" mt={2}>
        <Button
          variant="contained"
          style={{
            width: "305px",
            height: "56px",
            borderRadius: "39px",
            backgroundColor: "#7731E4"
          }}
          onClick={handleSubmit}
        >
          Next
        </Button>
      </Box>
    </div>
  </Container>
);
}

export default Form1;