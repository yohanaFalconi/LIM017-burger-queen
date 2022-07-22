import { menuCollectionRef, getDocs} from '../../lib/firebase-utils';
import { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';

export default function Products(props) {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    useEffect(() => {
        getMenuItems()
    }, [loading])

    function getMenuItems() {
        getDocs(menuCollectionRef)
        .then(response => {
            const menuItems = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            setItems(menuItems);
            setLoading(false);
        }).catch(error => console.log(error))
    }

    if (loading) {
        return <div className='font-poppins font-light ml-6'>Loading menu...</div>;
    }
    return (
        <div className='menu grid grid-cols-4 gap-5 m-5'>
            <ul className='contents'>
                {items.map(item => 
                    <ProductItem
                        key={item.id}
                        item={item}
                        selected={props.selected} 
                        setSelected={props.setSelected}
                    /> 
                )}
            </ul>
        </div>
    );
}
