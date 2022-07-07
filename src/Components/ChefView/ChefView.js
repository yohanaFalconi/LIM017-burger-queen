import './ChefView.css'
import bqlogo from '../../assets/bqlogo.png';
// import Icon from "../../IcoMoon/Icon";


function ChefView() {
    return (
        <div className='bg-[#FAFAFA] WaiterView'>
            <header>
            <img src={bqlogo} alt='Burger Queen' className='h-20 ml-4 mt-3' />
                <nav>
                    <button>Click me</button>
                </nav>
            </header>
            <main className='main'>
                main
            </main>
            <aside className='aside'>
                meow
            </aside>
        </div>
    );
}

export default ChefView;