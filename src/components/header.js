import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="menu-container">
    <div className="menu">
      <div className="menu-logo">
          <img className="logo" alt="logo" />
      </div>
      <nav className="menu-items">
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/our-story">Our Story</Link></li>
              <li><Link to="/the-venue">The Venue</Link></li>
              <li><Link to="/on-the-day">On the Day</Link></li>
              <li><Link to="/photos">Photos</Link></li>
          </ul>
      </nav>
    </div>
</div>
)

export default Header
