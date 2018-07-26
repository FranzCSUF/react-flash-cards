import React from 'react'

export default class PracticeCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: props.flashcards,
      currentCard: 0
    }
  }
}



  // return (
  //   <div className="card text-white bg-dark mb-3" id="flashcard" key={props.index}>
  //     <div className="card-header"></div>
  //     <div className="card-body">
  //       <h5 className="card-title">{props.question}</h5>
  //       <p className="card-text">{props.answer}</p>
  //       <i className="far fa-edit" data-index={props.index} onClick={props.handleEdit} id="edit"></i>
  //     </div>
  //   </div>
  // )
