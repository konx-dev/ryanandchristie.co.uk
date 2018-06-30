import React from 'react'
import Link from 'gatsby-link'
import Countdown from 'react-countdown-now'

// Wedding Countdown timer

const Completionist = () => <span>wedding message goes here, when countdown reaches zero</span>;
// Renderer callback with condition
const renderer = ({ days, hours, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days} Days and {hours} Hours</span>;
  }
};

const IndexPage = () => (

  <div>
    <div className="countdown__body">
      <div className="countdown__clock">
        <Countdown
        date={"Dec 23, 2018 14:00:00"}
        renderer={renderer}
        />
      </div>
      <div className="contact--container">
        <div className="contact--wrapper">

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
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label htmlFor="bot-field">Don’t fill this out:{' '}
                  <input name="bot-field" /> 
                  </label> 
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
                    <button type="submit">Submit</button>
                </p>
            </form>

          </div>
        </div>
    </div>
    </div>
  </div>
)

export default IndexPage
