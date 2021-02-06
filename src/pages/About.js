import React from "react";
import "../pages/styles/about.css";
import Footer from '../components/Footer';



function About() {
  return (
    <div className="colorbackground ">
      <div className="container">
        <div className="row align-middle">
          <div className="col">
            <div className="card m-5 ">
              <div className="row no-gutters align-items-center">
                <div className="col-xs-12 col-md-5 col-lg-4 h-100">
                  <img src={require("../images/buckfamily.jpg")} className="card-img myImg" alt="Buck Family"></img>
                </div>

                <div className="col-xs-12 col-md-7 col-lg-8">
                  <div className="card-body">
                    <p className="card-text text-justify ">Thomas has worked in the Property/Casualty insurance industry since 2012, in both personal and commercial lines capacities.  After developing a focus in the personal lines space, Thomas founded Montlake Insurance Group in 2020.
                        <br /><br />With a specialization in residential Property coverage (e.g. Homeowners, Condominium, Landlord/Dwelling Fire, etc.), Thomas partners with mortgage and real estate professionals, in order to assist prospective clients as they navigate the homebuying process.
                        <br /><br />Thomas is a Seattle native (Lakeside School, Class of 2003; University of Washington, Class of 2007), and lives in the Northeast Seattle area with his wife and two young daughters.  In his downtime, Thomas enjoys spending time with his family, running, and playing golf.
                        <br /><br />Thomas’ civic activities include his role as a member of The Salvation Army of King County advisory board, and as a Big Brothers Big Sisters of Puget Sound mentor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default About;