import './BurgerModal.css';
import { useState } from "react";
import Icon from "../../IcoMoon/Icon";
import { addProduct, cancelBurger, handleExtras, subtractProduct } from '../../WaiterViewUtils.js';

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
                <div>
                    <img src={props.item.data.url} alt={props.item.data.Name} className='h-[200px] mt-3 inline-grid' />
                    <h4 className='font-medium text-lg'>{props.item.data.Name} ${props.item.data.Price}</h4>
                    <p>Size: {double ? 'Double + $3' : props.item.data.Size}</p>
                    <p>{cheese ? '+ extra cheese $1' : ''}</p>
                    <p>{egg ? '+ extra egg $1' : ''}</p>
                    <p>{priceWithExtras}</p>
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
                <div>
                    <h4>Add extras</h4>
                    <p>$1 Add cheese</p>
                    <input type='checkbox' onChange={() => handleExtras(cheese, setCheese, egg, setEgg, double, setDouble, priceWithExtras, setPriceWithExtras, 'clickedCheese')}></input>
                    <p>$1 Add egg</p>
                    <input type='checkbox' onChange={() => handleExtras(cheese, setCheese, egg, setEgg, double, setDouble, priceWithExtras, setPriceWithExtras, 'clickedEgg')}></input>
                    <hr/>
                    <h4>Size up: make a double</h4>
                    <input type='checkbox' onChange={() => handleExtras(cheese, setCheese, egg, setEgg, double, setDouble, priceWithExtras, setPriceWithExtras, 'clickedDouble')}></input>
                    <div>
                        <button onClick={() => {
                            cancelBurger(props.item, props.selected, props.setSelected);
                            closeModal();
                        }} className='font-medium bg-[#FFBF69] shadow-md rounded-2xl px-[6%] py-[1%]'>Cancel</button>
                        <button onClick={() => closeModal()} className='font-medium bg-[#1B1A1A] text-white shadow-md rounded-2xl px-[6%] py-[1%]'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}