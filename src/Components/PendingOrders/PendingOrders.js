import {orderCompleted}  from '../../ChefViewUtils'
import React from 'react';
import OrderedItems from '../OrderedItems/OrderedItems';

export default function PendingOrders (props) {
    return (
       <React.Fragment key={props.order.id}>
            <div className="bg-[#FFBF69] shadow-md rounded-2xl font-poppins font-light h-max">
                <p className="p-2 font-normal text-center">Order #{props.order.data.orderNumber}</p>
                <hr></hr>
                <p className="box-white">Table: {props.order.data.table}</p> 
                <p className="box-white">Waiter: {props.order.data.worker} </p>
                <p className="box-white">Sent to kitchen at: {props.order.data.initTime}</p>
                <div className="box-white h-[30vh] overflow-auto">{ props.order.data.order.map((item,index) => {
                        return (<OrderedItems item={item} key={index} />)
                    })}
                </div>
                <div className='flex justify-center'>
                    <button 
                        onClick={() => orderCompleted(props.order.id, props.order.data)} 
                        className='font-medium bg-[#1B1A1A] hover:bg-[#FE9C08] text-white shadow-md rounded-2xl mb-[15px] px-[6%] py-[1%] w-[20vw]'>
                        Mark as ready
                    </button>    
                </div>
            </div>
       </React.Fragment> 
    )
}