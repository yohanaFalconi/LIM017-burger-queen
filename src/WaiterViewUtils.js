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

export const subtractProduct = (props) => {
    const selected = props.selected;
    const id = props.item.id;
    // reduce solo funciona si el array de selected está lleno >0, como ya le dieron click a + entonces contiene algo
    // 'acum' acumula todo en un ARRAY VACÍO 
    //"element" es el currentValue xq captura el actual producto al cuál le damos click 
    const nuevoProduct = selected.reduce((acum, element) => {
        // validamos los id al que le damos click (esto hace lo mismo que found)
        // Si los id´s son iguales que reste -1
        if (element.id === id) {
            element.data.Count = element.data.Count - 1;
            props.item.data.LocalTotal = props.item.data.Count * props.item.data.Price; // esto es para la función total
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

export const deleteProduct = (item, selected, setSelected) => {
    //selected trae un objeto completo con cada item 

    //PASOS:
    // capturar el id al que le damos click-> props.id
    //buscar que el index 0,1,2 exacto del item al que le damos click en selected
    const index = selected.findIndex((obj) => obj.id === item.id);    

    /* El método splice() cambia el contenido de un array eliminando elementos
    existentes y/o agregando nuevos elementos. */
    selected.splice(index,1); // con index le decimos la posisición a eliminar y con 1 que solo elimine un elemento
    setSelected([...selected]);
    item.data.Count = 0;
};

export const deleteAllProducts = (selected, setSelected) => {
    selected.forEach(product => {
        product.data.Count = 0;
    });
    setSelected([]);
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

// messages for tomorrow Megan
// go to firestore and create a new property (CustomPrice)
    // that's how you can reset the price, you just = it to Price
//cancel button should reset the price now too
