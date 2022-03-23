import "./timeline.scss"
import { Typewriter } from 'react-simple-typewriter';

const Timeline = () => (
    <div className="timeline_container" id="steps-to-donate">
        <h1>
            <Typewriter 
                cursor
                cursorStyle='_'
                typeSpeed={60}
                deleteSpeed={30}
                delaySpeed={1000}
                loop={1}
                words={['Steps To Donate']}
            />
        </h1>
        <ul>
            <li>
                <div className="date">Step 1</div>
                <div className="title">Entry</div>
                <div className="descr">Reach the Old SAC (Right-wing of SAC).</div>
            </li>
            <li>
                <div className="date">Step 2</div>
                <div className="title">Registration</div>
                <div className="descr">Register and complete the donor's form at the registration counter.</div>
            </li>
            <li>
                <div className="date">Step 3</div>
                <div className="title">BMI Calculation</div>
                <div className="descr">Get your Body Mass Index(BMI).</div>
            </li>
            <li>
                <div className="date">Step 4</div>
                <div className="title">Blood Checkup</div>
                <div className="descr">Make sure to have your blood type and hemoglobin checked by the doctor.</div>
            </li>
            <li>
                <div className="date">Step 5</div>
                <div className="title">Blood bag</div>
                <div className="descr">Collect your blood bag and go to the donation site.</div>
            </li>
            <li>
                <div className="date">Step 6</div>
                <div className="title">Waiting Area</div>
                <div className="descr">Incase the doctors are unavailable for the blood collection, be calm and wait for your turn.</div>
            </li>
            <li>
                <div className="date">Step 7</div>
                <div className="title">Blood donation</div>
                <div className="descr">Take care you Donate your blood under the supervision of doctors.</div>
            </li>
            <li>
                <div className="date">Step 8</div>
                <div className="title">Rest for a while</div>
                <div className="descr">Take a rest for a few minutes.</div>
            </li>
            <li>
                <div className="date">Step 9</div>
                <div className="title">Refreshments</div>
                <div className="descr">Enjoy the refreshments.</div>
            </li>
            <li>
                <div className="date">Step 10</div>
                <div className="title">Donor's card</div>
                <div className="descr">Remember to collect your donor card before exiting the Old SAC.</div>
            </li>
        </ul>
      </div>
);

export default Timeline;