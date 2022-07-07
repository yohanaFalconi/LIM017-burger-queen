import { useState } from 'react';
import OrderInvoice from '../OrderInvoice/OrderInvoice';
import Products from '../Products/Products';
import { WaiterView } from '../WaiterView/WaiterView';
import './PlaceOrders.css';

export default function PlaceOrders() {
    const [ selected, setSelected ] = useState([]);

    return (
        <div className='bg-[#FAFAFA] h-screen'>
            <WaiterView />
            <div className='container mt-[13vh]'>
                <main>
                    <Products
                    selected={selected} 
                    setSelected={setSelected}
                    />
                </main>
                <aside>
                    <OrderInvoice 
                    selected={selected} 
                    setSelected={setSelected}
                    />
                </aside>
            </div>
            
        </div>
    );
}