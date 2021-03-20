import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { handleSignOut, handleGoogleSignIn, initializeLoginFramework, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';
import './Login.css';



function Login() {
  initializeLoginFramework();
  const [newUser,setNewUser]=useState(false)
  const[userInfo,setUserInfo]=useState({
    isSignedIn:false,
    name:'',
    email:'',
    password:'',
    photo:'',
    error:'',
    success:''
  });

  //Importing UserContext variable  from App.js  into useContext() hook here
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);

  //For redirecting user to Where he came from
  const history=useHistory();
  const location=useLocation();
  let { from } = location.state || { from: { pathname: "/" } };



  //Google Sign in
  const googleSignIn=()=>{
    handleGoogleSignIn()
    .then(res=>shortenResponse(res,true))
  }

  //Facebook Sign In
  const fbSignIn=()=>{
    handleFbSignIn()
    .then(res=>shortenResponse(res,true))
  }


 


  //Sign Out
  const signOut=()=>{
    handleSignOut()
    .then(res=>shortenResponse(res,false))
  }
  
 
  //Custom Sign in area

  //Error Handling using Regular expression
  const handleBlur=(event)=>{
    let isFormValidate=true;
    const targetName=event.target.name;
    const targetValue=event.target.value;
    //console.log(event.target.name,event.target.value)
    if(targetName==='email'){
      const regExp=/\S+@\S+\.\S+/
      const isEmailValidate=regExp.test(targetValue);
      isFormValidate=isEmailValidate;
      //console.log(isEmailValidate)
    }

    if(targetName==='password'){
      const regExpPass=/\d{1}/
      const passHasNumber=regExpPass.test(targetValue);
      const isPassValidate=targetValue.length>7 && passHasNumber;
      isFormValidate=isPassValidate;
      //console.log(isPassValidate)
    }

    if(isFormValidate){
      //copying object data from state
      const newUserInfo={...userInfo}
      //assigning new value
      newUserInfo[targetName]=targetValue;
      setUserInfo(newUserInfo);
    }else{
      const newUserInfoFalse={...userInfo}
      newUserInfoFalse[targetName]="";
      setUserInfo(newUserInfoFalse);
    }
  } 




  //Submitting the form and inserting into firebase
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log('submitted');

    if(newUser && userInfo.email && userInfo.password){
        console.log('submitted new user');
      createUserWithEmailAndPassword(userInfo.name, userInfo.email, userInfo.password)
      .then(res=>shortenResponse(res,true))
    }
    
    
    //Sign in
    if(!newUser && userInfo.email && userInfo.password){
        console.log('submitted existing users');
      signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(res=>shortenResponse(res,true))
    }
  }


  const shortenResponse=(res, redirectAction)=>{
    setUserInfo(res);
    setLoggedInUser(res);
    redirectAction && history.replace(from);
  }


  return (
    <div className="App">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      {
        userInfo.isSignedIn? <button onClick={signOut}>Sign Out</button> :  <div><button onClick={googleSignIn}>Continue with Google</button> <button onClick={fbSignIn}>Continue with Facebook</button></div>
      }

      {
        userInfo.isSignedIn && <div>
            <h1>Welcome {userInfo.name}</h1>
            <img src={userInfo.photo} alt={userInfo.photo}/>
          </div>
      }


      <div>
        
        {
          userInfo.error && <p style={{color:'red'}}>{userInfo.error}</p>
        }
        {
          userInfo.success && <p style={{color:'green'}}>{userInfo.success}</p>
        }
        {
          newUser? <h1>Create New Account</h1> : <h1>Login Now</h1>
        }

        <input type="checkbox" name="newUser" id="" onChange={()=>setNewUser(!newUser)}/>
        <label htmlFor="">New USer Signup |</label>
       


      </div>


      <div className="container login-area">
            <div className="gap-3 col-5 mx-auto login-box">
                <div className="customAuth">
                    <h2>Create and Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" class="form-control" name="email" placeholder="Username E-mail"/>
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="password" class="form-control" name="password" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="password" class="form-control" name="repassword" placeholder="Confirm Password"/>
                        </div>
                        <div className="form-group">
                            {newUser? <><input type="submit" value="Create New Account"/><p>Already have an account? <span>Login</span></p></> : <><input type="submit" value="Login"/><p>Don't have an account? <span>Create an Account</span></p></>}
                        </div>
                    </form>
                </div>
                <p>---------------or------------</p>
                <div class="socialAuth">
                    <button onClick={fbSignIn} class="btn btn-primary fb" type="button">Continue with Facebook</button>
                    <button onClick={googleSignIn} class="btn btn-danger google" type="button">Continue with Google</button>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Login;
