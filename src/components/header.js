import React from 'react'
import Link from 'gatsby-link'
import HeaderLogo from '../images/rc_logo_with-date.svg'

const Header = () => (
  <div>
    <div className="menu">
      <div className="menu-logo">
        <Link to="/"><img className="header-logo" src={HeaderLogo} alt="header-logo" /></Link>
      </div>
      <nav className="menu-items">
          <ul>
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
