import React from "react";
import "./style.css"



function Footer() {
    return (
        <div className="footer fixed-bottom">

            <div className="container footercontent h-100 w-75 ">
                <div className="row">

                    <div className="col-md-5 col-lg-3">
                        <p className="foot-text text-left ">
                            206.419.7512 </p>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <p className="foot-text text-middle ">
                            thomas@montlakeinsurancegroup.com </p>
                    </div>
                    <div className="col-md-5 col-lg-5">
                        <p className="foot-text text-right" >
                            2900 E Blakeley St, Ste 202, Seattle, WA 98105 </p>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Footer;