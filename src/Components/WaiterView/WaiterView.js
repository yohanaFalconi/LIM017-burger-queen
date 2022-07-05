import './WaiterView.css';
import bqlogo from '../../assets/bqlogo.png';
import Icon from "../../IcoMoon/Icon";
import { menuCollectionRef, getItemsById } from '../../firebase-utils';
import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { OrderInvoice } from './OrderInvoice'

const addProductQty = (props,id) => {
    console.log('add props', props)
    console.log(props,id);
    getItemsById(id).then((orderedItems) => {
        console.log(orderedItems);

    })
    .catch((err) => {console.log(err.message)});
}
const subtracProductQty = (props,id) => {
    console.log('props', props)
    getItemsById(id).then((orderedItems) => {
        console.log(orderedItems);


    })
    .catch((err) => {console.log(err.message)});
}

function ChangeProductQty (props) {

    return (
        <>
            <ProductItem counter ={props.counter++} addProductQty={[props,props.item.id]} subtracProductQty={[props,props.item.id]} />
        </>
    );
}


function ProductItem(props) {

    return(
        <li className='bg-white shadow-md rounded-2xl text-center font-poppins font-light h-[95%]'>
            <img src={props.item.data.url} alt={props.item.data.Name} className='h-1/2 m-3 max-w-[80%] inline-grid' />
            <h4>{props.item.data.Name}</h4>
            <p>${props.item.data.Price}</p>
            <div className='flex justify-center my-[10px]'>
                <button onClick={()=>subtracProductQty(props,props.item.id)} className='bg-[#B5D6B2] rounded-sm'>
                    <Icon color="#1B1A1A" size={8} icon="minus" className='mx-[6px]' />
                </button>
                <p className='mx-[8px]'>{props.counter}</p>
                <button onClick={()=>addProductQty(props,props.item.id)} className='bg-[#B5D6B2] rounded-sm'>
                    <Icon color="#1B1A1A" size={8} icon="plus" className='mx-[6px]' />
                </button>
            </div>
        </li>
    )
}


function Products(props) {
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
        return <div className='font-poppins font-light ml-6'>Loading menu...</div>;
    }
    return (
        <div className='menu grid grid-cols-4 gap-5 m-5'>
            <ul className='contents'>
                {items.map(item => <ProductItem key={item.id} item={item} props={props}/>)}
            </ul>
        </div>
    );
}

function WaiterView() {
    const [ productSelected, setProductSelected ] = useState([]);
    const [ counter, setCounter] = useState(0);
    // console.log('consoleando en id', id)
    return (
        <div className='bg-[#FAFAFA] WaiterView'>
            <main className='main'>
                <img src={bqlogo} alt='Burger Queen' className='h-24 ml-4 mt-3' />
                <Products
                productSelected={productSelected} 
                setProductSelected={setProductSelected}
                counter={counter}
                setCounter={setCounter} 
                />
            </main>
            <aside className='aside'>
                <OrderInvoice 
                productSelected={productSelected} 
                setProductSelected={setProductSelected}
                counter={counter}
                setCounter={setCounter}
                />
            </aside>
        </div>
    );
}



export { WaiterView, Products, ChangeProductQty, ProductItem};