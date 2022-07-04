import './WaiterView.css';
import bqlogo from '../../assets/bqlogo.png';
import Icon from "../../IcoMoon/Icon";
import { menuCollectionRef, getItemsById } from '../../firebase-utils';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config'
import { useEffect, useState } from 'react';
import { data } from 'autoprefixer';

const waiter = 'Megan';
function WaiterView() {
    return (
        <div className='bg-slate-50 WaiterView'>
            <main className='main'>
                <img src={bqlogo} alt='Burger Queen' className='h-32' />
                <Products />
            </main>
            <aside className='aside'>
                <Order />
            </aside>
        </div>
    );
}

function ProductItem(props) {
    const [ productSelected, setProductSelected ] = useState([]);
    const [counter, setCounter] = useState(0);


    const addProductQty = (id) => {
        getItemsById(id).then((orderedItems) => {
            const foundItem = productSelected.find((item) =>item.id === id);
            if (foundItem === undefined) {
                orderedItems.data.Count =  1;
                setProductSelected([...productSelected, {...orderedItems}]);
                setCounter(orderedItems.data.Count);
            } else {
                let addToCount = productSelected[0];
                addToCount.data.Count = addToCount.data.Count + 1;
                setProductSelected([...productSelected]);
                setCounter(addToCount.data.Count);
            }
        })
        .catch((err) => {console.log(err.message)});
    }
    const subtracProductQty = (id) => {
        getItemsById(id).then((orderedItems) => {
            const foundItem = productSelected.find((item) =>item.id === id);
            if (foundItem === undefined) {
                orderedItems.data.Count =  0;
                setProductSelected([...productSelected, {...orderedItems}]);
                setCounter(orderedItems.data.Count);
            } else {
                let addToCount = productSelected[0];
                addToCount.data.Count = addToCount.data.Count - 1;
                if (addToCount.data.Count < 0) addToCount.data.Count = 0;
                setProductSelected([...productSelected]);
                setCounter(addToCount.data.Count);
            }
        })
        .catch((err) => {console.log(err.message)});
    }
    return(
        <li className='bg-white shadow-md rounded-2xl m-3'>
            <h4>{props.item.data.Name}</h4>
            <img src={props.item.data.url} alt={props.item.data.Name} />
            <p>Price: {props.item.data.Price}</p>
            <div>
                <button onClick={() =>subtracProductQty(props.item.id)}>-</button>
                <p>{counter}</p>
                <button onClick={() =>addProductQty(props.item.id)}>+</button>
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
                {items.map(item => <ProductItem key={item.id} item={item} />)}
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



export { WaiterView, Products, Order};