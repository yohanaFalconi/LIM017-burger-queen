import { useState, useEffect } from 'react';
import OrderInvoice from '../OrderInvoice/OrderInvoice';
import Products from '../Products/Products';
import { WaiterNav } from '../WaiterNav/WaiterNav';
import './PlaceOrders.css';




export default function PlaceOrders() {
    const [ selected, setSelected ] = useState([]);
    const [ counter, setCounter] = useState(0);
    const [ updateTotal, setUpdateTotal] = useState(0);
    
    useEffect(() => {
        const result = selected.reduce((acum , ele) => {
            return acum + ele.data.Total;
        }, 0)
        setUpdateTotal(result)
    },[selected]);
    
    /*useEffect(() => {
        const result = selected.map((items) => {
        
            const cant = selected.find((el) => el.id === items.id)
            //console.log('cant',cant)
            if(cant !== undefined) {
                //console.log('cant',cant.data.Count)
                return cant.data.Count
            }
            return setCounter(cant)
        }) 
        
        console.log('result', result)
        setCounter(result)
    },[selected]);*/
    //props.setCounter(props.item.data.Count)
    //console.log("selected", selected.data)


    return (
        <div className='bg-[#FAFAFA] h-screen'>
            <WaiterNav />
            <div className='container mt-[13vh]'>
                <main>
                    <Products
                    selected={selected} 
                    setSelected={setSelected}

                    counter={counter}
                    setCounter={setCounter}
                    />
                </main>
                <aside>
                    <OrderInvoice 
                    selected={selected} 
                    setSelected={setSelected}

                    updateTotal={updateTotal}
                    setUpdateTotal={setUpdateTotal}

                    />
                </aside>
            </div>
            
        </div>
    );
}

