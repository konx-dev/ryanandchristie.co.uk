import React from 'react'
import Link from 'gatsby-link'
import Countdown from 'react-countdown-now'
import ContactForm from '../pages/contact'

// Wedding Countdown timer

const Completionist = () => <span>wedding message goes here, when countdown reaches zero</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, completed }) => {

  if (completed) {

    // Render a completed state

    return <Completionist />;

  } else {

    // Render a countdown

    return <span>{days} Days &amp; {hours} hours until the big day!</span>;

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
  </div>
  <div className="index-venue">
    <div>
      SVG Header goes here
    </div>
    <div className="index-venue-header">
      Wedding &amp; Reception
    </div>
    <div className="index-venue-address">
      Donington Park Farmhouse<br></br>
      Melbourne Road<br></br>
      Isley Walton<br></br>
      Castle Donington<br></br>
      DE74 2RN<br></br>
    </div>
  </div>
  <div className="index-gift-message">
    <div>
      SVG Header goes here
    </div>
    <div className="index-gift-message__body">
      <p>The most important gift to us is having you share our special day.</p>
      <p>But if you wish to contribute in some other way, we would love a few pennies to put in our pot for our honeymoon trip after tying the knot.</p>
    </div>
  </div>
  <div>
    <div>
      SVG Header goes here
    </div>
    <div>
      Kindly respond by X
    </div>
    <ContactForm />
  </div>
  <div className="index-notification">
    Please make sure the recaptcha is completed in order to successfully submit. If you have any issues with the form please contact or submit your RSVP information <a href="mailto:ryanandchristiewedding2018@gmail.com">here</a>
  </div>
</div>
)

export default IndexPage