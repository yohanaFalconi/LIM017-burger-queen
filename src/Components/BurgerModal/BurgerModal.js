import './BurgerModal.css';
import Icon from "../../IcoMoon/Icon";
import { addProduct, subtractProduct } from '../../WaiterViewUtils.js';
import { deleteProduct } from '../../WaiterViewUtils';

export default function BurgerModal(props) {
    const handleChange = (extra, name) => {
        console.log('extra', extra)
        props.item.data[name] = extra;
        console.log(props.item)
    }

    if (props.showModal === false) {
        return null;
    }
    return(
        <div className='overlay'>
            <div className="modal bg-white grid grid-cols-2 shadow-md rounded-2xl text-center font-poppins font-light">
                <div>
                    <img src={props.item.data.url} alt={props.item.data.Name} className='h-[200px] mt-3 inline-grid' />
                    <h4 className='font-medium text-lg'>{props.item.data.Name}</h4>
                    <p>Cheese: {props.item.data.Cheese}</p>
                    <p>Egg: {props.item.data.Egg}</p>
                    <div className='flex justify-center my-[10px]'>
                        <button onClick={()=>subtractProduct(props)} className='bg-[#B5D6B2] rounded-sm'>
                            <Icon color="#1B1A1A" size={8} icon="minus" className='mx-[6px]' />
                        </button>
                        <p className='mx-[8px]'>{props.item.data.Count}</p>
                        <button onClick={()=>addProduct(props)} className='bg-[#B5D6B2] rounded-sm'>
                            <Icon color="#1B1A1A" size={8} icon="plus" className='mx-[6px]' />
                        </button>
                    </div>
                </div>
                <div>
                    <h4>Add extras</h4>
                    <p>$1 Add cheese</p>
                    <input type='checkbox' onChange={(e) => handleChange(e.currentTarget.checked, 'Cheese')}></input>
                    <p>$1 Add egg</p>
                    <input type='checkbox' onChange={(e) => handleChange(e.currentTarget.checked, 'Egg')}></input>
                    <hr/>
                    <h4>Size up: make a double</h4>
                    <div>
                        <button onClick={() => {
                            deleteProduct(props.item, props.selected, props.setSelected);
                            props.setShowModal(false);
                        }} className='font-medium bg-[#FFBF69] shadow-md rounded-2xl px-[6%] py-[1%]'>Cancel</button>
                        <button onClick={() => props.setShowModal(false)} className='font-medium bg-[#1B1A1A] text-white shadow-md rounded-2xl px-[6%] py-[1%]'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}