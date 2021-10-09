import React,{useEffect} from 'react';
import './style.css';

const Navbar = () => {

    setInterval(()=>{
        // console.log(window.scrollY);
        let nav = document.getElementById('navbar');
        if(window.scrollY >20){
            nav.classList.add("sticky");
        }else{
            nav.classList.remove("sticky");
        }
    },100);
    const toggleMenu =()=>{
        let menu = document.getElementById('menu');
        let menubtn = document.getElementById('menubtn');
        menu.classList.toggle('active');
        menubtn.classList.toggle('active');
    }
    return (
        <>
            <div className="container">
                <div className="navbar" id="navbar">
                    <nav className="max-width">
                        <div className="logo">
                        <a href="#">Portfo<span>lio</span></a>
                        </div>
                        <ul className="menu" id="menu">
                        <li className="d-inline"><a href="#">Home </a></li>
                        <li className="d-inline"><a href="#">Contact </a></li>
                            <li className="d-inline"><a href="#">About </a></li>
                            <li className="d-inline"><a href="#">Work</a></li>
                        </ul>
                        <div className="menu-bar">
                            <i class="fas fa-bars" onClick={toggleMenu} id="menubtn"></i>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Navbar;