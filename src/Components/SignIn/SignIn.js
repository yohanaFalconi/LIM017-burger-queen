// import { Link } from 'react-router-dom';
import './SignIn.css';
import { auth } from '../../firebase-config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import logo from '../../assets/bqlogo.png';
import { useNavigate } from "react-router-dom";


function SignIn() {
    const nav = useNavigate();
    const handleGoogleSingin = () => {
        const provider = new GoogleAuthProvider();
        return (signInWithPopup(auth, provider)
        .then(() => {
            nav('/navigate')})
        .catch((error) => {console.log(error)}));
    }

    return (
        <div className="SignIn burgerBg">
            <div>
                <img className="w-80" src={logo} alt="bqlogo" />
            </div>
            <button className='bg-[#323131] w-60 h-14 rounded-full shadow-2xl text-[#FFFFFF] hover:bg-[#FE9C08]'
            onClick={()=> {handleGoogleSingin()}}>
                Sign in
            </button>
        </div>
    );
}

export default SignIn;