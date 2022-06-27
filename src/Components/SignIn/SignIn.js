// import { Link } from 'react-router-dom';
import './SignIn.css';
import { auth } from '../../firebase-config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import logo from '../../assets/bqlogo.png';
import { useNavigate } from "react-router-dom";
// import WaiterView from '../../Components/WaiterView/WaiterView'


function Navigate() {
    const nav = useNavigate();
    const handleGoogleSingin = () => {
        const provider = new GoogleAuthProvider();
        return (signInWithPopup(auth, provider)
        .then(() => {
            nav('/waiter-view')})
        .catch((error) => {console.log(error)}));
    }
    

    return (
        <div className="Navigate burgerBg bg-slate-100 grid grid-cols-2 justify-center align-center">
            <div>
                <img className="bg-[#323131] w-80 shadow-2xl " src={logo} alt="bqlogo" />
            </div>
            <button className='bg-[#323131] w-60 h-14 rounded-full shadow-2xl text-[#FFFFFF] hover:bg-[#FE9C08]'
            onClick={()=> {handleGoogleSingin()}}>
                Sign in with Google
            </button>
        </div>
    );
}


export default Navigate;