import React from 'react';

export default function OrderedItems ({item}) {
    return (
        <React.Fragment>
            <div className="flex justify-around ">
                <p className="grow-0 px-1.5 py-1">({item.data.Count})</p>
                <p className="grow px-1.5 py-1">{item.data.Name}</p>
            </div>
            <div className={item.data.Type === 'Burger' ? 'ml-[40px]' : 'hidden'}>
                <p>Size: {item.data.Size}</p>
                <p>Extras: {item.data.Cheese === true ? 'cheese' : ''}{item.data.Egg === true ? ' egg' : ''}{(item.data.Cheese === false && item.data.Egg === false) ? 'none' : ''}</p>
            </div>
        </React.Fragment>
    )
}