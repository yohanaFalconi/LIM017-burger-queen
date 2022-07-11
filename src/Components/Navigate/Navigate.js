import './Navigate.css';
import { Link } from "react-router-dom";

function Navigate() {
    return(
        <div className="burgerBg h-screen grid place-content-center">
            <div className='flex gap-16 mt-[-50px]'>
                <button className='navBtn'>
                    <Link to='/waiter-view/place-orders'>
                        <p className='text-2xl'>I'm a waiter or waitress</p>
                        <p>Place orders</p>
                    </Link>
                </button>
                <button className='navBtn'>
                    <Link to='/chef-view'>
                        <p className='text-2xl'>I'm a chef</p>
                        <p>See orders</p>
                    </Link>
                </button>   
            </div>
        </div>
    );
}

export default Navigate;
