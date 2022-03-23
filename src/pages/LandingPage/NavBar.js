import React from "react";
import {Component} from "react";
import {Link,withRouter} from "react-router-dom"
import '../../css/NavBarStyle.css'
import logo from './../../img/FitMe_logo.png'

class NavBar extends Component{


    componentDidMount() {
        const bar=document.getElementById('bar');
        const nav=document.getElementById('navbar');
        const close=document.getElementById('close_bar');

        if (bar){
            bar.addEventListener('click', ()=>{
                nav.classList.add('active');
            })
        }

        if (close){
            close.addEventListener('click', ()=>{
                nav.classList.remove('active');
            })
        }

    }


    render() {

        return(
                <>
                    <div id="header">

                        <Link  style={{textDecoration: "none"}}>
                            <img src={logo} id="logo" alt="Home"/>
                        </Link>
                        <ul id="navbar">
                            <li><a className="active hero" href="#hero">Home</a></li>
                            <li><a className="stay" href="#stay1">About us</a></li>
                            <li><a className="features" href="#features1">Features</a></li>
                            <li><a className="equ" href="#equ1">Equipments</a></li>
                            <li><a className="footer_sec" href="#footer_sec1">Contact</a></li>

                            <i className="fad fa-times" id="close_bar"  style={{color:"#6E3CBC"}}></i>

                        </ul>
                        <div id="res_mob">
                            <i id="bar" className="fas fa-outdent"></i>

                        </div>
                    </div>

                </>
            );
    }
}
export default NavBar;