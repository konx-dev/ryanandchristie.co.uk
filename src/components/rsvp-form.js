import React from 'react'
import Link from 'gatsby-link'

const ContactForm = () => (
    <div className="contact--container">
        <div className="contact--wrapper">

          <div className="contact--message">
            <h3>Contact Me</h3>
            <p>Pop me a message if you would like to work on a project together, or just want to chat.</p>
          </div>

          <div className="contact--fields">
    
            <form 
              name="RSVP-ContactForm" 
              method="POST"  
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
            >
                <p>
                    <label>Name(s):<input type="text" name="Attendees" required /></label>   
                </p>
                <p>
                    <label>Attendance:
                        <input type="radio" name="RSVP Response" value="Attending" required />Definitely!
                        <input type="radio" name="RSVP Response" value="Not Attending" required />Regretfully can't attend
                    </label>
                </p>
                <p>
                    <label>Total Guests:
                        <input type="number" name="Total number of Guests" min="0" max="8" required />
                    </label>    
                </p>
                <p>
                    <label>Please specify any dietary, mobility requirements or a message below: <textarea name="Special Requirements / Personal Message" ></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>

          </div>
        </div>
    </div>
)

export default ContactForm
