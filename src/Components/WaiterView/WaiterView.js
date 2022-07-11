import './WaiterView.css';
import bqlogo from '../../assets/bqlogo.png';
import { getItemsById } from '../../firebase-utils';
import { useState, useEffect } from 'react';
import OrderInvoice from '../OrderInvoice/OrderInvoice';
import Products from '../Products/Products'
import CartItems from '../CartItems/CartItems';


const addProductQty = (props, id) => {
    const selected = props.selected;
    const found = selected.some((product) => product.id === id);

    if (!found) {
        props.item.data.Count = 1;
        props.item.data.Total = props.item.data.Price;
        props.setSelected([...selected, props.item]);
    } else {
        props.item.data.Count = props.item.data.Count + 1;
        props.item.data.Total = props.item.data.Count * props.item.data.Price;        
        props.setSelected([...selected]);


    }    
}

const subtracProductQty = (props, id) => {
    const selected = props.selected;

    // reduce solo funciona si el array de selected está lleno >0, como ya le dieron click a + entonces contiene algo
    // 'acum' acumula todo en un ARRAY VACÍO 
    //"element" es el currentValue xq captura el actual producto al cuál le damos click 
    const nuevoProduct = selected.reduce((acum, element) => {
        // validamos los id al que le damos click (esto hace lo mismo que found)
        // Si los id´s son iguales que reste -1
        if (element.id === id) {
            element.data.Count = element.data.Count - 1;
            props.item.data.Total = props.item.data.Count * props.item.data.Price; // esto es para la función total
        }
        //Aún el acumulador está vacío, por eso le diremos que si contiene algún elemento (osea, >0) que lo acumule
        // push() agregará los "elements" al ARRAY VACÍO que tenemos (osea, acum)
        if (element.data.Count > 0) {
            acum.push(element)
        };
        // filtrar no funciona
        //const filtered = acum.filter((product) => product.data.Count > 0);
        //return filtered;
        return acum;
    }, []);
    props.setSelected(nuevoProduct)
}



function WaiterView() {
    const [selected, setSelected] = useState([]);
    const [counter, setCounter] = useState(0);
    const [total, setTotal] = useState(0);
    
    // estoy aun trabajando en la suma total
    /*useEffect(() => updateTotalProduct(), []);
    const updateTotalProduct = () => {

        const c = [1,2,3,4,5,6,7]
        const a = c.reduce((acum, ele) => {
            //console.log('ele', ele.data.Total)
            //const b =  ele.data.Total;
            return acum + ele;
        })
        console.log('array',a)
        setTotal(a)


    };*/




    return (
        <div className='bg-[#FAFAFA] WaiterView'>
            <main className='main'>
                <img src={bqlogo} alt='Burger Queen' className='h-24 ml-4 mt-3' />
                <Products
                    selected={selected}
                    setSelected={setSelected}
                    counter={counter}
                    setCounter={setCounter}
                />
            </main>
            <aside className='aside'>
                <OrderInvoice
                    selected={selected}
                    setSelected={setSelected}
                    counter={counter}
                    setCounter={setCounter}

                    total={total}
                />
            </aside>
        </div>
    );
}

export { WaiterView, addProductQty, subtracProductQty};