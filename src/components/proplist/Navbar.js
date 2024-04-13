import search from '../../assets/icons/search.png';
import notification from '../../assets/icons/notification.png';
import logo from "../../assets/icons/logo.png";
import './proplist_styles/nav.css'
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from "@material-ui/core/Modal";
import Notification from '../notification/Notification'

const Navbar = () => {
  
	const [open, setOpen] = useState(false);
 
	const handleClose = () => {
			setOpen(false);
	};

	const handleOpen = () => {
			setOpen(true);
	};
	return ( 
		<>
      <header>
        <div className='nav-container nav-flex'>
          <div >
          <img src={logo} alt="Logo" className="logo"/>
					</div>
					<form className="search-form">
            <input  type="search" className="search" /> 
						<img src={search} alt="search icon" className='search-icon'/>
						<span className="notif">
                <img src={notification} alt="notification" className='bell-icon' onClick={handleOpen}/>
              <Avatar />
						</span>
						</form>
            <Modal
                onClose={handleClose}
                open={open}
                // className={'notif-style'}
                // style={{
                //     position: "absolute",
								// 		top: "-75%",
								// 		left:"50%",
                //     border: "2px solid #000",
                //     backgroundColor: "lightgray",
                //     boxShadow: "2px solid black",
                //     height: 700,
                //     width: 450,
                //     margin: "auto",
                                  
                // }}
            >
                <>
                   <Notification/>
                </>
            </Modal>
				</div>
			</header>
		</>			
	 );
}
 
export default Navbar;