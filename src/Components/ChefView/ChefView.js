import './ChefView.css'
import bqlogo from '../../assets/bqlogo.png';
// import Icon from "../../IcoMoon/Icon";
import PendingOrders from '../PendingOrders/PendingOrders'
import { useEffect, useState } from 'react';
import {orderDataList} from '../../lib/firebase-utils';
import { Link } from 'react-router-dom';

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
            <header className='grid grid-flow-col fixed top-0 w-[100vw] bg-[#FAFAFA]'>
                <Link to='/navigate'>
                    <img src={bqlogo} alt='Burger Queen' className='h-[13vh] p-2 ml-3' />
                </Link>
                <button className='justify-self-end self-center h-fit w-fit font-medium bg-[#1B1A1A] hover:bg-[#FE9C08] text-white shadow-md rounded-2xl px-[6%] py-[1%] mr-8'>
                    Log out
                </button>
            </header>
            <div className='container-chefView mt-[13vh]'>
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