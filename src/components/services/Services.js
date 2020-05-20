import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Wea from "../wea/Wea";
import Testimonials from "../testimonials/Testimonials";


class Services extends React.Component{
    render() {
        return (
            <div className="Resume">
                <Navbar/>
                <Wea/>
                <Testimonials/>
                <Footer/>
            </div>


        );
    }

}
export default Services;
