import './SignIn.css';
import { auth } from '../../lib/firebase-utils';
//import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "../../lib/firebase-init"
import logo from '../../assets/bqlogo.png';
import Icon from "../../IcoMoon/Icon";
import { useNavigate } from "react-router-dom";

function SignIn(props) {

    const nav = useNavigate();
    const handleGoogleSingin = () => {
        const provider = new GoogleAuthProvider();
        console.log(signInWithPopup())
        return (signInWithPopup(auth, provider)
        .then((result) => {
            console.log('aqui',result)
            props.setUsername(result.user.displayName);
            //console.log('username state passed as prop:', props.username);
            nav('/navigate')})
        .catch((error) => {console.log(error)}));
    }

    return (
        <div className="SignIn burgerBg h-screen">
            <div className="grid place-content-center">
                <img className="w-[450px] mt-[26vh] mb-[5vh]" src={logo} alt="bqlogo" />
            </div>
            <div className='flex justify-center'>
                <button className='googleBtn' onClick={()=> {handleGoogleSingin()}}>
                    <Icon color="white" size={24} icon="google" />
                    Sign in
                </button>
            </div>
        </div>
    );
}

export default SignIn;