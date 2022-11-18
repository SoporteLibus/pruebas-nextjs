import Layouts from "../../components/layouts";
import Products from "../../components/products";
import { getItemData, getPathsFromIds } from "../../lib/utils";

export default function ProductPage({ productInfo }){
    return <Layouts>
        <Products item={productInfo} showAs="ListItem" />
    </Layouts>
}

export async function getStaticPaths(){
    const path = await getPathsFromIds()
    return {
        paths: path,
        fallback: false,
    }
}

export async function getStaticProps({ params }){
    const id = await params.id;
    const product = await getItemData(id);
    return {
        props: {
            productInfo: product,
        }
    };
}