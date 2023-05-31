import Vlogo from "../assets/images/logo/Vlogo.png";
import { Link } from "react-router-dom";
import Button from "./elements/Button";

export const Header = () => {
    return (
        <nav id="header" className="">
            <div className="w-full mx-auto container flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor no-underline hover-no-underline font-bold text-2xl lg:text-4xl">
                        <img src={Vlogo} alt="logo" className="w-40 h-40 object-cover" />
                    </Link>
                    
                </div>
                <div className="nav-menu-wrapper mr-10 pr-10 flex items-center justify-between space-x-10">
                    <Link to="/" className="text-l">Home</Link>
                    <Link to="/about" className="text-l">About</Link>
                    <Link to="/contact-us" className="text-l">Contact Us</Link>
                </div>
                <div className="flex items-center justify-between space-x-4 nav-button">
                    <Link to="#" className="text-l "><Button>Login</Button></Link>
                    <Link to="#" className="text-l pr-10 "><Button>Sign Up</Button></Link>
                </div>
            </div>
        </nav>
    )
}