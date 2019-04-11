import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = (props) => {
  return (
    <header>
      <nav>
        <Link to="/">
          <h5>thatguythat.codes</h5>
        </Link>
        <div>
          <Link to="/resume/">Resume</Link>
        </div>
      </nav>
      {
        props.title ? <section className="padding-xlg centered"><h1>{props.title}</h1><p>{props.description}</p></section> : <section className="padding-xlg centered"><h1>Hey there!</h1><p>My name's Myles and I'm a Frontend Engineer.</p></section>
      }
    </header>
  )
}

export default Header