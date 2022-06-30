import './WaiterView.css';
import bqlogo from '../../assets/bqlogo.png';
import Icon from "../../IcoMoon/Icon";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config'
import { useEffect, useState } from 'react';

const waiter = 'Megan';
function WaiterView() {
    return (
        <div className='bg-slate-50'>
            <header>
                <img src={bqlogo} alt='Burger Queen'
                className='h-32' />
                <main>
                    <Products />
                </main>
                <aside>
                    <Order />
                </aside>
            </header>
        </div>
    );
}

function Products() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getMenuItems()
    }, [loading])

    function getMenuItems() {
        const menuCollectionRef = collection(db, 'menu-items');
        getDocs(menuCollectionRef)
        .then(response => {
            const menuItems = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            setItems(menuItems);
            setLoading(false);
        }).catch(error => console.log(error))
    }

    if (loading) {
        return <div>Loading menu...</div>;
    }

    return (
        <div className='menu grid grid-cols-4'>
            <ul className='contents'>
            {
                items.map(item => <li key={item.id} className='bg-white shadow-md rounded-xl m-3'>
                    <h4>{item.data.Name}</h4>
                    <img src={item.data.url} alt={item.data.Name} />
                    <p>Price: {item.data.Price}</p>
                    <div>
                        <button>-</button>
                        <p>{item.data.Count}</p>
                        <button>+</button>
                    </div>
                </li>)
            }
            </ul>
        </div>
    );
}

function Order() {
    return(
        <div>
            <div>Waiter: {waiter}</div>
            <label>
                Table:
                <select name="select">
                    <option value="table1">1</option>
                    <option value="table2">2</option>
                    <option value="table3">3</option>
                    <option value="table4">4</option>
                    <option value="table5">5</option>
                </select>
            </label>
            <hr />
            <div>Ordered items go here</div>
            <Icon color="blue" size={20} icon="plus" />
            <hr />
            <div>Total: $0</div>
            <div>
                <img src='#' alt='delete'></img>
                <button>Send order</button>
            </div>
        </div>
    );
}

export {WaiterView, Products, Order };