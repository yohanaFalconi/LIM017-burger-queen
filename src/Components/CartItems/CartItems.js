import React from 'react';
import Icon from "../../IcoMoon/Icon";
import { deleteProduct } from '../../WaiterViewUtils';

export default function CartItems (props) {
    const selected = props.selected;
    const setSelected = props.setSelected;

    const array = selected.map(item => {
        return (
            <React.Fragment>
                <div className=" text-base m-2.5 p-1.5 bg-white shadow-md font-light rounded-xl">
                    <div className="flex justify-around">
                        <p className="grow-0 px-1.5 py-1 ">({item.data.Count})</p>
                        <p className="grow px-1.5 py-1">{item.data.Name}</p>
                        <button onClick={()=>deleteProduct(item, selected, setSelected)} className="grow-0">
                            <Icon color="#1B1A1A" size={22} icon="bin" className='mx-[1vw]' />
                        </button>
                    </div>
                    <p className=" px-2.5">${item.data.Price}</p>
                </div>
            </React.Fragment>
        )
    })
    return array;
}
