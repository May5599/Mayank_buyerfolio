import React from 'react';
import { AppBar, InputAdornment, Toolbar, TextField, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { Search, ArrowDropDown, Notifications } from '@mui/icons-material';
import {auth} from '../firebase'
import { useDispatch, useSelector } from 'react-redux';
import { login,logout, selectUser } from '../features/userSlice'
import { Link, useNavigate } from 'react-router-dom'

function CustomAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        auth.signOut()
        .then(()=> {
        //   setIsLogin(false);
        //   setUser(null)
          dispatch(logout())
          navigate('/')
        })
        .catch((err)=>alert(err.message))
      }

    return (
        <AppBar position="sticky" style={{ backgroundColor: '#7731e4' }}>
            <Toolbar>
                <img src="/images/logo.png" alt="buyerfolio" style={{ height: '40px', marginRight: '20px' }} />
                <div style={{ flexGrow: 1 }}></div>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search..."
                    style={{ backgroundColor: 'white', borderRadius: '20px', width: '250px' }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search color="action" />
                            </InputAdornment>
                        ),
                    }}
                />
                <IconButton color="inherit" style={{ marginLeft: '10px' }}>
                    <Notifications />
                </IconButton>
                <IconButton color="inherit" style={{ marginLeft: '10px' }} onClick={handleMenuOpen}>
                    <Avatar src="/images/User_icon.png" alt="User Avatar" />
                </IconButton>
                <IconButton color="inherit" style={{ marginLeft: '-10px' }} onClick={handleMenuOpen}>
                    <ArrowDropDown />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={()=>  navigate('/usersettings')}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default CustomAppBar;
