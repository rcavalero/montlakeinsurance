import React, { useState } from "react";
import axios from "axios";
import "./style.css"


function ContactForm() {
  /* NEW: Input state handling vvvv */
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };
  /* End input state handling ^^^^ */

  // Server state handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      setInputs({
        name: "",
        email: "",
        message: ""
      });
    }
  };
  const handleOnSubmit = event => {
    event.preventDefault();
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/mrgywvad",
      data: inputs
    })
      .then(r => {
        handleServerResponse(true, "Thanks!");
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  return (
    <div className="container w-50 pt-5">
      <h1 className = "text-center contact-text">Contact Us</h1>
      <form onSubmit={handleOnSubmit}>
      <div className="form-group">
      <label className="contact-text" htmlFor="name">Name:</label>
        <input
          className="form-control"
          id="name"
          type="name"
          name="name"
          required
          onChange={handleOnChange}
          value={inputs.name}
        />
        </div>
        <div className="form-group">
        <label className="contact-text" htmlFor="email">Email:</label>
        <input
          className="form-control"
          id="email"
          type="email"
          name="email"
          required
          onChange={handleOnChange}
          value={inputs.email}
        />
        </div>
        <div className="form-group">
        <label className="contact-text" htmlFor="message">Message:</label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          required
          onChange={handleOnChange}
          value={inputs.message}
        ></textarea>
        </div>
        <button type="submit" disabled={serverState.submitting}>
          Submit
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;