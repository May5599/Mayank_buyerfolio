const LoginTrue = ({name,email, logout}) => {
  
return(
  <>
    <h1>Welcome!</h1>
    
    <p>
      Welcome {name}! Your account {email} has been
      successfully logged in 
    </p>
    <button onClick={logout} >
      <span> Logout </span>
    </button>
  </>
);
}

export default LoginTrue