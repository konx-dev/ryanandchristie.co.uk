import React from "react";
import PepperAssistant from "../images/thanks-trio.jpg";


export default () => (
  <div className="thanks-container">
    <div className="thanks-header">Thank you!</div>
    <div className="thanks-subheader">Your RSVP details have been sent.</div>
    <img className="thanks-assistants" src={PepperAssistant} alt="Our Wedding" />
  </div>
);