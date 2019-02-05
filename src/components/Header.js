import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header className="flex-container flex-split margin-bottom-lg">
        <div>
          <div className="flex-content">
            <Link to="/"><h1>Myles Enriquez</h1></Link>
            <p className="font-color-violet">Frontend Engineer</p>
            <div>
              <Link to="/resume/" className="link-btn">resume</Link>
              <a className="link-btn" href="https://github.com/enriquezm">github</a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-content">
            <p className="font-override">v1.1</p>
          </div>
        </div>
      </header>
  )
}

export default Header