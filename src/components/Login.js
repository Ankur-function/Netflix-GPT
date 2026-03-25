import Header from './Header';
import { useState } from 'react';

const Login = () =>{
    const [isSignUp, setSignIn] = useState(false)
    console.log(isSignUp);
    
    return (
        <div>
            <Header/>
            <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_medium.jpg' alt='background-img'/>
            </div>

            <form className='w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignUp?'Sign Up':'Sign In'}</h1>
               {isSignUp && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
                <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
                <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignUp?'Sign Up':'Sign In'}</button>
                <button type="button" onClick={()=>{setSignIn(!isSignUp)}}>{isSignUp?'Already a User? Login now':'New to Netflix? Sign Up now'}</button>
            </form>
        </div>
    )
}

export default Login;