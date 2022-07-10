import './WaiterView.css';
import bqlogo from '../../assets/bqlogo.png';
// import { getItemsById } from '../../firebase-utils';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const addProductQty = (props,id) => {
    const selected = props.selected;
    if (selected.length === 0) {
        props.item.data.Count = 1;
        props.setSelected([...selected, props.item]);
        //console.log('selected vacio', props.selected);
    } 
    selected.forEach( product => {
        if (product.id === id) {
            props.item.data.Count = props.item.data.Count +1 ;
            props.setSelected([...selected]);
            console.log('selected', props.selected);
        }
    });
}
const subtracProductQty = (props,id) => {
    const selected = props.selected;
    if (selected.length === 0 && props.item.data.Count < 0 ) {
        props.item.data.Count = 0;
        props.setSelected([...selected, props.item]);
        // console.log('selected vacio', props.selected);
    } 
    selected.forEach( product => {
        if (product.id === id) {
            if (props.item.data.Count < 0) props.item.data.Count = 0;
            props.item.data.Count = props.item.data.Count -1 ;
            props.setSelected([...selected]);
            console.log('selected', props.selected);
        }
    });
}

function WaiterView() {
    
    const [placeOrdersState, setPlaceOrdersState] = useState('inactive');
    const [readyServeState, setReadyServeState] = useState('inactive');

    let location = useLocation().pathname;
    console.log(useLocation());

    useEffect(() => {
        console.log('location has been changed to:', location);
        switch (location) {
            case 'waiter-view/place-orders':
                console.log('help');
                setPlaceOrdersState('active');
                setReadyServeState('inactive');
                break;
            case 'waiter-view/ready-to-serve':
                console.log('ayuda');
                setPlaceOrdersState('inactive');
                setReadyServeState('active');
                break;
            default:
                console.log('something');
                break;
        }
        /* if (location === 'waiter-view/place-orders') {
            console.log('help');
            setPlaceOrdersState('active');
            setReadyServeState('inactive');
        } else if (location === 'waiter-view/ready-to-serve') {
            console.log('ayuda');
            setPlaceOrdersState('inactive');
            setReadyServeState('active');
        } else {
            console.log('something');
        } */
    }, [location])

    // cada botón va a tener su estado, que va a ser llamado en un data attribute
    // y estilado en el css
    // change the state on useEffect

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

export { WaiterView, addProductQty, subtracProductQty };