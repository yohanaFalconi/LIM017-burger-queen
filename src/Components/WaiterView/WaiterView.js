import './WaiterView.css';
import bqlogo from '../../assets/bqlogo.png';
import Icon from "../../IcoMoon/Icon";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config'
import { useEffect, useState } from 'react';

const waiter = 'Megan';
function WaiterView() {
    return (
        <div className='bg-[#FAFAFA] WaiterView'>
            <main className='main'>
                <img src={bqlogo} alt='Burger Queen' className='h-24 ml-4 mt-3' />
                <Products />
            </main>
            <aside className='aside'>
                <Order />
            </aside>
        </div>
    );
}

function ProductItem(props) {
    return(
        <li key={props.item.id} className='bg-white shadow-md rounded-2xl text-center h-4/5 font-poppins'>
            <img src={props.item.data.url} alt={props.item.data.Name} className='h-1/2 m-3 max-w-[80%] inline-grid' />
            <h4>{props.item.data.Name}</h4>
            <p>${props.item.data.Price}</p>
            <div className='flex justify-center'>
                <button>-</button>
                <p>{props.item.data.Count}</p>
                <button>+</button>
            </div>
        </li>
    )
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
        <div className='menu grid grid-cols-4 gap-5 m-5'>
            <ul className='contents'>
                {items.map(item => <ProductItem item={item} />)}
            </ul>
        </div>
    );
}

function Order() {
    return(
        <div className='bg-[#B5D6B2] rounded-2xl h-screen mt-5 font-poppins'>
            <div className='bg-[#FAFAFA]'>Waiter: {waiter}</div>
            <label>
                Table:
                <select name="select" className='bg-[#FAFAFA]'>
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
            <div className='bg-[#FFBF69]'>Total: $0</div>
            <div>
                <img src='#' alt='delete'></img>
                <button>Send order</button>
            </div>
        </div>
    );
}

export { WaiterView, Products, Order };