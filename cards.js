import React from 'react'
import * as queryString from './query-string'

function Card(props) {
  return (
    <div className="card text-white bg-dark mb-3 flash-card" key={props.index}>
      <div className="card-header">{props.topic}</div>
      <div className="card-body">
        <h5 className="card-title">{props.question}</h5>
        <p className="card-text">{props.answer}</p>
        <div className="edit-and-delete-icons">
          <i className="far fa-trash-alt delete-icon float-right" data-index={props.index} onClick={props.handleDelete}></i>
          <a href={'#edit-card' + queryString.stringify({'cardindex': props.index + 1})}>
            <i className="far fa-edit edit-icon float-right" data-index={props.index} onClick={props.handleEdit}></i>
          </a>
        </div>
      </div>
    </div>
  )
}
function NoCardMessage(props) {
  return (
    <div className="card no-flash-container">
      <div className="card-body no-flash-cards-message">
        <h5 className="card-title">You have no flashcards.</h5>
        <a href="#new-card" className="btn btn-primary" id="make-flashcard-button" onClick={props.handleCreate}>Make One</a>
      </div>
    </div>
  )
}
export default function Cards(props) {
  const numFlashcards = props.flashcards.length
  return (
    <div className="container card-container col-md-4">
      {numFlashcards > 0 &&
        props.flashcards.map((card, index) => <Card
          key={index}
          index={index}
          topic={card.topic}
          question={card.question}
          answer={card.answer}
          handleEdit={props.handleEdit}
          handleDelete={props.handleDelete}/>)}
      {numFlashcards === 0 &&
        <NoCardMessage
          handleCreate={props.handleCreate}/>
      }
    </div>
  )
}
