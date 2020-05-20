import React from  "react";
import p1 from '../../assets/img/p1.jpg';
import p2 from '../../assets/img/p2.jpg';
import p3 from '../../assets/img/p3.jpg';
import p4 from '../../assets/img/p4.jpg';
import p5 from '../../assets/img/p5.jpg';
import p6 from '../../assets/img/p6.jpg';
import p7 from '../../assets/img/p7.jpg';
import p8 from '../../assets/img/p8.jpg';
import pixel from '../../assets/img/pixel.jpg';





class System extends React.Component{
    render() {
        return (
            <main id="main">
            <div className="Resume">
                <section id="portfolio" className="portfolio section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Portfolio</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                                quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                                impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row" data-aos="fade-up">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-app">App</li>
                                    <li data-filter=".filter-card">Card</li>
                                    <li data-filter=".filter-web">Web</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src={p1} className="img-fluid" alt=""/>
                                        <div className="portfolio-links">
                                            <a href="" data-gall="portfolioGallery"
                                               className="venobox" title="App 1"><i className="bx bx-plus"/></a>
                                            <a href="#" title="More Details"><i
                                                className="bx bx-link"/></a>
                                        </div>
                                </div>

                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src={p2} className="img-fluid" alt=""/>
                                        <div className="portfolio-links">
                                            <a href="" data-gall="portfolioGallery"
                                               className="venobox" title="Web 3"><i className="bx bx-plus"/></a>
                                            <a href="#" title="More Details"><i
                                                className="bx bx-link"/></a>
                                        </div>
                                </div>

                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src={p3} className="img-fluid" alt=""/>
                                        <div className="portfolio-links">
                                            <a href="" data-gall="portfolioGallery"
                                               className="venobox" title="App 2"><i className="bx bx-plus"/></a>
                                            <a href="#" title="More Details"><i
                                                className="bx bx-link"/></a>
                                        </div>
                                </div>

                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src={p4} className="img-fluid" alt=""/>
                                        <div className="portfolio-links">
                                            <a href="" data-gall="portfolioGallery"
                                               className="venobox" title="Card 2"><i className="bx bx-plus"/></a>
                                            <a href="#" title="More Details"><i
                                                className="bx bx-link"/></a>
                                        </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src={p5} className="img-fluid" alt=""/>
                                        <div className="portfolio-links">
                                            <a href="" data-gall="portfolioGallery"
                                               className="venobox" title="Web 2"><i className="bx bx-plus"/></a>
                                            <a href="#" title="More Details"><i
                                                className="bx bx-link"/></a>
                                        </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src={p6} className="img-fluid" alt=""/>
                                        <div className="portfolio-links">
                                            <a href="" data-gall="portfolioGallery"
                                               className="venobox" title="App 3"><i className="bx bx-plus"/></a>
                                            <a href="#" title="More Details"><i
                                                className="bx bx-link"/></a>
                                        </div>
                                </div>

                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src={p7} className="img-fluid" alt=""/>
                                        <div className="portfolio-links">
                                            <a href="" data-gall="portfolioGallery"
                                               className="venobox" title="Card 1"><i className="bx bx-plus"/></a>
                                            <a href="#" title="More Details"><i
                                                className="bx bx-link"/></a>
                                        </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <img src={p8} className="img-fluid" alt=""/>
                                        <div className="portfolio-links">
                                            <a href="" data-gall="portfolioGallery"
                                               className="venobox" title="Card 3"><i className="bx bx-plus"/></a>
                                            <a href="#" title="More Details"><i
                                                className="bx bx-link"/></a>
                                        </div>
                                </div>
                         </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <img src={pixel} className="img-fluid" alt=""/>
                                        <div className="portfolio-links">
                                            <a href="" data-gall="portfolioGallery"
                                               className="venobox" title="Web 3"><i className="bx bx-plus"/></a>
                                            <a href="#" title="More Details"><i
                                                className="bx bx-link"/></a>
                                        </div>
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
export default System;
