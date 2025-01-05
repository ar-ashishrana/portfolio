import React from 'react';
import './style.css';

const Navbar = () => {


    setInterval(()=>{
        let nav = document.getElementById('navbar');
        if(window.scrollY >20){
            nav.classList.add("sticky");
        }else{
            nav.classList.remove("sticky");
        }
        let scroll = document.getElementById('scroll');
        if(window.scrollY > 500){
            scroll.classList.add("show");
        }else{
            scroll.classList.remove("show");
        }
    },100);
    // responicive menu script
    const toggleMenu =()=>{
        let menu = document.getElementById('menu');
        let menubtn = document.getElementById('menubtn');
        menu.classList.toggle('active');
        menubtn.classList.toggle('active');
    }
    // scroll top script
    const scrollt=()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
        <div className="scroll-up-btn" id="scroll" onClick={scrollt}><i className="fas fa-angle-up"></i></div>
            <div className="container">
                <div className="navbar" id="navbar">
                    <nav className="max-width">
                        <div className="logo">
                        <a href="#">Portfo<span>lio</span></a>
                        </div>
                        <ul className="menu" id="menu">
                        <li className="d-inline"><a href="#home" className="menu-bar">Home </a></li>
                        <li className="d-inline"><a href="#about" className="menu-bar">About </a></li>
                        <li className="d-inline"><a href="#services" className="menu-bar">Services </a></li>
                        <li className="d-inline"><a href="#team" className="menu-bar">Team</a></li>
                        <li className="d-inline"><a href="#contact" className="menu-bar">Contact </a></li>
                        </ul>
                        <div className="menu-bar">
                            <i className="fas fa-bars" onClick={toggleMenu} id="menubtn"></i>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Navbar;