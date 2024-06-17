import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useParams, useNavigate } from "react-router-dom"
import { ProductsProps } from "../Home"
import { FaCartPlus } from 'react-icons/fa'
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import toast from "react-hot-toast"

export function DetailProduct(){
    const {addNewItem} = useContext(CartContext)
    const {id} = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState<ProductsProps>()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        async function getProducts(){
            const response = await api.get(`/${id}`)
            setProduct(response.data)
            setLoading(false)
        }
        getProducts()
    },[id])

    function handleAddItem(product: ProductsProps){
        toast.success('Produto adicionado ao carrinho.', {
            style: {
                borderRadius: 5,
            }
        })
        addNewItem(product)
        navigate('/cart')
    }
    
    if(loading){
        return(
            <div className="min-h-screen flex items-center justify-center" >
                <h1 className="text-center font-medium text-2xl" > Carregando produto... </h1>
            </div>
        )
    }

    return(
        <div className="pt-14 w-full px-5" >
            {product && (
                <section className="w-full max-w-7xl flex flex-col justify-center items-center mt-10 gap-10" >
                    <img 
                        src={product?.cover}
                        alt={product?.title}
                        className="w-64"
                    />
                    <div className="flex flex-col" >
                        <h1 className="font-bold text-lg md:text-3xl mb-2" > {product?.title} </h1>
                        <p> {product?.description} </p>
                        <div className="mt-7 flex gap-4 items-center" >
                            <strong> {product?.price.toLocaleString('pt-Br', {
                                style: 'currency',
                                currency: 'BRL'
                            })} </strong>
                            <button 
                                onClick={() => handleAddItem(product)}
                                className="bg-zinc-700 p-1 rounded-md flex justify-center items-center">
                                <FaCartPlus size={18} color="#fff"/> 
                            </button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}