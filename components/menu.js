import Link from "next/link";
import Style from "../styles/menu.module.css"

export default function Menu(){
    return (
        <nav className={Style.menu}>
            <div>
                <Link href="/">
                    <a className={Style.link}>Home</a>
                </Link>
                <Link href="/store">
                    <a className={Style.link}>Store</a>
                </Link>
                <Link href="/faq">
                    <a className={Style.link}>FAQ</a>
                </Link>
            </div>
            <div>
                <a className={Style.link} href="#">Cart(0)</a>
            </div>
        </nav>
    )
}