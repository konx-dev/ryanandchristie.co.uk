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
  <div>
    <ContactForm />
  </div>
</div>
)

export default IndexPage