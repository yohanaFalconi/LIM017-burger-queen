import './WaiterView.css';
import bqlogo from '../../bqlogo.png';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config'
import { useEffect, useState } from 'react';

const waiter = 'Megan';
function WaiterView() {
    return (
        <div>
            <header>
                <img src={bqlogo} alt='Burger Queen'/>
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
        <div className='menu'>
            <ul>
            {
                items.map(item => <li key={item.id}>
                    <h4>{item.data.Name}</h4>
                    <p>Price: {item.data.Price}</p>
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
            <hr />
            <div>Total: $0</div>
            <div>
                <img src='#' alt='delete'></img>
                <button>Send order</button>
            </div>
        </div>
    );
}

export { WaiterView, Products, Order };