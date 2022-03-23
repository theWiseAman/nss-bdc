import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {  
    return (
        <footer className="footer">
        <div className="container">
           <div className="row">
               <div className="footer-col" >
                   <h2>Quick Links</h2>
                   <ul>
                       <li><a href="/">Home</a></li>
                       <li><a href="#steps-to-donate">Steps to Donate</a></li>
                       <li><a href="#dos-and-donts">Dos And Donts</a></li>
                       <li><a href="#gallery">Gallery</a></li>
                       <li><a href="#contact-us">Contact Us</a></li>
                    </ul>
               </div>
               <div className="footer-col">
               <div className="image-col">
                <img src="/assets/BLOOD_DONATION_CAMP.jpeg" alt="" className="image1" />
                <img src="/assets/newlogo.png" className="image2" />
               </div>
            </div>
               <div className="footer-col">
               <div className="sociallinks" style={{textAlign:"center"}}>
                   <h2>Follow us on</h2>
                   <a href="https://www.facebook.com/nssbits/"><i className="fab fa-facebook-f"></i></a>
                   <a href="https://twitter.com/nssbits"><i className="fab fa-twitter"></i></a>
                   <a href="https://www.instagram.com/nssbitspilani/"><i className="fab fa-instagram"></i></a>
                   <a href="https://in.linkedin.com/company/nss-bits-pilani"><i className="fab fa-linkedin-in"></i></a>
               </div>
            </div>
           </div>
           <p align='center'>
               <a id='meet-dev' href='/developers'>Meet the Developers</a>
           </p>
           <p align="center">© 2022 NSS BITS PILANI. All Rights Reserved</p>
       </div>
   </footer>
        
    );
}

export default Footer;