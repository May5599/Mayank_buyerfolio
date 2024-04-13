import React from 'react';
import { Box, Button, Typography, IconButton, Divider, List, ListItem, ListItemText } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';


function Sidebar() {
  return (
    <Box style={{ width: 250, height: '100vh', boxShadow: '5px 0 5px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', overflowY: 'hidden' }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" padding="10px">
      <Typography variant="h6">
        Dashboard
      </Typography>
      <IconButton color="inherit">
        <ArrowBack />
      </IconButton>
    </Box>
    
    <Divider />
    
    <List style={{ flexGrow: 1 }}>
      <ListItem button style={{ backgroundColor: '#7731E4' }}>
        <img src="/images/Vector.png" alt="Task Icon" width="24px" height="24px"  />
        <ListItemText primary="Tasks" style={{ marginLeft:'10px' , color: 'white'}} />
      </ListItem>

        
        <ListItem button>
          <img src="/images/house-care.svg" alt="Liked Homes Icon" width="24px" height="24px" />
          <ListItemText primary="Liked Homes" style={{ marginLeft:'10px'}} />
        </ListItem>

        <ListItem button>
          <img src="/images/Saved_Searches_Icon.svg" alt="Saved Searches Icon" width="24px" height="24px" />
          <ListItemText primary="Saved Searches" style={{ marginLeft:'10px'}} />
        </ListItem>

        <ListItem button>
          <img src="/images/Hidden_Homes.svg" alt="Hidden Homes Icon" width="24px" height="24px" />
          <ListItemText primary="Hidden Homes" style={{ marginLeft:'10px'}} />
        </ListItem>

        <ListItem button>
          <img src="/images/mortgage.svg" alt="Pre-qualification Icon" width="24px" height="24px" />
          <ListItemText primary="Pre-qualification" style={{ marginLeft:'10px'}}/>
        </ListItem>
      </List>

      

      <Divider style={{ marginTop: 'auto' }} />

    <Box display="flex" flexDirection="row" alignItems="center" padding="5px" style={{ borderRadius: '15px', border: '1px dashed #000', marginBottom: '10px' }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginRight="10px"
        marginBottom="10px"
      >
        <Typography variant="body2" align="center" gutterBottom>
          Download our App now!
        </Typography>

        <Box marginBottom="5px">
          <Button 
            variant="outlined" 
            style={{ color: '#000', minWidth: '80px', fontSize: '0.8rem', borderColor:'#000' }}
            startIcon={<img src="/images/Apple_Logo.svg" alt="App Store" width="16px" height="16px" />}
          >
            Appstore
          </Button>
        </Box>

        <Box marginBottom="5px">
          <Button 
            variant="outlined" 
            style={{ color: '#000', minWidth: '80px', fontSize: '0.8rem', borderColor:'#000' }}
            startIcon={<img src="/images/Google_Play.svg" alt="Play Store" width="16px" height="16px" />}
          >
            Playstore
          </Button>
        </Box>
      </Box>

      <img src="/images/barcode.png" alt="Barcode" width="60px" />
    </Box>

</Box>
);
}

export default Sidebar;