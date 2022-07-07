import './WaiterView.css';
import bqlogo from '../../assets/bqlogo.png';
import { getItemsById } from '../../firebase-utils';
import { Link } from 'react-router-dom';

const addProductQty = (props,id) => {
    console.log('props',props,'id',id);
    getItemsById(id).then((orderedItems) => {
        console.log('orderedItems',orderedItems);
        const foundItem = props.props.selected.find((item) =>item.id === id);
        console.log('foundItem',foundItem);
        if (foundItem === undefined) {
            orderedItems.data.Count =0;
            props.props.setSelected([...props.props.selected, {...orderedItems}]);
            props.props.setCounter(orderedItems.data.Count);
            console.log('foundItem again',foundItem);
        } else {
            let addToCount = props.selected[0];
            addToCount.data.Count = addToCount.data.Count + 1;
            props.props.setSelected([...props.props.selected]);
            props.props.setCounter(addToCount.data.Count);
        }
    })
    .catch(err => console.log(err.message));
}
const subtracProductQty = (props,id) => {
    getItemsById(id).then((orderedItems) => {
        const foundItem = props.productSelected.find((item) =>item.id === id);
        if (foundItem === undefined) {
            orderedItems.data.Count =  0;
            props.props.setSelected([...props.props.productSelected, {...orderedItems}]);
            props.setCounter(orderedItems.data.Count);
        } else {
            let addToCount = props.props.productSelected[0];
            addToCount.data.Count --;
            if (addToCount.data.Count < 0) addToCount.data.Count = 0;
            props.props.setSelected([...props.props.productSelected]);
            props.props.setCounter(addToCount.data.Count);
        }
    })
    .catch(err => console.log(err.message));
}

function WaiterView() {
    return (
        <header className='grid grid-flow-col fixed top-0 w-[100vw] bg-[#FAFAFA]'>
            <Link to='/navigate'>
                <img src={bqlogo} alt='Burger Queen' className='h-[13vh] p-2 ml-3' />
            </Link>
            <nav className='self-center mr-4 flex justify-evenly'>
                <button className='font-medium bg-[#FFBF69] text-black shadow-md rounded-2xl px-[6%] py-[1%]'>
                    <Link to='/waiter-view/place-orders'>
                        Place orders
                    </Link>
                </button>
                <button className='font-medium bg-[#FFBF69] text-black shadow-md rounded-2xl px-[6%] py-[1%] mx-3'>
                    <Link to='/waiter-view/ready-to-serve'>
                        See ready to serve
                    </Link>
                </button>
                <button className='font-medium bg-[#1B1A1A] text-white shadow-md rounded-2xl px-[6%] py-[1%]'>
                    Log out
                </button>
            </nav>
        </header>
    );
}

export { WaiterView, addProductQty, subtracProductQty };