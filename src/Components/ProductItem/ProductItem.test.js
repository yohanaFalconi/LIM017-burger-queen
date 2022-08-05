import ProductItem from './ProductItem'
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";



test('render menu items', () => {
    const props = {
        id: 1,
        item: {
        data : {
            count: 0,
            menu: 'Regular',
            Name: 'French Fries',
            Price: 5,
            Type: 'side',
            url: 'https://pngimg.com/uploads/fries/fries_PNG70.png'
        }
       }
       
    }
    render(
        <BrowserRouter>
            <ProductItem props={props} />
        </BrowserRouter>
    )
   screen.getByText(`${props.item.data.Name}`)

})