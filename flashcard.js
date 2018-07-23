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

  saveOnClick() {
    const question = document.getElementById('question').value
    const answer = document.getElementById('answer').value
    const newCard = {question, answer}
    const flashCardStateCopy = this.state.flashcard.slice(0)
    flashCardStateCopy.push(newCard)
    this.setState({flashcard: flashCardStateCopy})
    console.log(this.state)
    document.getElementById('question').value = ''
    document.getElementById('answer').value = ''
  }
  render() {
    return (
      <FlashcardBuild saveOnClick={this.saveOnClick}/>
    )
  }
}
