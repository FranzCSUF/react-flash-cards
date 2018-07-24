import React from 'react'

export default function ViewCards(props) {
  const numFlashcards = props.flashcards.length
  return (
    <div className="card-section">
      {props.view === "Cards" && numFlashcards > 0 &&
        props.flashcards.map((card, index) => {
          return (
            <div className={props.view === "Cards" ? "card text-white bg-dark mb-3" : "hidden"} id="flashcard" key={index}>
              <div className="card-header"></div>
              <div className="card-body">
                <h5 className="card-title">{card.question}</h5>
                <p className="card-text">{card.answer}</p>
              </div>
            </div>
          )
        })
      }
      {props.view === "Cards" && numFlashcards === 0 &&
        <div className="card no-flash-container">
          <div className="card-body no-flash">
            <h5 className="card-title">You have no flashcards.</h5>
            <a href="#" className="btn btn-primary create-button"  onClick={props.createOnClick}>Make One</a>
          </div>
        </div>
      }
    </div>
  )
}

