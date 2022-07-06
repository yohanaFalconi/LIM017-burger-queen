import './WaiterView.css';
import bqlogo from '../../assets/bqlogo.png';
import { getItemsById } from '../../firebase-utils';
import { useState } from 'react';
import { OrderInvoice } from '../OrderInvoice/OrderInvoice';
import Products from '../Products/Products'

const addProductQty = (props,id) => {
    console.log('props',props,'id',id);
    getItemsById(id).then((orderedItems) => {
        console.log('orderedItems',orderedItems);
        const foundItem = props.props.selected.find((item) =>item.id === id);
        console.log('foundItem',foundItem);
        if (foundItem === undefined) {
            orderedItems.data.Count =0;
            props.props.setSelected([...props.props.selected, {...orderedItems}]);
            props.props.setCounter(orderedItems.data.Count);
            console.log('foundItem again',foundItem);
        } else {
            let addToCount = props.selected[0];
            addToCount.data.Count = addToCount.data.Count + 1;
            props.props.setSelected([...props.props.selected]);
            props.props.setCounter(addToCount.data.Count);
        }
    })
    .catch(err => console.log(err.message));
}
const subtracProductQty = (props,id) => {
    getItemsById(id).then((orderedItems) => {
        const foundItem = props.productSelected.find((item) =>item.id === id);
        if (foundItem === undefined) {
            orderedItems.data.Count =  0;
            props.props.setSelected([...props.props.productSelected, {...orderedItems}]);
            props.setCounter(orderedItems.data.Count);
        } else {
            let addToCount = props.props.productSelected[0];
            addToCount.data.Count --;
            if (addToCount.data.Count < 0) addToCount.data.Count = 0;
            props.props.setSelected([...props.props.productSelected]);
            props.props.setCounter(addToCount.data.Count);
        }
    })
    .catch(err => console.log(err.message));
}

function WaiterView() {
    const [ selected, setSelected ] = useState([]);
    const [ counter, setCounter] = useState(0);
    console.log('counter from wv', counter)
    return (
        <div className='bg-[#FAFAFA] WaiterView'>
            <main className='main'>
                <img src={bqlogo} alt='Burger Queen' className='h-24 ml-4 mt-3' />
                <Products
                selected={selected} 
                setSelected={setSelected}
                counter={counter}
                setCounter={setCounter} 
                />
            </main>
            <aside className='aside'>
                <OrderInvoice 
                selected={selected} 
                setSelected={setSelected}
                counter={counter}
                setCounter={setCounter}
                />
            </aside>
        </div>
    );
}

export { WaiterView, addProductQty, subtracProductQty };