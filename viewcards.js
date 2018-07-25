import React from 'react'

function InsertCards(props) {
  return (
    <div className="card text-white bg-dark mb-3" id="flashcard" key={props.index}>
      <div className="card-header"></div>
      <div className="card-body">
        <h5 className="card-title">{props.question}</h5>
        <p className="card-text">{props.answer}</p>
        <i className="far fa-edit" data-index={props.index} onClick={props.handleClickEdit} id="edit"></i>
      </div>
    </div>
  )
}
function ShowMessage(props) {
  return (
    <div className="card no-flash-container">
    <div className="card-body no-flash">
      <h5 className="card-title">You have no flashcards.</h5>
      <a href="#" className="btn btn-primary create-button"  onClick={props.handleClickCreate}>Make One</a>
    </div>
  </div>
  )
}
export default function ViewCards(props) {
  const numFlashcards = props.flashcards.length
  return (
    <div className="card-section">
      {numFlashcards > 0 &&
        props.flashcards.map((card, index) => <InsertCards
          key={index}
          index={index}
          question={card.question}
          answer={card.answer}
          handleClickEdit={props.handleClickEdit}/>)}
      {numFlashcards === 0 &&
        <ShowMessage
        handleClickCreate={props.handleClickCreate}/>
      }
    </div>
  )
}

