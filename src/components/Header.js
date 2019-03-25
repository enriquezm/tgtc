import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = (props) => {
  return (
    <header className="flex-container flex-split margin-bottom-lg">
      <div class="flex-container">
        <div className="image-container"></div>
        <div className="flex-content">
          <Link to="/"><h1>Myles Enriquez</h1></Link>
          <p className="font-color-violet">Frontend Engineer</p>
          <div>
            {
              props.extraBtn ? <Link to="/" className="link-btn margin-right-sm">All Posts</Link> : ''
            }
            <Link to="/resume/" className="link-btn">Resume</Link>
            <a className="link-btn" href="https://github.com/enriquezm">Github</a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex-content">
          <p className="font-override" title="Hey you! Welcome to my site! :)">;)</p>
        </div>
      </div>
    </header>
  )
}

export default Header