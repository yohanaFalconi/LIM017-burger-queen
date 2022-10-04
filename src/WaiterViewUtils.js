import { sendOrderInFirebase } from '../src/lib/firebase-utils';

export const addProduct = (props, burgerPrice) => {
    const selected = props.selected;
    const id = props.item.id;
    const found = selected.some((product) => product.id === id);
    if (!found) {
        props.setSelected([...selected, props.item]);
    } else {
        props.setSelected([...selected]);
    }
    props.item.data.Count = props.item.data.Count + 1;
    if (props.item.data.Type === 'Burger') {
        props.item.data.LocalTotal = props.item.data.Count * burgerPrice;
    } else {
        props.item.data.LocalTotal = props.item.data.Count * props.item.data.Price;
    }
}

export const subtractProduct = (props, burgerPrice) => {
    const selected = props.selected;
    const id = props.item.id;
    const nuevoProduct = selected.reduce((acum, element) => {
        if (element.id === id) {
            element.data.Count = element.data.Count - 1;
            if (props.item.data.Type === 'Burger') {
                props.item.data.LocalTotal = props.item.data.Count * burgerPrice;
            } else {
                props.item.data.LocalTotal = props.item.data.Count * props.item.data.Price;
            } // esto es para la función total
        }
        if (element.data.Count > 0) {
            acum.push(element)
        };
        return acum;
    }, []);
    props.setSelected(nuevoProduct)
}

export const deleteProduct = (item, selected, setSelected) => {
    const index = selected.findIndex((obj) => obj.id === item.id);    
    selected.splice(index,1); // con index le decimos la posisición a eliminar y con 1 que solo elimine un elemento
    setSelected([...selected]);
    item.data.Count = 0;
};

export const deleteAllProducts = (selected, setSelected, setTableNumber) => {
    selected.forEach(product => {
        product.data.Count = 0;
    });
    setSelected([]);
    setTableNumber(1);
}


const orderNumber = () => {
    const now = Date.now().toString()
    const orderNum = now.substring(6, 10);
    return orderNum;
}

export const sendOrderToFireBase = (selected, setSelected, tableNumber, username, total) => {

    console.log('envio')
    const newOrderFirebase = {
        orderNumber : orderNumber(),
        initTime : new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
        seconds : new Date()/ 1000, //  la marca de tiempo en segundos
        date: new Date().toLocaleString('es-PE'), // sin esto no puedo ordenar la data
        worker: username,
        table: tableNumber,
        total: total,
        state: 'pending',
        order: selected
    }
    console.log('order', newOrderFirebase )
    sendOrderInFirebase(newOrderFirebase);
    selected.forEach( item => item.data.Count = 0)
    setSelected([])
}


export const cancelBurger = (item, selected, setSelected) => {
    const id = item.id;
    const found = selected.some((product) => product.id === id);
    if (found) {
        deleteProduct(item, selected, setSelected);
    } else {
        return;
    }
}

export const handleExtras = (cheese, setCheese, egg, setEgg, double, setDouble, priceWithExtras, setPriceWithExtras, clicked) => {
    if (clicked === 'clickedCheese') {
        if (!cheese) {
            setCheese(true);
            setPriceWithExtras(priceWithExtras + 1);
        } else if (cheese) {
            setCheese(false);
            setPriceWithExtras(priceWithExtras - 1);
        }
    } else if (clicked === 'clickedEgg') {
        if (!egg) {
            setEgg(true);
            setPriceWithExtras(priceWithExtras + 1);
        } else if (egg) {
            setEgg(false);
            setPriceWithExtras(priceWithExtras - 1);
        }
    } else {
        if (!double) {
            setDouble(true);
            setPriceWithExtras(priceWithExtras + 3);
        } else if (double) {
            setDouble(false);
            setPriceWithExtras(priceWithExtras - 3);
        }
    }
}

export const saveBurger = (props, cheese, egg, double) => {
    console.log('before saving', props.item.data);
    cheese ? props.item.data.Cheese = true : props.item.data.Cheese = false;
    if (egg) {
        props.item.data.Egg = true;
    }
    if (double) {
        props.item.data.Double = true;
    }
    console.log('after saving', props.item.data);
}
