import React from "react";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import Footer from "../footer/Footer";
class Home extends React.Component{
    render() {
        return (
            <div className="Home">
            <Navbar/>
            <Hero/>
            <Footer/>
            </div>


        );
    }

}
export default Home;
