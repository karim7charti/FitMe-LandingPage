import React from "react";
import {Component} from "react";
import {Link,withRouter} from "react-router-dom"
import logo from './../../img/FitMe_logo.png'
import '../../css/FooterStyle.css'
import c1  from './../../img/cash.png'
import c2  from './../../img/cih.jpg'
import c3  from './../../img/wafa.jpg'
import c4  from './../../img/popu.jpg'


class Footer extends Component{


    render() {
        return(
            <>


                <section id="footer_sec" className="py-lg-5 py-md-3 py-sm-4 py-4 px-lg-5 px-md-3 px-sm-3 px-3">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <img className="logoF" src={logo}/>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row mb-5 mt-5">

                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <h4>Contact</h4>
                                    <p><strong>Address: </strong> 100 Nakhil Road, Street 88, El Qods, Oujda</p>
                                    <p><strong>Phone: </strong> +212 501 234 567 </p>
                                    <p><strong>Hours: </strong> 07:00 - 00:00, 24H/24H</p>

                                </div>

                                <div className="col-lg-2  col-md-3 col-sm-12 col-12 mx-md-auto mt-sm-3 mt-4 mt-lg-0">
                                    <h4>About us</h4>
                                    <a href="#hero">Home</a><br/>
                                    <a href="#stay1">About us</a><br/>
                                    <a href="#features1">Features</a><br/>
                                    <a href="#equ1">Equipments</a>
                                </div>

                                <div className="col-lg-4  col-md-6 col-sm-12 col-12 mt-md-4 mt-lg-0 mt-sm-3  mt-4 mb-2 pay">
                                    <h4>Payment</h4>
                                    <p className="mb-3">Pay your bills in our local with cash or:</p>
                                    <img src={c2} title="CIH bank"/>
                                    <img src={c3}  title="WAFA bank"/>
                                    <img src={c4}  title="Bank POPULAR"/>
                                </div>


                                <div className="col-lg-2  col-md-3 col-sm-12 col-12 mx-md-auto mt-md-4 mt-sm-3  mt-2 mt-lg-0">
                                    <h4>Follow us</h4>
                                    <div className="links">
                                        <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook" title="Facebook Page"></i></a>
                                        <a href="https://instagram.com/"  target="_blank"><i className="fab fa-instagram" title="Instagram Page"></i></a>
                                        <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"  title="Twitter Page"></i></a>
                                    </div>
                                </div>

                            </div>
                                <div className="col-lg-12  col-md-12 col-sm-12 col-12 copy text-center">
                                    &copy; 2022 Fit Me - All Rights Reserved
                                </div>


                        </div>
                    </div>

                </section>


            </>
        );
    }
}

export default Footer;