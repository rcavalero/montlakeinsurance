import React from "react";
import "../pages/styles/home.css";
import Footer from '../components/Footer';



function Home() {
    return (
        <div className="background">
            <div className="container">
                <div className="row compname">
                    <div className="col text-center">
                        <h1 className="comp-text">MONTLAKE INSURANCE GROUP</h1>
                    </div>
                </div>
                <div className="row tagline">
                    <div className="col text-center">
                        <h5 className="tag-text">●RESIDENTIAL PROPERTY INSURANCE SPECIALIST●</h5>
                    </div>
                </div>
                <Footer /> 
            </div>
        </div>
    )
}

export default Home;