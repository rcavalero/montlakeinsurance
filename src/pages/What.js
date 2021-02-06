import React from "react";
import "../pages/styles/what.css";
import Footer from '../components/Footer';



function What() {
  return (
    <div className="background">
      <div className="container d-flex align-items-center">
        {/* <div className="row w-75 "> */}
            <div className="container pt-5 w-75">
          {/* <div className="col "> */}
            {/* <div className="col-xs-12 col-md-7 col-lg-8"> */}
            <div className="card-body">
              <p className="card-text text-justify ">
                The Montlake Insurance Group is a Personal Lines focused insurance brokerage, based in Seattle, WA.  Thomas Buck (Principal/Founder), and his team, partner with a variety of preferred insurance companies, which enables the Montlake Insurance Group to deliver an array of coverage, carrier and pricing options to its current and prospective clients.  Homeowners, Condominium, Landlord/Dwelling Fire, Renters, Personal Automobile, Personal Umbrella, Watercraft, Earthquake and Flood, are the primary lines of insurance coverage that the Montlake Insurance  Group considers to be its expertise.
                    </p>
            {/* </div> */}
          </div>
          {/* </div> */}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default What;