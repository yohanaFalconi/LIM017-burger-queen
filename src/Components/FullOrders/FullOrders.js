import './FullOrders.css';
import React from 'react';
import OrderedItems from '../OrderedItems/OrderedItems';

export default function FullOrders (props) {
    return (
       <React.Fragment key={props.order.id}>
            <div className={props.class}>
                <p className="p-2 font-normal text-center">Order #{props.order.data.orderNumber}</p>
                <hr></hr>
                <p className="box-white">Table: {props.order.data.table}</p> 
                <p className="box-white">Waiter: {props.order.data.worker} </p>
                {props.class === 'pending' 
                    ? <p className="box-white">Sent to kitchen at: {props.order.data.initTime}</p>
                    : <p className="box-white">Exited kitchen at: {props.order.data.completedTime}</p>
                }
                <div className="box-white h-[30vh] overflow-auto">{ props.order.data.order.map((item,index) => {
                        return (<OrderedItems item={item} key={index} />)
                    })}
                </div>
                <div className='flex justify-center'>
                    <button 
                        onClick={() => props.updateStatus(props.order.id, props.order.data)} 
                        className='font-medium bg-[#1B1A1A] hover:bg-[#FE9C08] text-white shadow-md rounded-2xl mb-[15px] px-[6%] py-[1%] w-[20vw]'>
                        {props.class === 'pending' ? 'Mark as ready' : 'Mark as served'}
                    </button>    
                </div>
            </div>
       </React.Fragment> 
    )
}