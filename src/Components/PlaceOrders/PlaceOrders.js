import { useState } from 'react';
import OrderInvoice from '../OrderInvoice/OrderInvoice';
import Products from '../Products/Products';
import { WaiterNav } from '../WaiterNav/WaiterNav';
import './PlaceOrders.css';

export default function PlaceOrders() {
    const [ selected, setSelected ] = useState([]);
    const [total, setTotal] = useState(0);

    // estoy aun trabajando en la suma total
    /*useEffect(() => updateTotalProduct(), []);
    const updateTotalProduct = () => {

        const c = [1,2,3,4,5,6,7]
        const a = c.reduce((acum, ele) => {
            //console.log('ele', ele.data.Total)
            //const b =  ele.data.Total;
            return acum + ele;
        })
        console.log('array',a)
        setTotal(a)


    };*/

    return (
        <div className='bg-[#FAFAFA] h-screen'>
            <WaiterNav />
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

                    total={total}
                    />
                </aside>
            </div>
            
        </div>
    );
}