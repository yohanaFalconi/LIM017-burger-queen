import React from 'react';

export default function OrderedItems ({item, index}) {
    //console.log('key', index)
    return (
        <React.Fragment key={index}>
            <div className="flex justify-around ">
                <p className="grow-0 px-1.5 py-1">({item.data.Count})</p>
                <p className="grow px-1.5 py-1">{item.data.Name}</p>
            </div> 
        </React.Fragment>
    )

}