import React, { useState } from 'react';
import {Container,InputAdornment,Typography,Box,Button,TextField,IconButton,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import StyledLinearProgress from '../StyledLinearProgress';
import '../../css/form2.css';
import { useNavigate } from 'react-router-dom';

function Form8({  nextPage }) {
  const [bankDetails, setIncome] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const navigate = useNavigate();

    const goToPage = (page) => {
    navigate(page);
    };

  
  const handleInputChange = (event, setStateFunction) => {
    const value = event.target.value;
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setStateFunction(value);
    }
  };

  const textFieldStyle = {
    marginBottom: 3,
    width: '563px',
    height: '48px',
    borderRadius: '6px',
  };

  const buttonStyle = {
    width: '80px',
    height: '36px',
    // backgroundColor: perMonthSelected ? '#7731E4' : '',
    // color: perMonthSelected ? 'white' : '#7731E4',
    fontFamily: 'Raleway-Bold',
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 'normal',
    border: 'none',
    outline: 'none',
    textTransform: 'none',
  };

  const pinkContainerStyle = {
    backgroundColor:'#FFD1DA    ',
    marginTop:'15px',
    padding: '20px', 
    width: '400px',
    borderRadius: '5px',
    textAlign:'center'
  };
  const isFormValid = () => {
    return bankDetails.trim() !== '' ;
  };

  return (
    <Container>
      <div style={{ margin: '10px auto', padding: '20px' }}>
        <StyledLinearProgress variant="determinate" value={8} />
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <IconButton onClick={() => goToPage('/form7')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="subtitle1" style={{ marginLeft: '10px', marginRight: '10px' }}>
            Authentication : Connect your bank
          </Typography>
          <IconButton onClick={nextPage} disabled={!isFormValid()}>
            <ArrowForward />
          </IconButton>
        </Box>
        <Typography variant="h5" style={{ marginBottom: '10px', textAlign: 'center' }}>
          Please enter your bank details
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
          <Box width="563px" textAlign="left">
            <Typography variant="subtitle1">Select your bank</Typography>
            <TextField
              variant="outlined"
              value={bankDetails}
              onChange={(event) => handleInputChange(event, setIncome)}
              sx={textFieldStyle}
            //   InputProps={{
            //     startAdornment: null,
                
            //   }}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start" >
                    <p style={{ fontWeight: 'bold', color: 'black' }}>IDBL Bank</p>
                  </InputAdornment>
                ),
              }}
              id="bankDetails"
            />
            </Box>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <img src="/images/CIBC Bank Logo.jpg" alt="CIBC" className="bank-logo" />
                <img src="/images/TD Bank Logo.jpg" alt="TD" className="bank-logo" />
                <img src="/images/Scotia Bank Logo.jpg" alt="Scotia" className="bank-logo" />
                <img src="images/RBC Bank Logo.jpg" alt="RBC" className="bank-logo" />
                <img src="/images/BMO Bank Logo.jpg" alt="IDBL" className="bank-logo" />
            </div>
        </Box>
        <Container style={pinkContainerStyle}>
            <Typography variant="h6" style={{ color: 'black', fontWeight: "bold", fontSize:"18px" }}>Contact your bank account in 3 steps</Typography>
                <p style={{ color: 'grey', fontSize:'12px' }}>Our AI algorithms analyze and validate your financial data</p>
                
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center' , 
                    border:'solid',
                    borderRadius:'5px',
                    borderWidth:'1px',
                    borderColor:'grey',
                    padding:'5px',
                    margin:'5px',
                    alignContent:'center',
                    color:'grey'}}>
                    <Typography variant="body1">Is this connection secure?</Typography>
                    <span style={{ fontSize: '10px', marginLeft: '140px' }}>▼</span>
                </div>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center' , 
                    border:'solid',
                    borderRadius:'5px',
                    borderWidth:'1px',
                    borderColor:'grey',
                    padding:'5px',
                    margin:'7px',
                    alignContent:'center',
                    color:'grey'
                }}>
                    <Typography variant="body1">Why do I need to connect?</Typography>
                    <span style={{ fontSize: '10px', marginLeft: '130px' }}>▼</span>
                </div>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center' , 
                    border:'solid',
                    borderRadius:'5px',
                    borderWidth:'1px',
                    borderColor:'grey',
                    padding:'5px',
                    margin:'7px',
                    alignContent:'center',
                    color:'grey'
                 }}>
                    <Typography variant="body1">What if my bank is missing?</Typography>
                    <span style={{ fontSize: '10px', marginLeft: '120px' }}>▼</span>
                </div>
        </Container>
       
        <Box display="flex" justifyContent="center" mt={2}>
        <Button 
            variant="contained"
                style={{ 
                    width: "305px", 
                    height:"56px", 
                    borderRadius: "39px",
                    backgroundColor: "#7731E4",
                    marginTop: "25px"
                }} 
                onClick={nextPage}
                >
                Next
        </Button>
         </Box>    
      </div>
    </Container>
  );
}

export default Form8;

