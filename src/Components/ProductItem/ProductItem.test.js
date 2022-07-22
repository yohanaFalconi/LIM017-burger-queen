import ProductItem from './ProductItem'
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";



/*test('render menu items', () => {
    const props = {
        id: 1,
        data : {
            count: 0,
            menu: 'Regular',
            name: 'French Fires',
            price: 5,
            type: 'side',
            url: 'https://pngimg.com/uploads/fries/fries_PNG70.png'
        }
    }
    render(
        <BrowserRouter>
            <ProductItem props={props} />
        </BrowserRouter>
    )
    screen.getByText(`${props.data.menu}`)

})*/