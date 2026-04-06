import Header from './Header';
import { useState,useRef } from 'react';
import { validateFormData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/slices/userSlice';
import { LOGO, LOGO_URL, USER_AVATAR } from '../utils/constants';


const Login = () =>{
    const [isSignUp, setSignIn] = useState(false)
    const [showError,setshowError] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();

    const handleFormData = () => {
       const message = validateFormData(email.current.value,password.current.value);
       setshowError(message);
       if(message) return;
       // now after validation we can proceed for SignIn , SignUp
       if(isSignUp) { 
            // SignUp logic
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
                .then((userCredential)=>{
                    const user = userCredential.user;
                    updateProfile(user, {
                            displayName: name.current.value,photoURL:USER_AVATAR
                    }).then(() => {
                        // we need to dispatch again with the updated values so that our store will be updated.
                        const {email,uid,displayName,photoURL} = auth.currentUser;// this also contains user data and more reliable than just user.
                        dispatch(addUser({email:email,uid:uid,displayName:displayName,photoURL:photoURL}));
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });

                })
                .catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setshowError(errorCode + " " + errorMessage)
                })
       }else{
          //SignIn logic
          signInWithEmailAndPassword(auth,email.current.value,password.current.value)
                .then((userCredential)=>{
                    const user = userCredential.user;
                    updateProfile(user, {
                            displayName: name.current.value,photoURL:'https://avatars.githubusercontent.com/u/99880811?v=4'
                    }).then(() => {
                        // we need to dispatch again with the updated values so that our store will be updated.
                        const {email,uid,displayName,photoURL} = auth.currentUser;// this also contains user data and more reliable than just user.
                        dispatch(addUser({email:email,uid:uid,displayName:displayName,photoURL:photoURL}));
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                })
                .catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setshowError(errorCode + " " + errorMessage)
                })
       }
       
    }
    return (
        <div>
            <Header/>
            <div className='absolute'>
            <img src={LOGO_URL} alt='background-img'/>
            </div>
            <form className='w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignUp?'Sign Up':'Sign In'}</h1>
               {isSignUp && <input type='text' ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
                <input type='text' ref={email} placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
                <input type='password' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
                <p className="text-red-500 font-bold text-lg py-2">{showError}</p>
                <button onClick={(e)=>{e.preventDefault(); handleFormData()}}className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignUp?'Sign Up':'Sign In'}</button>
                <button onClick={(e)=>{e.preventDefault(); setSignIn(!isSignUp)}}>{isSignUp?'Already a User? Login now':'New to Netflix? Sign Up now'}</button>
            </form>
        </div>
    )
}

export default Login;