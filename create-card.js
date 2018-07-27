import React from 'react'

export default function CreateCard (props) {
  return (
    <div className="create-form">
      <form onSubmit={props.handleSave} className="border card-body">
        <div className="form-group">
          <label htmlFor="inputQuestion">Question</label>
          <input type="text" name="question" className="form-control"/>
        </div>
        <div className="form-group">
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
