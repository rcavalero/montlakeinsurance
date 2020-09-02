import React from "react";
import { Link } from "react-router-dom";
import "./style.css"



function Navbar() {
  return (
    <nav className="navbar ">

      <div className="container">
        <div className="row w-100">
          <div className="col-sm-12 col-md-3 col-lg-8 h100 margin-auto">
            <div className="container navCont navLogo h-100 pr-3 flex-row navbar-nav align-items-center">
              {/* <p className = "text-light m-0"> */}
                {/* This will become the logo */}
                <img src={require("../../images/montlakeinsgrplogonav.png")} className="logo" alt="MontlakeLogo"></img>

            {/* Montlake Insurance Group - 206.555.1212 */}
              {/* </p> */}


              {/* <a className="nav-link pr-2" href="mailto:r.cavalero@comcast.net">Email</a>
              <a className="nav-link pl-2" href="tel:+12066013046" title="(206) 601-3046">Phone</a> */}
            </div>
          </div>

          {/* </div> */}

          <div className="col-md-5 col-lg-2">
            <div className="container navCont h-100 flex-row navbar-nav justify-content-center justify-content-between">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
            </Link>

            {/* <Link
              to="/home2"
              className={window.location.pathname === "/home2" ? "nav-link active" : "nav-link"}
            >
              Home2
            </Link> */}

            <Link
              to="/Contact"
              className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
            >
              Contact Us
            </Link>

            </div>
          </div>
        </div>
      </div>
    </nav>

)
}

export default Navbar;