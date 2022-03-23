import React from "react";
import {Component} from "react";
import {Link,withRouter} from "react-router-dom"
import NavBar from "./NavBar";
import '../../css/LandingStyle.css'
import Footer from "./Footer";

import card1 from './../../img/card1.jpg'
import card2 from './../../img/card2.jpg'
import card3 from './../../img/card3.jpg'
import card4 from './../../img/card4.jpg'

import slide1 from './../../img/slide1.jpg'
import slide2 from './../../img/slide2.jpg'
import slide3 from './../../img/slide3.jpg'



class LandingPage extends Component{

    componentDidMount() {




        /*
        const hero = document.getElementById("hero");
        const stay = document.getElementById("stay");
        const features = document.getElementById("features");
        const equ = document.getElementById("equ");
        const footer = document.getElementById("footer_sec");
        const navLi = document.querySelectorAll("#header #navbar li a");
        const heroH= hero.clientHeight;
        const stayH= hero.clientHeight + stay.clientHeight;
        const featuresH= hero.clientHeight + stay.clientHeight + features.clientHeight;
        const equH= hero.clientHeight + stay.clientHeight + features.clientHeight + equ.clientHeight;
        const footerH= hero.clientHeight + stay.clientHeight + features.clientHeight + equ.clientHeight + footer.clientHeight;


        if (pageYOffset <= heroH ){
            navLi.forEach((a) => {
                a.classList.remove("active");
                if (a.classList.contains("hero")) {
                    a.classList.add("active");
                }
            })
        }

        else if((pageYOffset >= heroH) && (pageYOffset <= heroH+ stayH) ){
            navLi.forEach((a) => {
                a.classList.remove("active");
                if (a.classList.contains("stay")) {
                    a.classList.add("active");
                }
            })
        }

        else if((pageYOffset >= heroH + stayH) && (pageYOffset <= heroH+ stayH +featuresH) ){
            navLi.forEach((a) => {
                a.classList.remove("active");
                if (a.classList.contains("features")) {
                    a.classList.add("active");
                }
            })
        }
        else if((pageYOffset >= heroH + stayH + featuresH) && (pageYOffset <= heroH+ stayH +featuresH + equH) ){
            navLi.forEach((a) => {
                a.classList.remove("active");
                if (a.classList.contains("equ")) {
                    a.classList.add("active");
                }
            })
        }



*/

        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll("#header #navbar li a");
        window.addEventListener("scroll", () => {
            let current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY > (sectionTop - sectionHeight/2)){
                    current = section.getAttribute("id");
                }
            });

