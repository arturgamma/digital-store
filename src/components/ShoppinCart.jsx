import React from "react";
import ShoppingCartLogo from '../assets/shopping-cart.svg'

const ShoppingCart = () => {
    return ( 
        <div>
            <img src={ShoppingCartLogo} alt="Carrinho de Compras" />
        </div>
     );
}
 
export default ShoppingCart;