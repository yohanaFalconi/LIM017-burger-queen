import './Navigate.css';
import { Link } from "react-router-dom";

function Navigate() {
    return(
        <div className="burgerBg h-screen">
            <button>
                <Link to='/waiter-view'>
                    <p>I'm a waiter or waitress</p>
                    <p>Place orders</p>
                </Link>
            </button>
            <button>
                <Link to='/chef-view'>
                    <p>I'm a chef</p>
                    <p>See orders</p>
                </Link>
            </button>
        </div>
    );
}

export default Navigate;