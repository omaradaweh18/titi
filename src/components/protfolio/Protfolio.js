import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import System from "../system/System";

class Protfolio extends React.Component{
    render() {
        return (
            <div className="Protfolio">
                <Navbar/>
                <System/>
                <Footer/>
            </div>
        );
    }

}
export default Protfolio;
