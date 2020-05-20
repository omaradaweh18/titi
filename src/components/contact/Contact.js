import React from "react";
import Footer from "../footer/Footer";
import Fifa from "../fifa/Fifa";
import Navbar from "../navbar/Navbar";

class Contact extends React.Component{
    render() {
        return (
            <div className="Contact">
            <Navbar/>
            <Fifa/>
            <Footer/>
            </div>


        );
    }

}
export default Contact;
