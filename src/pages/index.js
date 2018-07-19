import React from 'react'
import Link from 'gatsby-link'
import Countdown from 'react-countdown-now'
import ContactForm from '../pages/contact'
import OurWedding from '../images/titles/our-wedding.svg'
import TheVenue from '../images/titles/venue.svg'
import GiftIdeas from '../images/titles/gift-ideas.svg'
import RSVP from '../images/titles/RSVP.svg'

// Wedding Countdown timer

const Completionist = () => <span>December 23rd, 2018</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, completed }) => {

  if (completed) {

    // Render a completed state

    return <Completionist />;

  } else {

    // Render a countdown

    return <span>{days} Days &amp; {hours} hours</span>;

  }
};

const IndexPage = () => (

<div className="index-container">
  <div className="sec-container">
    <img className="sec-title" src={OurWedding} alt="Our Wedding" />
  </div>
  <div className="countdown__body">
    <div className="countdown__clock">
      <Countdown
      date={"Dec 23, 2018 14:00:00"}
      renderer={renderer}
      />
    </div>
  </div>
  <div className="sec-container">
    <img className="sec-sml" src={TheVenue} alt="The Venue" />
  </div>
  <div className="index-venue">
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
  <div className="sec-container">
    <img className="sec-med" src={GiftIdeas} alt="Gift Ideas" />
  </div>
  <div className="index-gift-message">
    <div className="index-gift-message__body">
      <p>The most important gift to us is having you share our special day.</p>
      <p>But if you wish to contribute in some other way, we would love a few pennies to put in our pot for our honeymoon trip after tying the knot.</p>
    </div>
  </div>
  <div>
    <div className="sec-container">
      <img className="sec-rsvp" src={RSVP} alt="RSVP" />
    </div>
    <div className="rsvp-message">
      Kindly respond by Friday, 31st August
    </div>
    <ContactForm />
  </div>
  <div className="index-notification">
    Please make sure the recaptcha is completed in order to successfully submit. If you have any issues with the form please contact or submit your RSVP information <a href="mailto:ryanandchristiewedding2018@gmail.com">here</a>
  </div>
</div>
)

export default IndexPage