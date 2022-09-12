import Link from 'next/link'
export default function FAQ(){
    return (
        <div>
            <h1>FAQ</h1>
            <p>Hola{" "}
            <Link href='/'>
                <a>Ir a Home</a>
            </Link>
            </p>
        </div>
    )
}