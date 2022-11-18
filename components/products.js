import Image from "next/image"
import Link from "next/link"
import Stile from "../styles/products.module.css"

export default function Products({ item, showAs }){
    if(showAs == 'Page'){
        return <div>
                {item.title}
            </div>
    }
    if(showAs == 'ListItem'){
        return <div>List Item</div>
    }
    return <div className={Stile.item}>
        <div>
            <Link href={`/store/${item.id}`}>
            <a>
                <Image src={item.image} alt={item.descripcion} width={500} height={500} />
            </a>
            </Link>
        </div>
        <div>
            <h3>
            <Link>
            <a>
                {item.title}
            </a>
            </Link>
            </h3>
        </div>
        <div>
            ${item.price}
            <div>
                <button>Add</button>
            </div>
        </div>

    </div>
}