import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
class Feacture extends React.Component{
    render() {
        return (
            <main id="main">
            <div className="Feacture">
                <section id="skills" className="skills section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Skills</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                                quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                                impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row skills-content">

                            <div className="col-lg-6" data-aos="fade-up">

                                <div className="progress">
                                    <span className="skill">HTML <i className="val">100%</i></span>
                                        <ProgressBar animated now={100} />
                                </div>

                                <div className="progress">
                                    <span className="skill">CSS <i className="val">90%</i></span>
                                    <ProgressBar animated now={90} />
                                </div>

                                <div className="progress">
                                    <span className="skill">JavaScript <i className="val">75%</i></span>
                                    <ProgressBar animated now={75} />
                                </div>

                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                                <div className="progress">
                                    <span className="skill">REACT JS <i className="val">100%</i></span>
                                    <ProgressBar animated now={100} />
                                </div>

                                <div className="progress">
                                    <span className="skill">NODE JS <i className="val">100%</i></span>
                                    <ProgressBar animated now={100} />
                                </div>

                                <div className="progress">
                                    <span className="skill">MONGODB <i className="val">100%</i></span>
                                    <ProgressBar animated now={100} />
                                </div>

                            </div>

                        </div>

                    </div>
                </section>
            </div>
            </main>

        );
    }

}
export default Feacture;
