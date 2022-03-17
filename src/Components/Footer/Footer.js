import React from 'react';
import classes from "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = (props) => {  
    return (
        <footer class="ct-footer">
            
            <div className={`${classes.follow} follow`}>
                Follow us on
            </div>
            <div className={`${classes.mediaContainer} mediaContainer`}>
                <div className={`${classes.socialMedia} socialMedia`}>
                    <a target="_blank" href="https://www.linkedin.com/company/nss-bits-pilani" target="_blank"><img src="/assets/image 11.png" /></a>
                    <a target="_blank" href="https://instagram.com/nssbitspilani?utm_medium=copy_link" target="_blank"><img src="/assets/image 9.png" /></a>
                    <a target="_blank" href="https://youtube.com/user/nssbits" target="_blank"><img src="/assets/image 10.png" /></a>
                    <a target="_blank" href="https://www.facebook.com/nssbits/" target="_blank"><img src="/assets/image 12.png" /></a>
                    <a target="_blank" href="https://twitter.com/nssbits?s=09" target="_blank"><img src="/assets/image 13.png" /></a>
                </div>
            </div>
            
            
            <div class="alt_container">
                <ul class="ct-footer-list text_center">
                    <li>
                        <h2 class="ct-footer-list-header">NSS BITS PILANI</h2>
                        <ul>
                            <li style={{marginTop:"1rem"}}>
                                <a to={'/aboutus#top'}>About us</a>
                            </li>
                            <li>
                                <a to={'/aboutus#mid'}>Meet the team</a>
                            </li>
                            <li>
                                <a to={'/contactus#top'}>Contact us</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 class="ct-footer-list-header">DEPARTMENTS</h2>
                        <ul style={{marginTop:"1rem"}}>
                            
                        </ul>
                    </li>
                    <li>
                        <h2 class="ct-footer-list-header">EVENTS</h2>
                        <ul style={{marginTop:"1rem"}}>
                            
                        </ul>
                    </li>
                    <li>
                        <h2 class="ct-footer-list-header">OUR PARTNERS</h2>
                        <ul>
                            <li style={{marginTop:"1rem"}}>
                                <a target="_blank" href="https://www.bitsaa.org/">BITSAA</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.worldwildlife.org/">World Wildlife Fund</a>
                            </li>
                            <li>
                                <a target="_blank" href="http://dishafoundationindia.in/">Disha Foundation</a>
                            </li>
                            <li>
                                <a target="_blank" href="http://www.deepalaya.org/">Deepalaya</a>
                            </li>
                            <li>
                                <a target="_blank" href="http://www.tenderheartngo.org/">Tender Heart</a>
                            </li>
                            <li>
                                <a target="_blank" href="http://www.umangindia.org/">Umang Jaipur</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="ct-footer-post">
                <div class="alt_container">
                    <div className="developersLink">
                        <Link to={"/developers"} exact={true}>Meet the Developers</Link>
                    </div>
                    <div class="inner-right">
                            <ul>
                                <li>
                                    <a target="_blank" href="https://www.facebook.com/nssbits/">Facebook</a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://instagram.com/nssbitspilani?utm_medium=copy_link">Instagram</a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.linkedin.com/company/nss-bits-pilani">LinkedIn</a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://twitter.com/nssbits?s=09">Twitter</a>
                                </li>
                            </ul>
                    </div>
                    <div class="inner-right-500">
        
                                <div>
                                    <a target="_blank" href="https://www.facebook.com/nssbits/">Facebook</a>
                                </div>
                                <div>
                                    <a target="_blank" href="https://instagram.com/nssbitspilani?utm_medium=copy_link">Instagram</a>
                                </div>
                                <div>
                                    <a target="_blank" href="https://www.linkedin.com/company/nss-bits-pilani">LinkedIn</a>
                                </div>
                                <div>
                                    <a target="_blank" href="https://twitter.com/nssbits?s=09">Twitter</a>
                                </div>
    
                    </div>
                    <div class="inner-left">
                        <p>
                            © 2021 NSS BITS PILANI. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;