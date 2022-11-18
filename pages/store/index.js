import Layouts from "../../components/layouts";
import { getItems } from "../../services/itemService";
import Image from "next/image";
import Products from "../../components/products";
import StyleItems from "../../styles/products.module.css"

export default function store({items}){
    return (
    <>
    <Layouts title="Home">
      <h1>Estas en el store</h1>
    </Layouts>
    </>
    )
}

export async function getStaticProps(){
    const res = await getItems();
    
    return {
        props:{
            items: res,
        }
    }
}