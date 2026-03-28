import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter,RouterProvider} from 'react-router'
import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";

const Body = () =>{
const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{ // method to Get the currently signed-in user
      if (user) {
        // when user sign up or sign in
        const {email,uid,displayName,photoURL} = user;
        dispatch(addUser({email:email,uid:uid,displayName:displayName,photoURL:photoURL}));
      }else{
        // when user sign out
        dispatch(removeUser());
        // navigate('/');
      }
    })
  },[]);


    const appRouter = createBrowserRouter([
        {
          path:'/',
          element:<Login/>
        },
        {
          path:'/browse',
          element:<Browse/>
        }
    ])

    return (
        <RouterProvider router={appRouter}/>
    )

}

export default Body;