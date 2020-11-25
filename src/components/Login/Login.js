import React, { useContext, useState } from 'react';
import './Login.css';
import { UserContext } from '../../App';
import google_img from '../../images/google_logo.png';
import firebaseConfig from './firebaseConfig';
import { firebase } from '@firebase/app';
import { useHistory, useLocation } from 'react-router-dom';




require("firebase/auth");


  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);


   
const Login = () => {

  const history =useHistory();
    const [loggedIn, setLoggedIn] =useContext(UserContext);
    const [error, setError] = useState();
   
    console.log(loggedIn)
    const googleSingUp = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            var token = result.credential.accessToken;
            // The signed-in user info.
            const {displayName, photoURL ,email} = result.user;
            setLoggedIn({...loggedIn,displayName, photoURL ,email})
            if(result.user.email){
              history.replace('/todo');
          }
          }).catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
           
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            setError(errorMessage)
          });


    }

    return (
        <div className="text-center">
            
                <div className="loginBox">
                    <h3>Login With</h3>
                    <div onClick={googleSingUp}  className="continue_google_box">
                        <img className="google_logo" src={google_img} alt=""/>
                        <span>Continue With Google</span>
                    </div>
                    {
                      error&&  <p style={{color:'red',fontSize:'13'}}>{error}</p>
                   }                 
                </div>
        </div>
    );
};

export default Login;