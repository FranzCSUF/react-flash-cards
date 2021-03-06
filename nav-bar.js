import React from 'react'

function DropDownList(props) {
  return props.topics.map((topic, index) => <a className="dropdown-item" key={index} onClick={props.handleSelectedTopic} href="#practice">{topic}</a>)
}

export default function Navigation(props) {
  const cardsClass = props.view === 'Cards' ? 'nav-link nav-item active nav-labels' : 'nav-link nav-item nav-labels'
  const newClass = props.view === 'New' ? 'nav-link nav-item active nav-labels' : 'nav-link nav-item nav-labels'
  const practiceClass = props.view === 'Practice' ? 'nav-link dropdown-toggle nav-item active nav-labels' : 'nav-link dropdown-toggle nav-item nav-labels'
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand cram-cards-logo" href="#">Cram Cards</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto navigation-tabs">
          <li>
            <a className={cardsClass} href="#cards" onClick={props.handleClickCards}>Cards</a>
          </li>
          <li>
            <a className={newClass} href="#new-card" onClick={props.handleCreate}>Create New</a>
          </li>
          {props.flashcards.length > 0 &&
          <li className="nav-item dropdown">
            <a className={practiceClass} href="#" onClick={props.handlePractice} data-toggle="dropdown" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false" role="button">Let&apos;s Cram!</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" onClick={props.handleAll} href="#practice">All</a>
              <DropDownList
                topics={props.topics}
                handleSelectedTopic={props.handleSelectedTopic}/>
            </div>
          </li>
          }
        </ul>
      </div>
    </nav>
  )
}
