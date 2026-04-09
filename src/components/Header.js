import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/slices/userSlice";
import {languages, LOGO} from '../utils/constants';
import { gptSearchedMovies, toggleGptSearchButton } from "../utils/slices/gptSlice";
import { changeLanguageValue } from "../utils/slices/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store=>store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
}).catch((error) => {
  navigate('/errorPage');
});
    };
    const handleGptSearchPage = () => {
        dispatch(toggleGptSearchButton());
        dispatch(gptSearchedMovies({movieList:null,moviesResult:null}))
    }

    const handleLanguageValue = (e) => {
        dispatch(changeLanguageValue(e.target.value))
    }
    const gptSearchValue = useSelector((store)=>{return store.gpt.gptSearchButton});

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{ // method to Get the currently signed-in user
        if (user) {
            // when user sign up or sign in
            const {email,uid,displayName,photoURL} = user;
            dispatch(addUser({email:email,uid:uid,displayName:displayName,photoURL:photoURL}));
            navigate('/browse')
        }else{
            // when user sign out
            dispatch(removeUser());
            navigate('/');
        }
        })
/**we must unsubscribe when the component unmounts. beacuase This is about listeners piling up.
What onAuthStateChanged actually does

This function registers a persistent listener.

Every time it runs, a new listener is added.

It returns an unsubscribe function.

 When you write:

onAuthStateChanged(auth, callback)

Firebase does:

“Okay, I will keep watching auth state.
Whenever it changes, I will call this callback.”

And it keeps that callback in memory.

It does NOT auto-remove it.

Step 2 — Every time this runs, a new watcher is added

Imagine this runs twice:

onAuthStateChanged(auth, cb1)
onAuthStateChanged(auth, cb2)

Now Firebase has two watchers.

When user logs in:

cb1 runs
cb2 runs

That’s why you see double dispatch, double navigate, weird bugs.

Step 3 — What unsubscribe means

Firebase gives you a way to say:

“Remove this watcher I added earlier.”

const unsubscribe = onAuthStateChanged(auth, cb);

// later
unsubscribe();

That removes that specific watcher from memory.
* **/
        return (()=>(unsubscribe()));
    },[]);

console.log(gptSearchValue);

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between">
            <img className="w-52" src={LOGO}alt='netflix-logo'/>
           { user && <div className="flex p-2">
            {gptSearchValue && <select className="p-2 m-6 bg-gray-900 text-white" onChange={handleLanguageValue}>
            {languages.map((item)=>{return  <option key={item.identifier} value={item.identifier}>{item.name}</option> })}
            </select>}
            <button onClick={handleGptSearchPage} className="py-2 px-2 mx-4 my-4 bg-purple-800 text-white rounded-lg" >{gptSearchValue?"HomePage":"Gpt Search"}</button>
               <img className="w-12 h-12" alt="usericon" src={user?.photoURL}/>
               <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
            </div>}
        </div>
    )
}




export default Header