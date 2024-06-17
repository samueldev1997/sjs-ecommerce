import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header(){
    const {cartAmount} = useContext(CartContext)
    return(
        <header className="w-full bg-regal-blue shadow-lg fixed top-0 z-50 " >
            <nav className="w-full h-14 items-center max-w-7xl flex justify-between px-5 mx-auto" >
                <Link className="text-white font-bold text-2xl" to='/'>
                    SJS.Sounds 
                </Link>
                <Link className="relative" to='/cart'>
                    <FiShoppingCart size={30} color="#fff" />
                    {cartAmount > 0 && (
                        <span className="left-4 bottom-4 absolute p-1 bg-lime-400 text-xs rounded-full 
                        w-5 h-5 flex items-center justify-center" 
                        >
                        {cartAmount}
                    </span>
                    )}
                </Link>
            </nav>
        </header>
    )
}