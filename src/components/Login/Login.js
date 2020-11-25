import React from 'react';
import firebaseConfig from './firebase';

// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");




const Login = () => {
    
    firebase.initializeApp(firebaseConfig);
    return (
        <div>
            
        </div>
    );
};

export default Login;