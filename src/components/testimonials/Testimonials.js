import React from "react";
import person1 from '../../assets/img/person1.jpg';
import person2 from '../../assets/img/person2.jpg';
import person3 from '../../assets/img/person3.jpg';
import person4 from '../../assets/img/person4.jpg';

class Testimonials extends React.Component{
    render() {
        return (
            <main id="main">
                <section id="testimonials" className="testimonials section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Testimonials</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                                quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                                impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                           <div className="row mt-5">
                            <div className="col-md-3">
                            <div className="testimonial-item" data-aos="fade-up">
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"/>
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
                                    rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                                    risus at semper.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"/>
                                </p>
                                <img src={person1} className="testimonial-img"
                                     alt=""/>
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                            </div>
                            </div>

                                <div className="col-md-3">
                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="100">
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"/>
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid
                                    cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet
                                    legam anim culpa.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"/>
                                </p>
                                    <img src={person2} className="testimonial-img"
                                         alt=""/>
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                            </div>
                            </div>

                            <div className="col-md-3">
                             <div className="testimonial-item" data-aos="fade-up" data-aos-delay="200">
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"/>
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster
                                    veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam
                                    culpa fore nisi cillum quid.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"/>
                                </p>
                                 <img src={person3} className="testimonial-img"
                                      alt=""/>
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                            </div>
                            </div>


                            <div className="col-md-3">
                            <div className="testimonial-item" data-aos="fade-up" data-aos-delay="400">
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"/>
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster
                                    veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam
                                    culpa fore nisi cillum quid.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"/>
                                </p>
                                <img src={person4} className="testimonial-img"
                                     alt=""/>
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
         );
       }
    }
   export default Testimonials;

