import React from 'react'

export default function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Cards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">New</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
