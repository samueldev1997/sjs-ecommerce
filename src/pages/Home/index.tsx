import { useEffect, useState, useContext } from "react";
import { Card } from "../../components/CardProduto";
import { api } from "../../services/api";
import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";

export interface ProductsProps{
    id: number;
    price: number;
    title: string;
    description: string;
    cover: string;
}

export function Home(){
    const [products, setProducts] = useState<ProductsProps[]>([])
    const [loading, setLoading] = useState(true)
    const {addNewItem} = useContext(CartContext)

    useEffect(() => {
        async function getProducts(){
            const response = await api.get('')
            setProducts(response.data)
            setLoading(false)
        }
        getProducts()
    },[])

    if(loading){
        return(
            <div className="min-h-screen flex items-center justify-center" >
                <h1 className="text-center font-medium text-2xl" > Carregando produtos... </h1>
            </div>
        )
    }

    function handleAddItem(product: ProductsProps){
        toast.success('Produto adicionado ao carrinho.', {
            style: {
                borderRadius: 5,
            }
        })
        addNewItem(product)
    }
    return(
        <div>
            <main className="w-full max-w-7xl mx-auto px-5 pt-14" >
                <h1 className="text-center font-bold text-2xl mb-8 mt-7" > Produtos em alta </h1>
                <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  mb-5" >
                    {products.map((product) => (
                        <Card 
                            id={product.id}
                            key={product.id}
                            title={product.title}
                            cover={product.cover}
                            price={product.price}
                            handleAddItem={() => handleAddItem(product)}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}