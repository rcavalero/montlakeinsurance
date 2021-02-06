import React from "react";
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';


function Contact() {
    return (
        <div className="colorbackground">
            <div className="container mt-3">
                <div>
                    <ContactForm />
                {/* </div>
                <div className="container"> */}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Contact;