import React from 'react';

function CompletedOrders(props) {
    return ( 
        <React.Fragment>
            <p>Order #{props.item.data.orderNumber}</p>
            <p>{props.item.data.initTime}</p>
            <p>{props.item.data.completedTime}</p>
        </React.Fragment>

    )
}

export default CompletedOrders;