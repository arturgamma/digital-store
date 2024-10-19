import React from "react";
import Logo from "./Logo";

const Header = () => {
    return ( 
        <header id="Header" className="navbar navbarexpand-lg fixed-top" >
            <div className="container-fluid" >
                <Logo />
            </div>
        </header>
     );
        
}
 
export default Header;