import React from 'react'
import FlashcardBuild from './flashcardbuild'

export default class Flashcard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcard: []
    }
    this.saveOnClick = this.saveOnClick.bind(this)
  }

  saveOnClick(event) {
    event.preventDefault()
    const cardForm = event.target
    const formData = new FormData(cardForm)
    const cardObj = {}
    for (var pair of formData.entries()) {
      cardObj[pair[0]] = pair[1]
    }
    const flashCardStateCopy = this.state.flashcard.slice(0)
    flashCardStateCopy.push(cardObj)
    this.setState({flashcard: flashCardStateCopy})
    cardForm.reset()
  }

  render() {
    return (
      <FlashcardBuild saveOnClick={this.saveOnClick}/>
    )
  }
}
