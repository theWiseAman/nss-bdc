import "./Loader.scss";

const Loader = () => (
    <div className="Loader">
        <div className="image">
            <img src="/assets/BLOOD_DONATION_CAMP.jpeg" />
        </div>
        <div id="preloader">
            <section className="text-1">
                <li className="text-1a"> <b>YOU</b> DONT NEED TO BE A DOCTOR</li>
            </section>
            <section className="text-2">
                <li className="text-2a">TO SAVE <b>LIVES</b></li> 
            </section>
            <section className="text-3">
                <li className="text-3a">JUST DONATE <b>BLOOD</b></li>
            </section>
        </div>
    </div>
);

export default Loader;