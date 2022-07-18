import { sendOrderInFirebase } from '../src/lib/firebase-utils'

export const addProduct = (props) => {
    const selected = props.selected;
    const id = props.item.id;
    const found = selected.some((product) => product.id === id);
    if (!found) {
        props.setSelected([...selected, props.item]);
    } else {
        props.setSelected([...selected]);
    }
    props.item.data.Count = props.item.data.Count + 1;
    props.item.data.LocalTotal = props.item.data.Count * props.item.data.Price;
}

export const subtractProduct = (props) => {
    const selected = props.selected;
    const id = props.item.id;
    const nuevoProduct = selected.reduce((acum, element) => {
        if (element.id === id) {
            element.data.Count = element.data.Count - 1;
            props.item.data.Total = props.item.data.Count * props.item.data.Price; // esto es para la función total
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
    /*const date = new Date();
    const time = date.getTime().substring(6, 12);*/
    return orderNum;
}

export const sendOrderToFireBase = (selected, setSelected, tableNumber, username, total) => {
    console.log('envio')
    const newOrderFirebase = {
        orderNumber : orderNumber(),
        initTime : new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
        date: new Date().toLocaleString('es-PE'),
        worker: username,
        table: tableNumber,
        total: total,
        state: 'pending',
        order: selected
    }
    console.log('order', newOrderFirebase )
    sendOrderInFirebase(newOrderFirebase);
    setSelected([])
}
