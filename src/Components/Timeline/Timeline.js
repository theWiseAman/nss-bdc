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
                loop={0}
                words={['Steps To Donate']}
            />
        </h1>
        <ul>
            <li>
                <div className="date">Step 1</div>
                <div className="title"></div>
                <div className="descr">Reach Old SAC (Right-wing of SAC).</div>
            </li>
            <li>
                <div className="date">Step 2</div>
                <div className="title"></div>
                <div className="descr">Register & complete the donor’s form at the registration counter.</div>
            </li>
            <li>
                <div className="date">Step 3</div>
                <div className="title"></div>
                <div className="descr">Check Body Mass Index(BMI).</div>
            </li>
            <li>
                <div className="date">Step 4</div>
                <div className="title"></div>
                <div className="descr">Have your blood type and hemoglobin checked by the doctor.</div>
            </li>
            <li>
                <div className="date">Step 5</div>
                <div className="title"></div>
                <div className="descr">Collect blood bags & go to the donation site.</div>
            </li>
            <li>
                <div className="date">Step 6</div>
                <div className="title"></div>
                <div className="descr">Donate blood under the supervision of doctors.</div>
            </li>
            <li>
                <div className="date">Step 7</div>
                <div className="title"></div>
                <div className="descr">Take a rest for a few minutes.</div>
            </li>
            <li>
                <div className="date">Step 8</div>
                <div className="title"></div>
                <div className="descr">Enjoy the refreshments.</div>
            </li>
            <li>
                <div className="date">Step 9</div>
                <div className="title"></div>
                <div className="descr">Collect Donor's card.</div>
            </li>
            <li>
                <div className="date">Step 10</div>
                <div className="title"></div>
                <div className="descr">Exit Old Sac.</div>
            </li>
        </ul>
      </div>
);

export default Timeline;