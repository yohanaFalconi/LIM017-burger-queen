// import { Link } from 'react-router-dom';
import './SignIn.css';
import { auth } from '../../firebase-config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import logo from '../../assets/bqlogo.png';
import Icon from "../../IconMoon/Icon";
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
            <div className="logo">
                <img className="logoSize"src={logo} alt="bqlogo" />
            </div>
            <div className='flex justify-center'>
                <div className="googleBtn">
                    <Icon  color="white" size={25} icon="google" />
                    <button
                    onClick={()=> {handleGoogleSingin()}}>
                    Sign in
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;