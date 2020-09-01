import React from "react";
import "../pages/styles/home.css";


function Home() {
    return (
        <div className="background">
            <div className="container">
            <div className="row textrow">
                    <div className="col">
                    {/* <div className="col-xs-12 col-md-7 col-lg-8"> */}
                  <div className="card-body align-center">
                    <p className="card-text text-justify text-dark">
                    The Montlake Insurance Group is a Personal Lines focused insurance brokerage, based in Seattle, WA.  Thomas Buck (Principal/Founder), and his team, partner with a variety of preferred insurance companies, which enables the Montlake Insurance Group to deliver an array of coverage, carrier and pricing options to its current and prospective clients.  Homeowners, Condominium, Landlord/Dwelling Fire, Renters, Personal Automobile, Personal Umbrella, Watercraft, Earthquake and Flood, are the primary lines of insurance coverage that the Montlake Insurance  Group considers to be its expertise. 
                    </p>
                  </div>
                </div>
            </div>
            <div className="row logorow justify-content-center">
            <div className="col-4">
                    </div>
                    <div className="col-4">
                        <img src={require("../images/montlakeinsgrplogo.png")} className="logo" alt="MontlakeLogo"></img>
                    </div>
                    <div className="col-4">
                    </div>
                </div>
                <div className="row tagline">
                    <div className="col text-center">
                        <h3>"Your Residential Property Specialist"</h3>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default Home;