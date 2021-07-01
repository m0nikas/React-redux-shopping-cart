import React from 'react';
import styles from './header.module.css';
import logo from '../../../clashlogo.jpg'
import {Link} from 'react-router-dom';
const Header = () =>{
    return(
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
                <a className="navbar-brand" href="#">
                   <img className={`${styles.logo}`}src={logo} alt="LOGO"/>
                </a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/products">Products</a>
                    </li>
                    </ul>

                 </div>
                <div className={`${styles.cart}`}>
                <Link to="/cart"><i className="bi bi-cart-fill">
                 </i></Link>
                 </div>
     
               
                </nav>
        </div>
    )
}

export default Header;