import { useState } from 'react';
import './Signin.css'
import LoginTrue from './LoginTrue';
import LoginForm from './LoginForm'
import {
  auth,db,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from '../../firebase';
import { selectUserEmail, selectUserName } from '../../features/userSlice';
import { login,logout, selectUser } from '../../features/userSlice';
import  {FacebookAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { collection, doc, setDoc } from "firebase/firestore";

const Signupcomp = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)

  const navigate = useNavigate();

  const handleGoogleLogin = () =>{
    let provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result)=>{
          setIsLogin(true);
          setUser(result.user)
          localStorage.setItem('user',result.user.uid)
          const docRef = doc(db, 'users', result.user.uid)
           setDoc(docRef, {
          name:auth.currentUser.displayName||null,
          mobile: auth.currentUser.phone||null,
          email: auth.currentUser.email||null,
          userImg: auth.currentUser.photoURL||null,
      },{ merge: true })
        
      } )
      .catch( (e) => {
      
        alert(`login error ${e}`);
        setIsLogin(false); 
      })
 }


 const handleFacebookLogin = () =>{
  let provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
      .then((result)=>{
        setIsLogin(true);
        setUser(result.user)
      } )
      .catch( (e) => {
        alert(`login error ${e}`);
        setIsLogin(false); 
      })
 }


  

//Function to logout user
     const handleLogout = () => {
      auth.signOut()
      .then(()=> {
        setIsLogin(false);
        setUser(null)
        dispatch(logout())
      })
      .catch((err)=>alert(err.message))
    }

  return(
    <div>
    {/* {(isLogin && user)? <LoginTrue name = {user.displayName} email = {user.email} logout={handleLogout}/>:
    (isLogin && user==null)? <LoginTrue name = {userName} email = {userEmail} logout={handleLogout}/>:
    <LoginForm setIsLogin = {setIsLogin} googleLogin={handleGoogleLogin} facebookLogin={handleFacebookLogin} />
    } */}
    { isLogin ?    navigate("/form1") 
    :
    <LoginForm setIsLogin = {setIsLogin} googleLogin={handleGoogleLogin} facebookLogin={handleFacebookLogin} />
    }

      {/* {isLogin ? 
       
      <LoginTrue name = {user.displayName} email = {user.email} logout={handleLogout}/> : <LoginForm setIsLogin = {setIsLogin} googleLogin={handleGoogleLogin} facebookLogin={handleFacebookLogin} />} */}
    </div>
    )

}

export default Signupcomp