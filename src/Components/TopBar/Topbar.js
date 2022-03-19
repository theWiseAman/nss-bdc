import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import classes from "./Topbar.scss";

const Topbar = () => {

    return (
        <nav className='container-fluid'>
            <Navbar collapseOnSelect expand="lg" variant="light" className={`${classes.navBarTop} navBarTop`}>
                <Navbar.Brand className={`${classes.brand} brand`}>
                    <NavLink to={"/"} exact={true}>
                        <div className={`${classes.logo} logo`} style={{ display: "flex", alignItems: "center" }}>                        
                            <div>
                                <img className={`${classes.nssLogo} bdclogo`} src="/assets/BLOOD_DONATION_CAMP.jpeg" />
                                <img className={`${classes.nssLogo} nssLogo`} src="/assets/nss_84.png" />
                            </div>

                            <div style={{ display: "flex", alignItems: "center"}}>
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
                        </div>
                    </NavLink>
                </Navbar.Brand>

                <Nav className={`${classes.links_top} links_top`}>
                    <NavLink to={"/"} exact={true} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Home</NavLink>
                    <NavLink to={"/aboutus"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Mythbusters</NavLink>
                    <NavLink to={"/aboutus"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Steps To Donate</NavLink>
                    <NavLink to={"/contactus"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Contact Us</NavLink>
                </Nav>
                {/* <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    
                    </Nav>
                    <Nav className={`${classes.links_top} links_top`}>
                        <NavLink to={"/"} exact={true} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Home</NavLink>
                        <NavLink to={"/aboutus"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">About Us</NavLink>
                        <NavLink to={"/departments"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Departments</NavLink>
                        <NavLink to={"/events"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Events</NavLink>
                        <NavLink to={"/resources"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Resources</NavLink>
                        <NavLink to={"/recruitments"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Recruitments</NavLink>
                        <NavLink to={"/contactus"} className="top_link m-lg-1 m-xl-2 p-lg-1 p-xl-2" activeClassName="active_top_link">Contact Us</NavLink>
                    </Nav>
                </Navbar.Collapse> */}
            </Navbar>
        </nav>
    );
}

export default Topbar;