import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { updateUserInfo } from '../../features/userSlice';
import { Container, Typography, Box, IconButton, Grid, MenuItem, Select, Button } from '@mui/material';
import { ArrowBack, ArrowForward, ArrowDropDown } from '@mui/icons-material';
import StyledLinearProgress from '../StyledLinearProgress';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { updateUserInfo } from '../../featureForm/userSlice';
//import { setErrorMessage } from '../../featureForm/errorSlice'; // Import setErrorMessage action

function PrimaryApplicant() {
  const [gender, setGender] = useState('');
  const [race, setRace] = useState('');
  const [veteran, setVeteran] = useState('');
  const [disability, setDisability] = useState('');
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);
  const navigate = useNavigate();

  const handleNextClick = async () => {
    
    const userId = localStorage.getItem("user"); // Corrected typo in getItem
    try {
      if (!userId) {
        throw new Error('User ID not found');
      }
  
      await updateDoc(doc(db, "users", userId), {
        gender,
        race,
        veteran,
        disability
      });
  
      dispatch(updateUserInfo({
        gender,
        race,
        veteran,
        disability
      }));
  
      navigate('/form2');
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error message display logic elsewhere
    }
  };
  

  const canProceed = gender && race && veteran && disability;

  return (
    <Container>
      <div className="form-container">
        <StyledLinearProgress variant="determinate" value={2} />
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <IconButton onClick={() => navigate('/form1')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>
            Equal Opportunity and Diversity
          </Typography>
          <IconButton onClick={handleNextClick}>
            <ArrowForward />
          </IconButton>
        </Box>
        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
          Equal Opportunity and Diversity
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Typography variant="subtitle1" style={{ marginBottom: '10px', textAlign: 'center' }}>
            We are committed to non-discrimination based on gender, race, age, color, religion, or veteran status.
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Box>
                <Typography variant="subtitle1" style={{ marginBottom: '8px' }}>Gender</Typography>
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  fullWidth
                  variant="outlined"
                  endIcon={<ArrowDropDown />}
                >
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="male">male</MenuItem>
                  <MenuItem value="other">other</MenuItem>
                  {/* Add more gender options as needed */}
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Box>
                <Typography variant="subtitle1" style={{ marginBottom: '8px' }}>Race</Typography>
                <Select
                  value={race}
                  onChange={(e) => setRace(e.target.value)}
                  fullWidth
                  variant="outlined"
                  endIcon={<ArrowDropDown />}
                >
                  <MenuItem value="Asian">Asian</MenuItem>
                  <MenuItem value="American">American</MenuItem>
                  <MenuItem value="French">French</MenuItem>
                  {/* Add more race options as needed */}
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Box>
                <Typography variant="subtitle1" style={{ marginBottom: '8px' }}>Veteran Status</Typography>
                <Select
                  value={veteran}
                  onChange={(e) => setVeteran(e.target.value)}
                  fullWidth
                  variant="outlined"
                  endIcon={<ArrowDropDown />}
                >
                  <MenuItem value="I am a veteran of the Vietnam era">I am a veteran of the Vietnam era</MenuItem>
                  {/* Add more veteran status options as needed */}
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Box>
                <Typography variant="subtitle1" style={{ marginBottom: '8px' }}>Disability</Typography>
                <Select
                  value={disability}
                  onChange={(e) => setDisability(e.target.value)}
                  fullWidth
                  variant="outlined"
                  endIcon={<ArrowDropDown />}
                >
                  <MenuItem value="I am a disabled veteran">I am a disabled veteran</MenuItem>
                  {/* Add more disability options as needed */}
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
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
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
}

export default PrimaryApplicant;
