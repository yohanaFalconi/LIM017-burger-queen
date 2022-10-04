import WaiterNav from "../WaiterNav/WaiterNav";
import { useEffect, useState } from 'react';
import FullOrders from "../FullOrders/FullOrders";
import { serveOrder } from '../../ChefViewUtils';
import { sortCompletedOrders } from '../../lib/firebase-utils';

export default function ReadyToServe(props) {
    const [completedList, setCompletedList] = useState([]);

    useEffect(() => {
        sortCompletedOrders('completed', (querySnapshot) => {
            const items = querySnapshot.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            return setCompletedList(items)
        })
    }, [])

    return(
        <div className='bg-[#FAFAFA] h-screen'>
            <WaiterNav
                setUsername={props.setUsername}
                username={props.username}
            />
            <div className='mt-[13vh]'>
                <main className='main grid grid-cols-4 gap-5 m-5'>
                    {completedList.map(order => 
                        <FullOrders
                            order={order}
                            updateStatus={serveOrder}
                            class='completed'
                        />
                    )}
                </main>
            </div>
        </div>
    )
}