import { useState } from 'react';
import './Signin.css'
import Logo from "../../assets/icons/logo.png";
import { Link, useNavigate } from 'react-router-dom'
import signin from "../../assets/images/signin.png"
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import {
  auth,
  db,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from '../../firebase';
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser, selectUserId} from '../../features/userSlice';

const Signupcomp= () => {
  const navigate = useNavigate();
  const [uname, setName] = useState(null)
  const [email, setEmail]  = useState(null)
  const [password, setPassword] = useState(null)
  const [phone, setPhone] = useState(null)
  const [file, setFile] = useState(null)
  const [errorMsg, setErrorMsg] = useState("");
   const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [userID, setUserID] = useState("");
  const dispatch = useDispatch();

  const handleSignup = (e) =>{
    e.preventDefault();
    if (!uname||!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    // setIsLogin(true);
    console.log('name..',uname, email,password)
   

    // Create a new user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
       console.log("userauth", userAuth)
       console.log("uuiidd", userAuth.user.uid)
       setUserID(userAuth.user.uid)
    
      const docRef = doc(db, 'users', userAuth.user.uid)
      setDoc(docRef, { merge: true })
     
      // Update the newly created user with a display name and a picture
        updateProfile(userAuth.user, {
          displayName: uname,
          photoURL: file,
        })
          .then(
           
            // Dispatch the user information for persistence in the redux state
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: uname,
                photoUrl: file,
              })
            )
            
          )
      
          .catch((error) => {
            console.log('user not updated');
          });
      })
      .catch((err) => {
        alert(err);
      });
      console.log("uid", userID);
      // navigate("/signin")
      
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
           <h1> Sign Up - {userID}</h1>
           <form>
              <label id='name'>Name:</label>
              <input
                value={uname}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
                type="text"
                className='input'
              />
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
                  <span className="eye-icon-signup" onClick={handleToggle}>
                  <Icon className="absolute mr-10" icon={icon} size={20}/>
              </span>
              <label id='phone'>Phone:</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='111-111-1111'
                type="text"
                className='input'
              />
              <label id='photo'>Photo:</label>
              <input
                type="file"
                id="file"
                accept="image/png, image/gif, image/jpeg" 
                onChange={(e) => setFile(e.target.files[0])}
                
            />
              <b >{errorMsg}</b>
              <button type='submit' onClick={handleSignup}>Signup</button>
            </form>
            
           </div>
        <div className='right-div'>
          <img src={signin} alt="3D Property" className="d3img" />
        </div>
    </div>
    )

}

export default Signupcomp