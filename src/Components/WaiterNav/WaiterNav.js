import './WaiterNav.css';
import bqlogo from '../../assets/bqlogo.png';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'


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
    
function WaiterNav() {
    const [placeOrdersState, setPlaceOrdersState] = useState('inactive');
    const [readyServeState, setReadyServeState] = useState('inactive');

    let location = useLocation().pathname;

    useEffect(() => {
        switch (location) {
            case '/waiter-view/place-orders':
                setPlaceOrdersState('active');
                setReadyServeState('inactive');
                break;
            case '/waiter-view/':
                setPlaceOrdersState('active');
                setReadyServeState('inactive');
                break;
            case '/waiter-view/ready-to-serve':
                setPlaceOrdersState('inactive');
                setReadyServeState('active');
                break;
            default:
                break;
        }
    }, [location])

    return (
        <header className='grid grid-flow-col fixed top-0 w-[100vw] bg-[#FAFAFA]'>
            <Link to='/navigate'>
                <img src={bqlogo} alt='Burger Queen' className='h-[13vh] p-2 ml-3' />
            </Link>
            <nav className='self-center mr-4 flex justify-evenly'>
                <button className={placeOrdersState}>
                    <Link to='/waiter-view/place-orders'>
                        Place orders
                    </Link>
                </button>
                <button className={readyServeState}>
                    <Link to='/waiter-view/ready-to-serve'>
                        See ready to serve
                    </Link>
                </button>
                <button className='font-medium bg-[#1B1A1A] hover:bg-[#FE9C08] text-white shadow-md rounded-2xl px-[6%] py-[1%]'>
                    Log out
                </button>
            </nav>
        </header>
    );
};

export { WaiterNav, addProductQty, subtractProductQty};