            navLi.forEach((a) => {
                a.classList.remove("active");
                if (a.classList.contains(current)) {
                    a.classList.add("active");
                }
            });
        });

    }

    render() {
        return(

            <>
                <NavBar/>

                <section id="hero">


                    <span className="h2">FitMe Hall </span>
                    <h1>
                        Start your<br/>
                        Resolutions early
                    </h1>
                    <p>Save more than 30% off <br className="br"/> with New Year discount!</p>
                    <button className="mt-4"><a href="#stay1" style={{
                        textDecoration: "none",
                        color:"white",
                    }}>Get Started</a></button>
                    <span id="stay1"></span>

                </section>



                <section className="container mx-auto" id="stay">
                    <br/>
                    <div className="row my-5">
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12 mx-lg-0">
                            <h3 className="text-uppercase" style={{
                                color:"#6E3CBC",
                                textAlign:"justify",
                                textJustify:"inter-word",
                                /*textShadow: "-2px 5px 7px #989295",*/
                            }}>
                                START STRONG<br/>
                                START NOW
                            </h3><br/>
                        </div>

                        <div className="col-lg-9 col-md-12 col-sm-12 col-12  m-auto">
                            <p className="text-secondary"  style={{
                                textAlign:"justify",
                                textJustify:"inter-character",
                            }}>
                                FitMe is more than a place where high performers come to be their best.
                                <br/>
                                <br/>
                                We’ve transformed every aspect of our membership to encompass integrated digital and in-club offerings to keep you at your best—all the time, any time.
                                <br/>
                                <br/>
                                Discover the offerings below, plus The FitMe Standard for health, safety, and cleanliness.
                                <br/>
                                <br/>
                                Are you a former member at FitMe? Check below to learn about the benefits you will profit upon membership.

                            </p>
                        </div>

                    </div>

                    <div className=" mx-auto" id="why">
                        <div className="row" id="why2">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <h3 style={{
                                    color:"#6E3CBC"
                                }}>Why Fit Me ?</h3><br/>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                                <div className="row">

                                    <div className="col-lg-4 col-md-4 col-sm-11 col-12 mx-auto my-2">
                                        <div className="row  px-auto">
                                            <div className="col-lg-3 col-md-3 col-sm-2 col-3 mb-md-3 m-lg-auto text-center">
                                                <div className="coach   p-2 ">
                                                    <i className="fas fa-running"></i>
                                                </div>

                                            </div>
                                            <div className="col-lg-9 col-md-12 col-sm-10 col-9 mx-auto my-auto">
                                                <h6 className="my-auto">Coaching</h6>
                                                <p className="my-auto">Pro or starter get free coaching included in the three first months</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-11 col-12  mx-auto my-2">
                                        <div className="row  px-auto">
                                            <div className="col-lg-3 col-md-3 col-sm-2 col-3  mb-md-3 m-lg-auto text-center">
                                                <div className="time p-1">
                                                    <i className="fas fa-history mt-2"></i>
                                                </div>

                                            </div>
                                            <div className="col-lg-9 col-md-12 col-sm-10 col-9 mx-auto my-auto">
                                                <h6 className="my-auto">Availability</h6>
                                                <p className="my-auto">With Fit Me come to train every day 7d/7d we open also on holidays</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-11 col-12  mx-auto my-2 ">
                                        <div className="row  px-auto">
                                            <div className="col-lg-3 col-md-3 col-sm-2 col-3  mb-md-3 m-lg-auto text-center">
                                                <div className="secure  p-2">
                                                    <i className="fab fa-keycdn"></i>
                                                </div>

                                            </div>
                                            <div className="col-lg-9 col-md-12 col-sm-10 col-9 mx-auto my-auto">
                                                <h6  className="my-auto">Security</h6>
                                                <p  className="my-auto">Personal locker for everyone - security guards and cameras everywhere</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <span id="features1"></span>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="container  mx-auto" id="features">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 mb-md-3 mb-sm-3 mb-3 intro">
                            <h3 className="text-uppercase my-auto" style={{
                                color:"#6E3CBC",
                                textAlign:"justify",
                                textJustify:"inter-word",
                                /*textShadow: "-2px 5px 7px #989295",*/
                            }}>
                                FIT ME
                            </h3>
                            <p className="text-secondary" >
                                You can now experience FitMe—however,  and whenever you want it with coaching support and always-open 7days/7days.

                            </p>
                        </div>
                        <div className="col-lg-9 col-md-12">

                            <div className="row">

                                <div className="col-lg-5 col-md-6 col-sm-6  mt-0 mx-auto">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <img src={card1} className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title my-2">Cyclical Evolution</h5>
                                                    <p className="card-text text-secondary">Build strength, flexibility, and mobility with sessions at our hale or through Coach advice at home. Both services offer elite instructors to provide one-on-one guidance and challenging training with an emphasis on the core.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mt-2">
                                            <div className="card">
                                                <img src={card3} className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title my-2">Personal Training Anywhere</h5>
                                                    <p className="card-text text-secondary">Get results wherever you can train. Your personal trainer will work with you to create a custom program and guide you through both in-club sessions in person and workouts at home.</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>


                                <div className="col-lg-5 col-md-6  col-sm-6  mt-0 mx-auto">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <img src={card2} className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title my-2">Unlimited Group Fitness</h5>
                                                    <p className="card-text text-secondary">Enjoy our unparalleled classes for Starer or Pro like MetCon, Best Abs Ever, and more in the club with room and our best coach.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mt-2">
                                            <div className="card">
                                                <img src={card4} className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title my-2">Yoga Strong</h5>
                                                    <p className="card-text text-secondary">Level up your Vinyasa flows and build muscle with a weighted yoga sandbag. Improve strength, mobility, and balance with expertly sequenced poses and athletic movements for a full body workout. An FitMe exclusive lessons.</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>




                            </div>

                        </div>
                    </div>
                    <span id="equ1"></span>
                </section>

                <section className=" container  mx-auto mb-5" id="equ">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">

                            <div id="slide_one" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#slide_one" data-bs-slide-to="0"
                                            className="active" aria-current="true" aria-label="Slide 1"> </button>
                                    <button type="button" data-bs-target="#slide_one" data-bs-slide-to="1"
                                            aria-label="Slide 2"> </button>
                                    <button type="button" data-bs-target="#slide_one" data-bs-slide-to="2"
                                            aria-label="Slide 3"> </button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <img src={slide1} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>High End Equipments</h5>
                                            <p>Fit Me hall have a different equipments types for all body organs</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={slide2} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Premium Facilities</h5>
                                            <p>Large bathrooms and personal locker for all members</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={slide3} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Yoga and Coach</h5>
                                            <p>A private large space for yoga lovers and coaching for everyone</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#slide_one"
                                        data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#slide_one"
                                        data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>


                        </div>
                    </div>
                    <span id="footer_sec1"></span>
                </section>


                <Footer/>

            </>

        );
    }
}

export default LandingPage;