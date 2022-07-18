// import {orderDataList} from '../../lib/firebase-utils'
// import { useEffect, useState } from 'react';
import React from 'react';
import  OrderedItems from '../OrderedItems/OrderedItems'
export default function PendingOrders (props) {

    return (
       <React.Fragment key={props.item.id}>
            <div className="bg-[#FFBF69] shadow-md rounded-2xl font-poppins font-light h-[100%]">
                <p className=" p-2 font-normal text-center">Order #{props.item.data.orderNumber}</p>
                <hr></hr>
                <p className="box-white">Table: {props.item.data.table}</p> 
                <p className="box-white">Waiter: {props.item.data.worker} </p>
                <p className="box-white">Init order: {props.item.data.initTime}</p>
                <div className="box-white">{ props.item.data.order.map((item,index) => {
                        return (<OrderedItems item={item} index={index} />)
                    })}
                </div>
                <div>
                    <button className='font-medium bg-[#1B1A1A] hover:bg-[#FE9C08] text-white shadow-md rounded-2xl px-[6%] py-[1%] w-[20vw]'>
                        Mark as ready
                    </button>
                </div>
            </div>
       </React.Fragment> 
    )
}