import './WaiterView.css';
import bqlogo from '../../assets/bqlogo.png';
import { getItemsById } from '../../firebase-utils';
import { useState } from 'react';
import  OrderInvoice from '../OrderInvoice/OrderInvoice';
import Products from '../Products/Products'

const addProductQty = (props,id) => {
    const selected = props.selected;
    const found = selected.some((product) => product.id === id);
    console.log('selected found', found);
    if (!found) {
        props.item.data.Count = 1;
        props.setSelected([...selected, props.item]);
        //console.log('selected vacio', props.selected);
    } else {
        props.item.data.Count = props.item.data.Count +1 ;
        props.setSelected([...selected]);
        console.log('selected', props.selected);
    } 

}
const subtracProductQty = (props,id) => {
    const selected = props.selected;
    if (selected.length === 0) {
        return 
        // console.log('selected vacio', props.selected);
    } 
    selected.forEach( product => {
        if (product.id === id) {
            if (props.item.data.Count < 0) props.item.data.Count = 0;
            props.item.data.Count = props.item.data.Count -1 ;
            props.setSelected([...selected]);
            //console.log('selected', props.selected);
        }
    });
}

function WaiterView() {
    const [ selected, setSelected ] = useState([]);

    return (
        <div className='bg-[#FAFAFA] WaiterView'>
            <main className='main'>
                <img src={bqlogo} alt='Burger Queen' className='h-24 ml-4 mt-3' />
                <Products
                selected={selected} 
                setSelected={setSelected}
                />
            </main>
            <aside className='aside'>
                <OrderInvoice 
                selected={selected} 
                setSelected={setSelected}
                />
            </aside> 
        </div>
    );
}

export { WaiterView, addProductQty, subtracProductQty };