import { useState } from 'react';
import './Signin.css'
import Logo from "../../assets/icons/logo.png";
import { Link } from 'react-router-dom'
import signin from "../../assets/images/signin.png"
import Google from "../../assets/images/Google.png"
import Facebook from "../../assets/images/Facebook.png"
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout, selectUserEmail, selectUserName } from '../../features/userSlice';


const LoginForm = ({setIsLogin,googleLogin,facebookLogin}) => {
  const [email, setEmail]  = useState(null)
  const [password, setPassword] = useState(null)
  const [errorMsg, setErrorMsg] = useState("");
   const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)
 
  const handleLogin = (e) =>{
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    signInWithEmailAndPassword(auth, email, password)
   
    // returns  an auth object after a successful authentication
    // userAuth.user contains all our user details
      .then((userAuth) => {
        
        setIsLogin(true);
        localStorage.setItem('user',userAuth.user.uid)
      // store the user's information in the redux state
        console.log('email2',userAuth.user.email)
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
// display the error if any
      .catch((err) => {
        alert(err);
      });
  };
  

  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }

   return(
    <div className='signup-container'>
       <div className='login'>
          <img src={Logo} alt="Company Logo" className="logo" />
           <h1> Let's get started</h1>
           <form>
              <label id='email'>Email:</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                type='email'
                className='input'
              />
             <label id='password'>Password:</label>
              <input 
                type={type}
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                className='input'
                 />
                  <span className="eye-icon" onClick={handleToggle}>
                  <Icon className="absolute mr-10" icon={icon} size={20}/>
              </span>
              <b >{errorMsg}</b>
              <button type='submit' onClick={handleLogin}>Login</button>
            </form>
            <p>
               New user!{" "}
              <span>
                <Link to="/signup" className="signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
              </span>
            </p>
    
            <fieldset className="title">
              <legend>or continue with</legend>
            </fieldset>
            <div className="social">
               <button type="button" className="google-btn" onClick = {googleLogin}><img src={Google} alt="google"></img><span>Google </span></button> 
               <button type="button" className="fb-btn" onClick = {facebookLogin}><img src={Facebook} alt="google"></img><span>Facebook</span> </button> 
            
           
            </div>
        </div>
        <div className='right-div'>
          <img src={signin} alt="3D Property" className="d3img" />
        </div>
    </div>
    )

}

export default LoginForm