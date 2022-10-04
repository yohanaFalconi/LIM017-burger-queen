import './BurgerModal.css';
import { useState } from "react";
import Icon from "../../IcoMoon/Icon";
import { addProduct, cancelBurger, handleExtras, saveBurger, subtractProduct } from '../../WaiterViewUtils.js';

export default function BurgerModal(props) {
    const [cheese, setCheese] = useState(false);
    const [egg, setEgg] = useState(false);
    const [double, setDouble] = useState(false);
    const [priceWithExtras, setPriceWithExtras] = useState(parseInt(props.item.data.Price));

    function closeModal() {
        props.setShowModal(false);
        setCheese(false);
        setDouble(false);
        setEgg(false);
        setPriceWithExtras(parseInt(props.item.data.Price));
    }

    if (props.showModal === false) {
        return null;
    }
    return(
        <div className='overlay'>
            <div className="modal bg-white grid grid-cols-2 shadow-md rounded-2xl text-center font-poppins font-light">
                <div className='my-[3vh]'>
                    <img src={props.item.data.url} alt={props.item.data.Name} className='h-[200px] inline-grid' />
                    <h4 className='font-medium text-xl'>{props.item.data.Name} ${props.item.data.Price}</h4>
                    <p>Size: {double ? 'Double + $3' : props.item.data.Size}</p>
                    <p>{cheese ? '+ extra cheese $1' : ''}</p>
                    <p>{egg ? '+ extra egg $1' : ''}</p>
                    <div className='bg-gray-200 font-medium shadow-md rounded-2xl w-[70%] my-[2vh] mx-[1vw] px-[6%] py-[1%] inline-grid grid-flow-col'>
                        <p>Price with extras:</p>
                        <p>${priceWithExtras}</p>
                    </div>
                    <div className='flex justify-center my-[10px]'>
                        <button onClick={()=>
                            subtractProduct(props, priceWithExtras)
                            } className='bg-[#B5D6B2] rounded-sm'>
                            <Icon color="#1B1A1A" size={8} icon="minus" className='mx-[6px]' />
                        </button>
                        <p className='mx-[8px]'>{props.item.data.Count}</p>
                        <button onClick={() =>
                            addProduct(props, priceWithExtras)
                            } className='bg-[#B5D6B2] rounded-sm'>
                            <Icon color="#1B1A1A" size={8} icon="plus" className='mx-[6px]' />
                        </button>
                    </div>
                </div>
                <div className='my-[4vh] mx-[1vw]'>
                    <h4 className='text-lg font-medium'>Add extras</h4>
                    <div className='bg-[#B5D6B2] shadow-md rounded-2xl w-[80%] my-[2vh] mx-[1vw] px-[6%] py-[1%] inline-grid grid-flow-col justify-between'>
                        <p>$1 Add cheese</p>
                        <input type='checkbox' onChange={() => handleExtras(cheese, setCheese, egg, setEgg, double, setDouble, priceWithExtras, setPriceWithExtras, 'clickedCheese')}></input>
                    </div>
                    <div className='bg-[#B5D6B2] shadow-md rounded-2xl w-[80%] my-[2vh] mx-[1vw] px-[6%] py-[1%] inline-grid grid-flow-col justify-between'>
                        <p>$1 Add egg</p>
                        <input type='checkbox' onChange={() => handleExtras(cheese, setCheese, egg, setEgg, double, setDouble, priceWithExtras, setPriceWithExtras, 'clickedEgg')}></input>
                    </div>
                    <hr className='my-[2vh]'/>
                    <h4 className='text-lg font-medium'>Size up</h4>
                    <div className='bg-[#B5D6B2] shadow-md rounded-2xl w-[80%] my-[2vh] mx-[1vw] px-[6%] py-[1%] inline-grid grid-flow-col justify-between'>
                        <p>$3 Make a double</p>
                        <input type='checkbox' onChange={() => handleExtras(cheese, setCheese, egg, setEgg, double, setDouble, priceWithExtras, setPriceWithExtras, 'clickedDouble')}></input>
                    </div>
                    <div className='mt-[11vh] grid grid-flow-col justify-evenly'>
                        <button onClick={() => {
                            cancelBurger(props.item, props.selected, props.setSelected);
                            closeModal();
                        }} className='font-medium bg-[#FFBF69] w-[100px] shadow-md rounded-2xl px-[6%] py-[1%]'>Cancel</button>
                        <button onClick={() => {
                            saveBurger(props, cheese, egg, double);
                            closeModal()
                        }} className='font-medium bg-[#1B1A1A] w-[80px] text-white shadow-md rounded-2xl px-[6%] py-[1%]'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}