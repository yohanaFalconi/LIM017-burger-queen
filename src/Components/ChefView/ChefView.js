import './ChefView.css'
import bqlogo from '../../assets/bqlogo.png';
import FullOrders from '../FullOrders/FullOrders';
import { useEffect, useState } from 'react';
import { sortPendingOrders, sortCompletedOrders } from '../../lib/firebase-utils';
import CompletedOrders from '../CompletedOrders/CompletedOrders';
import { useNavigate } from 'react-router-dom';
import { completeOrder } from '../../ChefViewUtils';

export default function ChefView(props) {
    const [orderList, setOrderList] = useState([]);
    const [completedList, setCompletedList] = useState([]);

    useEffect(() => {
        sortPendingOrders('pending', (querySnapshot) => {
            const items = querySnapshot.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            return setOrderList(items)
        })
    }, [])

    useEffect(() => {
        sortCompletedOrders('completed', (querySnapshot) => {
            const items = querySnapshot.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            return setCompletedList(items)
        })
    }, [])

    const nav = useNavigate();

    return (
        <div className='bg-[#FAFAFA] WaiterView'>
            <header className='grid grid-flow-col fixed top-0 w-[100vw] bg-[#FAFAFA]'>
                <img src={bqlogo} alt='Burger Queen' className='h-[13vh] p-2 ml-3 cursor-pointer' onClick={() => nav('/navigate')}/>
                <p className='font-poppins'>Logged in as: {props.username}</p>
                <button className='justify-self-end self-center h-fit w-fit font-medium bg-[#1B1A1A] hover:bg-[#FE9C08] text-white shadow-md rounded-2xl px-[6%] py-[1%] mr-8'>
                    Log out
                </button>
            </header>
            <div className='container-chefView mt-[13vh]'>
                <main className='main grid grid-cols-3 gap-5 m-5'>
                    {orderList.map(order => 
                        <FullOrders
                            order={order}
                            updateStatus={completeOrder}
                            class='pending'
                        />
                    )}
                </main>
                <aside className='aside bg-[#B5D6B2] rounded-l-2xl fixed right-0 w-[18vw] h-[80vh] overflow-auto'>
                    <h4 className='font-poppins'>Ready</h4>
                    <>{completedList.map(order =>
                        <CompletedOrders
                            key={order.id}
                            order={order}
                            completedList={completedList}
                            setCompletedList={setCompletedList}
                        />
                    )}</>
                </aside>    
            </div>
        </div>
    );
}
