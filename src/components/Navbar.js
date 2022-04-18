import React from 'react';
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav>
        
        <div className="navbar">

            <div className="navbar--container">

                <div className="navbar--left">

                    <div className="logo mie6">
                        <a href="/">
                            <img src={logo} alt="starbucks logo" />
                        </a>
                    </div>

                    <ul className="navbar--links">

                        <li className="text-upper text-bold text-xxs">
                            <a href="#" className="navbar--link inline-block text-no-underline py6">menu</a>
                        </li>

                        <li className="text-upper text-bold text-xxs">
                            <a href="#" className="navbar--link inline-block text-no-underline py6">rewards</a>
                        </li>

                        <li className="text-upper text-bold text-xxs">
                            <a href="#" className="navbar--link inline-block text-no-underline py6">gift cards</a>
                        </li>

                    </ul>
                    
                </div>

                <div className="navbar--right">

                    <a href="#" className="navbar--link find-store text-no-underline mie6">
                        <i className="fa-solid fa-location-dot location-icon pie2"></i>
                        <span>Find a store</span>
                    </a>

                    <a href="#" className="btn mie3 text-xxs">Sign in</a>
                    <a href="#" className="btn btn--black text-xxs">Join now</a>
                                        
                </div>

            </div>
            
        </div>
        
    </nav>
  )
}

export default Navbar