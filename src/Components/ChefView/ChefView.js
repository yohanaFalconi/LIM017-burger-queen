import './ChefView.css'
import bqlogo from '../../assets/bqlogo.png';
// import Icon from "../../IcoMoon/Icon";
import PendingOrders from '../PendingOrders/PendingOrders'
import { useEffect, useState } from 'react';
import {orderDataList} from '../../lib/firebase-utils'

function ChefView() {
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        orderDataList('pending', (querySnapshot) => {
            const items = querySnapshot.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            return setOrderList(items)
        })
    }, [])
    return (
        <div className='bg-[#FAFAFA] WaiterView'>
            <header>
            <img src={bqlogo} alt='Burger Queen' className='h-20 ml-4 mt-3' />
                <nav>
                    <button>Click me</button>
                </nav>
            </header>
            <div className='container-chefView'>
                <main className='main grid grid-cols-3 gap-5 m-5'>
                    {orderList.map(item => 
                        <PendingOrders
                         key={item.id}
                         item={item}
                         orderList={orderList}
                         setOrderList={setOrderList}
                        />
                 )}  
                </main>
                <aside className='aside bg-[#B5D6B2]'>
                    <p>Orders Ready</p>
                </aside>    
            </div>
        </div>
    );
}

export default ChefView;