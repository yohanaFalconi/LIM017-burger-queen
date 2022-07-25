import { getTimeDiff } from '../../ChefViewUtils';

export default function CompletedOrders(props) {
    return (
        <>
            <div className="font-poppins m-2">
                <p className='font-medium'>Order #{props.order.data.orderNumber}</p>
                <p>Completed in: {getTimeDiff(props.order.data.seconds, props.order.data.completedSeconds)} min</p>
            </div>
            <hr></hr>
        </>
    )
}
