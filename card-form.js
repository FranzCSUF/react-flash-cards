import React from 'react'

export default function CardForm (props) {
  return (
    <div className="create-card-form">
      <form onSubmit={props.handleSave} className="border card-body card-edit-form">
        <div className="form-group flashcard-form-labels">
          <label htmlFor="inputTopic">Topic</label>
          <input type="text" name="topic" className="form-control" defaultValue={props.view === 'Edit' ? props.cardToEdit.topic : ''}/>
        </div>
        <div className="form-group flashcard-form-labels">
          <label htmlFor="inputQuestion">Question</label>
          <input type="text" name="question" className="form-control" defaultValue={props.view === 'Edit' ? props.cardToEdit.question : ''}/>
        </div>
        <div className="form-group flashcard-form-labels">
          <label htmlFor="inputAnswer">Answer</label>
          <input type="text" name="answer" className="form-control" defaultValue={props.view === 'Edit' ? props.cardToEdit.answer : ''}/>
        </div>
        <div id="save-button">
        <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  )
}
