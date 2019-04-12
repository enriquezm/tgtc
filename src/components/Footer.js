import React from 'react'
import { Link } from 'gatsby'
import {GitHub, Linkedin, Codepen} from 'react-feather'
import './Footer.css'

const Footer = () => (
  <footer>
    <ul>
      <li><a className="primary" href="https://github.com/enriquezm"><GitHub /></a></li>
      <li><a className="primary" href="https://www.linkedin.com/in/mylesenriquez/"><Linkedin /></a></li>
      <li><a className="primary" href="https://codepen.io/mylesenri/"><Codepen /></a></li>
    </ul>
    <p className="margin-top-md">&copy;2019 <Link to="/">thatguythat.codes</Link>, All Rights Reserved.</p>
  </footer>
)

export default Footer