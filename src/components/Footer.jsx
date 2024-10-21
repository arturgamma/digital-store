import React from "react";
import LogoFooter from "./LogoFooter";

const Footer = () => {
    return ( 
        <footer  className="footer logo-footer-custom" >
            <div className="container-fluid" >
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