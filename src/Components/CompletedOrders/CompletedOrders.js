export default function CompletedOrders(props) {
    return ( 
        <div className="font-poppins">
            <p>Order #{props.order.data.orderNumber}</p>
            <p>Sent to kitchen at:</p>
            <p>{props.order.data.initTime}</p>
            {/* <p>Completed at: {props.order.data.completedTime}</p> */}
            <hr></hr>
        </ div>
    )
}
