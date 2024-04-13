import walkthrough from '../../assets/icons/walkthrough.png';
import street from '../../assets/icons/street.png';
import share from '../../assets/icons/share.png';
import heart from '../../assets/icons/heart.png';
import circle from '../../assets/icons/circle.png';
import './proplist_styles/header.css'
import {useNavigate } from 'react-router-dom'


const Header = ({data}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/images')
  }

	return ( 
	     
          <div className='box' >
            <img className="header-house-img1" src={data.cover} alt='House image1' />
            <button className="viewBtn1"> 
               <img src={walkthrough} alt="walkthrough" height="15" width="15"/>  3D Walkthrough 
            </button> 
            <button className="viewBtn2"> 
              <img src={street} alt="street view" height="15" width="15"/> Street View
            </button> 
            <div className="like-icons">
                <div className="img-border"><img src={heart} className="hicon" alt="like" /></div>
                <div className="img-border"><img src={share} className="hicon" alt="share" /></div>
                <div className="img-border"><img src={circle} className="hicon" alt="subscribe" /></div>
              </div>
            <div className="img-div">
						  <img className="header-house-img2" src={data.img2} alt='' />
						    <img className="header-house-img3" src={data.img3} alt=''/>
                
            </div>
              <button className="img-button" onClick = {handleClick}> See all 36 images </button> 
          
          </div>
   
	 );
}
 
export default Header;