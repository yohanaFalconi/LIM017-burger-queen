// import { Link } from 'react-router-dom';
import './SignIn.css';
import { auth } from '../../firebase-config';

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


function Navigate() {
    function myComponent() {
       const logInGoogle = () => signInWithPopup(auth, new GoogleAuthProvider())

        return (console.log('hizo click', logInGoogle))
    }

    return (
        <div className="Navigate burgerBg bg-slate-100 grid grid-cols-2 justify-center align-center">
            <button className='routeBtn border-2 border-black justify-center'>
                Sign in with Google
            </button>
            <button onClick={()=> {myComponent()}}>
                GOOGLE
            </button>
        </div>
    );
}


export default Navigate;