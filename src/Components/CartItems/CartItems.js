import React from 'react';
import Icon from "../../IcoMoon/Icon";

function CartItems (props) {
    const selected = props.selected;
    const setSelected = props.setSelected;
    
    // esta función debe de estar en waiterView  
    const deleteProduct = (props) => {
        //selected trae un objeto completo con cada item 

        //PASOS:
        // capturar el id al que le damos click-> props.id
        //buscar que el index 0,1,2 exacto del item al que le damos click en selected
        const index = selected.findIndex((obj) => obj.id === props.id);    

        /* El método splice() cambia el contenido de un array eliminando elementos
        existentes y/o agregando nuevos elementos. */
        selected.splice(index,1); // con index le decimos la posisición a eliminar y con 1 que solo elimine un elemento
        setSelected([...selected])
        props.setCounter(0)        
    };


    const array = selected.map(item => {
        return ( 
            <React.Fragment>
                <div className=" text-base m-2.5 p-1.5 bg-white shadow-md font-light rounded-xl">
                    <div className="flex justify-around">
                        <p className="grow-0 px-1.5 py-1 ">({item.data.Count})</p>
                        <p className="grow px-1.5 py-1">{item.data.Name}</p>
                        <button onClick={()=>deleteProduct(item)} className="grow-0">
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

export default CartItems;