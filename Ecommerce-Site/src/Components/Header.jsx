import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

//Header section

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="w-full">
            <div className="bg-white bg-opacity-65 font-Poppins flex justify-between items-center p-5 sticky top-0">
                    
                    <h2 className="font-Oswald font-base text-2xl text-black">Welcome to Online Shopping!!!</h2>
                    <ul className="hidden md:flex items-center gap-5 text-medium font-base cursor-pointer font-bold">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/browsebook'><li>Browse Collections</li></Link>
                        <Link to="/addbooks"><li>Cart (0) </li></Link>
                    </ul>
                    <div className="md:hidden">
                        <HiOutlineMenu className="w-8 h-8" onClick={() => setIsOpen(!isOpen)} />
                    </div>
        
            </div>
        
        </nav>
    )
}
export default Header;