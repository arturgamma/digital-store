import React from "react";
import logoIcon from '../assets/search-icon.svg'

const LogoIcon = () => {
    return ( 
        <div>
            <img src={logoIcon} alt="Buscar" id="search-icon-custom" />
        </div>
     );
}
 
export default LogoIcon;