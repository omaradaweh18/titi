import React from "react";
import Typical from 'react-typical';

class Hero extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name : 'OMAR OMA'
        }
    }

    render() {
    return (
            <div className="Hero">
                <div id="hero" className="d-flex flex-column justify-content-center align-items-center">
                    <div className="hero-container" data-aos="fade-in">
                        <h1>{this.state.name}</h1>
                        <p> I'm <Typical
                            loop={Infinity}
                             wrapper="a"
                                steps={[
                                    'Designer',
                                    1000,
                                    'Developer',
                                    1000,
                                    'Freelancer',
                                    1000,
                                    'Photographer',
                                    1000]}
                            /></p>
                    </div>
                </div>
            </div>
        );
    }

}
export default Hero;

