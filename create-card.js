import React from 'react'

export default function CreateCard (props) {
  return (
    <div className="create-card-form">
      <form onSubmit={props.handleSave} className="border card-body card-edit-form">
        <div className="form-group flashcard-form-labels">
          <label htmlFor="inputQuestion">Question</label>
          <input type="text" name="question" className="form-control"/>
        </div>
        <div className="form-group flashcard-form-labels">
          <label htmlFor="inputAnswer">Answer</label>
          <input type="text" name="answer" className="form-control"/>
        </div>
        <div id="save-button">
        <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  )
}
