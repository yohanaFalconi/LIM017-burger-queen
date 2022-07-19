import React from 'react';
import { sortCompleted } from '../../ChefViewUtils';

function CompletedOrders(props) {

    return ( 
        <React.Fragment>
            <p>Order #{props.item.data.orderNumber}</p>
            <p>Completed in: {sortCompleted(props.item.data.seconds, props.item.data.completedSeconds)} min</p>
        </React.Fragment>

    )
}

export default CompletedOrders;