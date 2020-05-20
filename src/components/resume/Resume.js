import React from "react";
import Navbar from "../navbar/Navbar";
import Rais from "../rais/Rais";
import Footer from "../footer/Footer";

class Resume extends React.Component{
    render() {
        return (
            <div className="Resume">
                <Navbar/>
                <Rais/>
                <Footer/>
            </div>


        );
    }

}
export default Resume;
