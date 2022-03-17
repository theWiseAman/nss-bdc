import './Developers.scss';

const Developers = () => {
    
    return (
        <div>
            <img style={{ position: "absolute", right: "5%", top: "9.5rem", zIndex: "-1" }} className="webImage" src="/assets/ellipse_yellow.svg"></img>
            <img style={{ position: "absolute", right: "5%", top: "48.5rem", zIndex: "-1" }} className="mobImage" src="/assets/ellipse_yellow.svg"></img>
            <img style={{ position: "absolute", left: "0%", top: "12rem", zIndex: "-1" }} src="/assets/magenta_blob.svg"></img>
            <div className="devHead">
                <h1>Meet the developers</h1>
            </div>
            <div className="devContainer">
                <div className="devCard">
                    <div className="content">
                        <div className="imgBx"><img src="assets/Photo_of_Aman.jpg" width="250px"></img></div>
                        <div className="contentBx">
                            <h3>Aman Kumar Shukla<br></br><span>Frontend Developer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a href="https://github.com/theWiseAman"><img src="assets/GitLogo.png" width="32px"></img></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/aman-k-646b17186/"><img src="assets/image 11.png" width="32px"></img></a>
                        </li>
                    </ul>
                </div>

                <div className="devCard">
                    <div className="content">
                        <div className="imgBx"><img src="assets/nachiket_pic.jpeg" width="250px"></img></div>
                        <div className="contentBx">
                            <h3>Nachiket Kotalwar<br></br><span>Frontend Developer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a href="https://github.com/PrecedentBrute"><img src="assets/GitLogo.png" width="32px"></img></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/nachiket-kotalwar-03b15a1bb/"><img src="assets/image 11.png" width="32px"></img></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Developers;