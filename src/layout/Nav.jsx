import React from 'react';
import { Link } from 'react-router-dom';
import navs from './Nav.module.css';
import img1 from '../images/logo.svg';
import img2 from '../images/calculation.svg';
import img3 from '../images/measering.svg';

const Nav = () => {
    return (
        <nav className={navs.n}>
            <div className={navs.main}>
                <img src={img1} alt='pic'/>
            </div>
            <div className={navs.blocks}>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Products">Products</Link></li>
                <li><Link to="/About_us">About Us</Link></li>
                <li><Link to="/Portfolio">Portfolio</Link></li>
                <li><Link to="/FAQ">FAQ</Link></li>
                <li><Link to="/Contacts">Contacts</Link></li>
            </div>
            <div className={navs.main_btn}>
                <Link to="/Make_Request" className={`${navs.btn} ${navs.MR_btn}`}>
                <img src={img3} alt="pic" />Make Request</Link>
                <Link to="/Calculation" className={`${navs.btn} ${navs.C_btn}`}>
                <img src={img2} alt="pic" />Calculation</Link>
            </div>
        </nav>
    );
};

export default Nav;