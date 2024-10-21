import React from "react";
import LogoFooter from "./LogoFooter";

const Footer = () => {
    return ( 
        <footer  className="footer text-light py-4 mt-auto w-100 logo-footer-custom" >
            <div className="container text-center" >
                <div className="row">
                    <div className="col">
                        <LogoFooter />
                    </div>    
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;