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
                       <li><a href="#">Home</a></li>
                       <li><a href="#">Timeline</a></li>
                       <li><a href="#">Steps to Donate</a></li>
                       <li><a href="#">Mythbusters</a></li>
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
                   <a href="#"><i className="fab fa-facebook-f"></i></a>
                   <a href="#"><i className="fab fa-twitter"></i></a>
                   <a href="#"><i className="fab fa-instagram"></i></a>
                   <a href="#"><i className="fab fa-linkedin-in"></i></a>
               </div>
            </div>
           </div>
           <p align="center">© 2022 NSS BITS PILANI. All Rights Reserved</p>
       </div>
   </footer>
        
    );
}

export default Footer;