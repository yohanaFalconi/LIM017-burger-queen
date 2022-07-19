import { getTimeDiff } from '../../ChefViewUtils';

export default function CompletedOrders(props) {
    return ( 
        <div className="font-poppins">
            <p>Order #{props.order.data.orderNumber}</p>
            <p>Completed in: {getTimeDiff(props.order.data.seconds, props.order.data.completedSeconds)} min</p>
            <hr></hr>
        </div>
    )
}
