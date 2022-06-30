import './Navigate.css';
import { Link } from "react-router-dom";

function Navigate() {
    return(
        <div className="burgerBg h-screen">
            <div className='flex justify-center gap-16'>
                <button className='navBtn'>
                    <Link to='/waiter-view'>
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