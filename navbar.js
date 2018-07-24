import React from 'react'

export default function Navigation(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Cram Cards</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#" onClick={props.cardsOnClick}>Cards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={props.createOnClick}>Create New</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
