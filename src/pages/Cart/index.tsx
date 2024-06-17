import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom"

export function Cart(){
    const {cart, removeItem, addNewItem, total} = useContext(CartContext)

    return(
        <div className="pt-14 w-full max-w-7xl mx-auto" >
            <h1 className="text-center font-bold text-2xl mb-8 mt-7"> Meus produtos </h1>

            {cart.length === 0 && (
                <div className="w-full max-w-7xl mt-16 flex flex-col justify-center items-center" >
                    <h1 className="font-medium" > Ops, seu carrinho está vazio... </h1>
                    <Link 
                        to='/'
                        className="bg-slate-700/45 my-4 px-2 rounded shadow text-white text-sm"
                        > Acessar produtos </Link>
                </div>
            )}

            {cart.map((item) => (
                <section 
                    className="flex flex-col md:flex-row justify-between items-center border-b-2 mt-8 px-5"
                    key={item.id} >
                    <img 
                        src={item.cover}
                        alt={item.title}
                        className="w-20 rounded-md mb-2 transition-transform duration-500 hover:scale-105"
                    />
                    <strong> Preço: {item.price.toLocaleString('pt-Br', {
                        style: 'currency',
                        currency: 'BRL'})} 
                    </strong>
                    <div className="flex flex-col md:flex-row my-4 md:my-0 gap-3 items-center justify-center">
                        <div className="flex gap-3">
                            <button 
                                onClick={() => removeItem(item)}
                                className="bg-slate-500 rounded text-white font-bold flex items-center 
                                justify-center px-2" > - 
                            </button>
                            <span> {item.amount} </span>
                            <button 
                                onClick={() => addNewItem(item)}
                                className="bg-slate-500 rounded text-white font-bold flex items-center 
                                justify-center px-2" > + 
                            </button>
                        </div>
                    </div>
                    <strong className="mb-5" > Subtotal: {item.total.toLocaleString('pt-Br', {
                        style: 'currency',
                        currency: 'BRL'})} 
                    </strong>                        
                </section>
            ))}
            
            {cart.length !== 0 && <p className="font-bold my-8 px-5" > Total: {total}  </p> }
        </div>
    )
}