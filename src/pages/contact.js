import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div className="rsvp-form">
        <div className="rsvp-body">
          <h1 className="section-header">RSVP</h1>
          <form
            name="RSVP"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            <div className="rsvp-name">
              <label>
                Name(s):<br />
                <input type="text" name="name" onChange={this.handleChange} required />
              </label>
            </div>
            <div className="rsvp-attendance">
              <label>Attendance:
                <div className="rsvp-attendance-options">
                  <div className="rsvp-attendance-option_1">
                    <input type="radio" name="RSVP Response" value="Yes" onChange={this.handleChange} required /> Definitely!
                  </div>
                  <div className="rsvp-attendance-option_2">
                    <input type="radio" name="RSVP Response" value="No" onChange={this.handleChange} required /> Regretfully can't attend
                  </div>
                </div>
              </label>
            </div>
            <div className="rsvp-guests">
                <label>Total Guests:
                    <input type="number" name="Total number of Guests" min="0" max="8" onChange={this.handleChange} required />
                </label>    
            </div>
            <div className="rsvp-message">
              <label>
                Message:<br />
                <textarea name="message" rows="4" onChange={this.handleChange} />
              </label>
            </div>
            <div className="rsvp-submit">
              <button type="submit">Send</button>
            </div>
            <div data-netlify-recaptcha></div>
          </form>
          </div>
      </div>
    );
  }
}