import { FaCartPlus } from "react-icons/fa"
import { Link } from "react-router-dom";

interface CardProps {
    id: number;
    title: string;
    price: number;
    cover: string;
    description?: string;
    handleAddItem: () => void;
}


export function Card({id, title, price, cover, handleAddItem}: CardProps){
    return(
        <section className="w-full flex flex-col justify-between bg-regal-blue/5 shadow-md px-3 py-2 rounded-md" >
            <div className="w-full h-44 flex items-center justify-center mt-4" >
                <Link to={`/detail/${id}`} >
                <img 
                src={cover}
                alt={title}
                className="w-44 md:w-40 h-44  rounded-md mb-2 transition-transform duration-500 hover:scale-105"
                />                 
                </Link>                         
            </div>
            <p className="text-center mt-4" > {title} </p>
            <div className="flex gap-5 justify-center mt-5 px-10 md:px-2 lg:px-1" >
                <strong className="" > {price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })} </strong>
                <button 
                    className="bg-zinc-700 p-1 rounded-md flex justify-center items-center"
                    onClick={() => handleAddItem()}
                >
                    <FaCartPlus size={23} color="#fff"/> 
                </button>
            </div>
        </section>
    )
}