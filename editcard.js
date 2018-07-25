import React from 'react'

export default function EditCard (props) {
  return (
    <div className="create-form">
      <form onSubmit={props.handleClickSaveEdit} className="border card-body">
        <div className="form-group">
          <label htmlFor="inputQuestion">Edit Question</label>
          <input type="text" name="question" className="form-control" defaultValue={props.question}/>
        </div>
        <div className="form-group">
          <label htmlFor="inputAnswer">Edit Answer</label>
          <input type="text" name="answer" className="form-control" defaultValue={props.answer}/>
        </div>
        <div id="save-button">
        <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  )
}
