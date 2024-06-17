import { ReactNode, createContext, useState } from "react";
import { ProductsProps } from "../pages/Home";

interface CartProviderProps{
    children: ReactNode
}

interface CartContextData{
    cart: CartProps[];
    cartAmount: number;
    addNewItem: (newItem: ProductsProps) => void;
    removeItem: (product: CartProps) => void;
    total: string;
}

interface CartProps{
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({ children }: CartProviderProps){
    const [cart, setCart] = useState<CartProps[]>([])
    const [total, setTotal] = useState('')

    function addNewItem(newItem: ProductsProps){
        const indexItem = cart.findIndex(item => item.id === newItem.id);
        if(indexItem !== -1){
            let cartList = cart
            cartList[indexItem].amount = cartList[indexItem].amount + 1
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price
            setCart(cartList)
            totalResultCart(cartList)
            return;
        }
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }
        setCart(product => [...product, data])   
        totalResultCart([...cart, data])
    }

    function removeItem(product: CartProps){
        const indexItem = cart.findIndex(item => item.id === product.id)
        if(cart[indexItem]?.amount > 1){
            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount - 1
            cartList[indexItem].total = cartList[indexItem].total -  cart[indexItem].price
            setCart(cartList)
            totalResultCart(cartList)
            return;
        }
        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem)
        totalResultCart(removeItem)
    }

    function totalResultCart(items: CartProps[]){
        let myCart = items;
        let result = myCart.reduce((acc, obj) => { return acc + obj.total }, 0)
        const resultFormated = result.toLocaleString('pt-Br', {
            style: 'currency',
            currency: 'BRL'
        })
        setTotal(resultFormated)
    }

    return(
        <CartContext.Provider value={{ 
                cart, 
                cartAmount: cart.length, 
                addNewItem, 
                removeItem, 
                total }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;