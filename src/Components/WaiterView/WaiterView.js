import './WaiterView.css';
import bqlogo from '../../assets/bqlogo.png';
import Icon from "../../IconMoon/Icon";


const waiter = 'Megan';
function WaiterView() {
    return (
        <div>
            <header>
                <img src={bqlogo} alt='Burger Queen'/>
                <main>
                    <Products />
                </main>
                <aside>
                    <Order />
                </aside>
            </header>
        </div>
    );
}


function Products() {
    return(
        <div>
            <p></p>
            <p></p>

        </div>
    );
}

function Order() {
    return(
        <div>
            <div>Waiter: {waiter}</div>
            <label>
                Table:
                <select name="select">
                    <option value="table1">1</option>
                    <option value="table2">2</option>
                    <option value="table3">3</option>
                    <option value="table4">4</option>
                    <option value="table5">5</option>
                </select>
            </label>
            <hr />
            <div>Ordered items go here</div>
            <Icon color="blue" size={20} icon="plus" />
            <hr />
            <div>Total: $0</div>
            <div>
                <img src='#' alt='delete'></img>
                <button>Send order</button>
            </div>
        </div>
    );
}

export {WaiterView, Products, Order };