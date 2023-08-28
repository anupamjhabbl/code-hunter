import Link from "next/link";

const Navbar = () => {
    return (
        <>
        <style jsx>
            {`
            nav{
                width:100%;
            }
            ul{
                display:flex;
                width:400px;
                justify-content:space-around;
                margin:auto;
                margin-top:10px;
                color:#666666;
            }
            li:hover{
                color:black;
            }
            
            `}
        </style>
        <nav>
            <ul>
                <li className="group">
                    <Link href="/">Home</Link>
                </li>
                <li className="group">
                    <Link href="/about">About</Link>
                </li>
                <li className="group">
                    <Link href="/blogs">Blogs</Link>
                </li>
                <li className="group">
                    <Link href="/services">Services</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;