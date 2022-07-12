import { useState, useEffect } from 'react';
import OrderInvoice from '../OrderInvoice/OrderInvoice';
import Products from '../Products/Products';
import WaiterNav from '../WaiterNav/WaiterNav';
import './PlaceOrders.css';

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

const subtractProductQty = (props, id) => {
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

function PlaceOrders() {
    const [ selected, setSelected ] = useState([]);
    const [ counter, setCounter] = useState(0);
    const [ updateTotal, setUpdateTotal] = useState(0);
    
    useEffect(() => {
        const result = selected.reduce((acum , ele) => {
            return acum + ele.data.Total;
        }, 0)
        setUpdateTotal(result)
    },[selected]);
    
    /*useEffect(() => {
        const result = selected.map((items) => {
        
            const cant = selected.find((el) => el.id === items.id)
            //console.log('cant',cant)
            if(cant !== undefined) {
                //console.log('cant',cant.data.Count)
                return cant.data.Count
            }
            return setCounter(cant)
        }) 
        
        console.log('result', result)
        setCounter(result)
    },[selected]);*/
    //props.setCounter(props.item.data.Count)
    //console.log("selected", selected.data)


    return (
        <div className='bg-[#FAFAFA] h-screen'>
            <WaiterNav />
            <div className='container mt-[13vh]'>
                <main>
                    <Products
                    selected={selected} 
                    setSelected={setSelected}

                    counter={counter}
                    setCounter={setCounter}
                    />
                </main>
                <aside>
                    <OrderInvoice 
                    selected={selected} 
                    setSelected={setSelected}

                    updateTotal={updateTotal}
                    setUpdateTotal={setUpdateTotal}

                    />
                </aside>
            </div>
            
        </div>
    );
}

export { addProductQty, subtractProductQty, PlaceOrders };