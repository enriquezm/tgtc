import React from 'react'
import { Link } from 'gatsby'
import './Footer.css'

const Footer = () => (
  <footer>
    <ul>
      <li><a href="https://github.com/enriquezm">Github</a></li>
      <li><a href="https://www.linkedin.com/in/mylesenriquez/">LinkedIn</a></li>
      <li><a href="https://codepen.io/mylesenri/">Codepen</a></li>
    </ul>
    <p className="margin-top-sm">&copy;2019 <Link to="/">thatguythat.codes</Link>, All Rights Reserved.</p>
  </footer>
)

export default Footer