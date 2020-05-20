import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Custamer from "../custamer/Custamer";
import Fact from "../fact/Fact";
import Feacture from "../feacture/Feacture";

class About extends React.Component{
    render() {
        return (
            <div className="About">
                <Navbar/>
               <Custamer/>
               <Fact/>
               <Feacture/>
               <Footer/>
            </div>


        );
    }

}
export default About;
