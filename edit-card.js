import React from 'react'

export default function EditCard (props) {
  return (
    <div className="create-card-form">
      <form onSubmit={props.handleSaveEdit} className="border card-body card-form">
        <div className="form-group flashcard-form-labels">
          <label htmlFor="inputQuestion">Edit Question</label>
          <input type="text" name="question" className="form-control" defaultValue={props.cardToEdit.question}/>
        </div>
        <div className="form-group flashcard-form-labels">
          <label htmlFor="inputAnswer">Edit Answer</label>
          <input type="text" name="answer" className="form-control" defaultValue={props.cardToEdit.answer}/>
        </div>
        <div id="save-button">
        <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  )
}
