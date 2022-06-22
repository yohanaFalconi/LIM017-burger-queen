// import { Link } from 'react-router-dom';
import './SignIn.css';

function Navigate() {
    return (
        <div className="Navigate burgerBg bg-slate-100 grid grid-cols-2 justify-center align-center">
            <button className='routeBtn border-2 border-black justify-center'>
                Sign in with Google
            </button>
        </div>
    );
}
  
export default Navigate;