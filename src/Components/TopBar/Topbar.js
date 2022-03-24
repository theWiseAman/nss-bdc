import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import classes from "./Topbar.scss";

const Topbar = () => {

    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" variant="light" className={`${classes.navBarTop} navBarTop px-4`}>
                <Navbar.Brand className={`${classes.brand} brand`}>
                    <a href={"/"} exact={true}>
                        <div className={`${classes.logo} logo`} style={{ display: "flex", alignItems: "center" }}>
                        
                            <div>
                                <a href='/'>
                                    <img className={`${classes.bdcLogo} bdcLogo`} src="/assets/logo_bdc.svg" />
                                </a>
                                <a href='https://nssbitspilani.org/' target='_blank'>
                                    <img className={`${classes.nssLogo} nssLogo ms-2 px-2`} src="/assets/nss_84.png" />
                                </a>
                            </div>
                            <a href='https://nssbitspilani.org/' target='_blank'>

                                <div className={`${classes.logoName} logoName`} style={{ display: "flex", alignItems: "center"}}>
                                    <div className={`${classes.nss} nss`}>
                                        NSS
                                    </div>
                                    <div style={{display: "flex", flexDirection: "column", marginLeft: "0.2rem"}}>
                                        <div className={`${classes.bits} bits`}>
                                            BITS
                                        </div>
                                        <div className={`${classes.bits} bits`}>
                                            PILANI
                                        </div>
                                    </div>
                                </div>                
                            </a>
                        </div>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ marginLeft: 'auto'}}>
                        <Nav className={`${classes.links_top} col-md-auto links_top`}>
                            <a href={"/"} exact={true} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Home</a>
                            <a href={"#steps-to-donate"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Steps To Donate</a>
                            <a href={"#dos-and-donts"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Do's and Don'ts</a>
                            <a href={"#gallery"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Gallery</a>
                            <a href={"#contact-us"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Contact Us</a>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </nav>
    );
}

export default Topbar;