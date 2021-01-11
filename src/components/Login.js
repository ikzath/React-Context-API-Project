import React from 'react';
import '../style/Login.css';
import { auth, provider } from "./firebase";
import { loginUser } from "../features/UserSlice";
import { Button } from '@material-ui/core';
import { useDispatch } from "react-redux";


function Login() {

    const dispatch = useDispatch();

    const signIn = ()=> {
        auth
        .signInWithPopup(provider)
        .then( ({ user }) => {
            dispatch(
                loginUser({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                })
            )
        })
        .catch( error => alert(error.message));        
    }


    // const signIn = () => {
    //     auth.signInWithPopup(provider)
    //     .then((result) => {
    //         /** @type {firebase.auth.OAuthCredential} */
    //         var credential = result.credential;
        
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         var token = credential.accessToken;
    //         // The signed-in user info.
    //         var user = result.user;
    //         // ...
    //       }).catch(err => alert(err.message));
    // }

    
    return (
        <div className='login'>
            <div className="login__container">

            <img src="https://images.news18.com/ibnlive/uploads/2020/11/1604413203_gmail_logo.jpg" 
            alt="" 
            className="login__image"/>

            <Button variant='contained' color='primary' onClick={signIn}>LOGIN</Button>
            </div>
        </div>
    )
}

export default Login 
