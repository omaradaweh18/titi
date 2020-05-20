import React from "react";
import { Link } from 'react-router-dom';
import tata from '../../assets/img/tata.jpg';
class Navbar extends React.Component{
    render() {
        return(
            <button type="button" className="mobile-nav-toggle d-xs none"><i className="icofont-navigation-menu"/>
            <header id="header">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img src={tata} alt="" className="img-fluid rounded-circle"/>
                    <h1 className="text-light"><Link to='#'>OMAR OMA</Link></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"/></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"/></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"/></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"/></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"/></a>
                    </div>


                    <div className="nav-menu">
                        <ul>
                            <li className="active">
                                <Link to='/'><i className="bx bx-home"> Home</i></Link>
                            </li>
                            <li>
                                <Link to='/about'><i className="bx bx-user"> About</i></Link>
                            </li>
                            <li>
                                <Link to='/resume'><i className="bx bx-file-blank"> Resume</i></Link>
                            </li>
                            <li>
                                <Link to='/protfolio'><i className="bx bx-book-content"> Protfolio</i></Link>
                            </li>
                            <li>
                                <Link to='/services'><i className="bx bx-server"> Services</i></Link>
                            </li>
                            <li>
                                <Link to='/contact'><i className="bx bx-envelope"> Contact</i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
         </header>
      </button>

       );
    }
}
export default Navbar;
