import React from "react";
import Logo from "./Logo";
import LogoIcon from "./LogoIcon";
import ShoppingCart from "./ShoppinCart";

const Header = () => {
    return ( 
        <header id="Header" className="navbar navbarexpand-lg fixed-top" >
            <div className="container-fluid row-alig-items-center" >
                <Logo />
                <div className="search-container">
                    <div className="input-group">
                        <input type="text" placeholder="Pesquisar produto..." className="navbar input-custom" />
                        <LogoIcon />
                    </div>    
                </div>   
                <div>    
                    <a href="#" style={{color:"#8F8F8F"}} >
                        Cadastre-se
                    </a>
                </div>    
                <ShoppingCart />
            </div>
        </header>
     );
        
}
 
export default Header;