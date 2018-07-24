import React from 'react'

function InsertCards(props) {
  return (
    <div className={props.class} id="flashcard" key={props.index}>
      <div className="card-header"></div>
      <div className="card-body">
        <h5 className="card-title">{props.question}</h5>
        <p className="card-text">{props.answer}</p>
      </div>
    </div>
  )
}

function ShowMessage(props) {
  return (
    <div className="card no-flash-container">
    <div className="card-body no-flash">
      <h5 className="card-title">You have no flashcards.</h5>
      <a href="#" className="btn btn-primary create-button"  onClick={props.createOnClick}>Make One</a>
    </div>
  </div>
  )
}

export default function ViewCards(props) {
  const numFlashcards = props.flashcards.length
  return (
    <div className="card-section">
      {props.view === "Cards" && numFlashcards > 0 &&
        props.flashcards.map((card, index) => <InsertCards
          view={props.view}
          key={index}
          question={card.question}
          class={props.view === "Cards" ? "card text-white bg-dark mb-3" : "hidden"}
          answer={card.answer}/>)}
      {props.view === "Cards" && numFlashcards === 0 &&
        <ShowMessage
        createOnClick={props.createOnClick}/>
      }
    </div>
  )
}

