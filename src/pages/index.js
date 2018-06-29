import React from 'react'
import Link from 'gatsby-link'
import Countdown from 'react-countdown-now'
import ContactForm from '../components/rsvp-form'

// Wedding Countdown timer

const Completionist = () => <span>wedding message goes here, when countdown reaches zero</span>;
// Renderer callback with condition
const renderer = ({ days, hours, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days} Days and {hours} Hours until we say I do</span>;
  }
};

const IndexPage = () => (

  <div>
    <div>
    <Countdown
    date={"Dec 23, 2018 14:00:00"}
    renderer={renderer}
    />
    </div>
    <div>
    <ContactForm />
    </div>
  </div>
)

export default IndexPage
