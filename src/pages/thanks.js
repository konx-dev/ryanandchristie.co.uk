import React from "react";
import PepperAssistant from "../images/peppers-assistant.jpg";


export default () => (
  <div className="thanks-container">
    <div className="thanks-header">Thank you!</div>
    <div className="thanks-subheader">Your RSVP details were successfully submitted and are now in the capable hands of this pair!</div>
    <img className="thanks-assistants" src={PepperAssistant} alt="Our Wedding" />
  </div>
);