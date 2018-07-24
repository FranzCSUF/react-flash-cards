import React from 'react'
import FlashcardBuild from './flashcardbuild'
import Navigation from './navbar'

export default class Flashcard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'New',
      flashcards: []
    }
    this.saveOnClick = this.saveOnClick.bind(this)
    this.cardsOnClick = this.cardsOnClick.bind(this)
  }

  saveOnClick(event) {
    event.preventDefault()
    const cardForm = event.target
    const formData = new FormData(cardForm)
    const cardObj = {}
    for (var pair of formData.entries()) {
      cardObj[pair[0]] = pair[1]
    }
    const flashCardStateCopy = this.state.flashcards.slice(0)
    flashCardStateCopy.push(cardObj)
    this.setState({flashcards: flashCardStateCopy})
    cardForm.reset()
    console.log(this.state)
  }

  cardsOnClick (event) {
    this.setState({view: 'Cards'})
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Navigation cardsOnClick={this.cardsOnClick}/>
        <FlashcardBuild saveOnClick={this.saveOnClick}/>
      </div>
    )
  }
}
