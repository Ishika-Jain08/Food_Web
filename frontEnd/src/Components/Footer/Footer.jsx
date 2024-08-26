import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <>

    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=''/>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience ,one delicious,meal at a time.</p>
                <div className='footer-social-icon'>
                <a href="https://www.linkedin.com/in/ishika-jain08/" className="icon"><i class="ri-linkedin-fill"></i></a>
         <a href="https://github.com/Ishika-Jain08" className="icon"><i class="ri-github-fill"></i></a>
         <a href="https://x.com/Ishika0811" className="icon"><i class="ri-twitter-fill"></i></a>
                </div>
            </div>
            <div className='footer-content-center'>
            <h2>Company</h2>
                <ul>
                    <li>Home </li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                
                </ul>

            </div>
            <div className='footer-content-right'>
     <h2>Get in Touch</h2>
     <ul>
        <li>+1-212-456-7890</li>
        <li>ishikajian@gmail.com</li>
     </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>
            Copyright 2024 @ Tomato.com - All Right Reserved.
        </p>
    </div>
    </>
  )
}

export default Footer