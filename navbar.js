import React from 'react'

export default function Navigation(props) {
  const cardsClass = props.view === "Cards" ? "nav-link nav-item active underline" : "nav-link nav-item"
  const newClass = props.view === "New" ? "nav-link nav-item active underline" : "nav-link nav-item"
  const practiceClass = props.view === "Practice" ? "underline nav-link nav-item active" : "nav-link nav-item"
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Cram Cards</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto nav-list">
          <li>
            <a className={cardsClass} href="#" onClick={props.handleClickCards}>Cards</a>
          </li>
          <li>
            <a className={newClass} href="#" onClick={props.handleCreate}>Create New</a>
          </li>
          <li>
            <a className={practiceClass} href="#" onClick={props.handlePractice}>Let's Cram!</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
