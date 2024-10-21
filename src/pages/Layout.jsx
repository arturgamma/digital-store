import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({children}) => {
    return ( 
        <div id="body">
            <Header />
            {/* <main className="flex-grow-1">{children}</main> */}
            <Footer />
        </div>    
     );
}
 
export default Layout;