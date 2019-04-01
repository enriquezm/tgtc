import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = (props) => {
  return (
    <header>
      <nav>
        <Link to="/">
          <h5>TGTC</h5>
        </Link>
        <div>
          <Link to="/resume/">Resume</Link>
        </div>
      </nav>
      {
        props.title ? <section className="padding-xlg centered"><h1>{props.title}</h1><p>{props.description}</p></section> : <section className="padding-xlg centered"><h1>Hello!</h1><p>I'm a Frontend Engineer creating simple interfaces connected to data.</p></section>
      }
    </header>
  )
}

export default Header