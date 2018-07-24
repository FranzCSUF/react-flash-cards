import React from 'react'
import Navigation from './navbar'
import CreateCard from './createcard'
import ViewCards from './viewcards'

export default class Flashcard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'New',
      flashcards: []
    }
    this.saveOnClick = this.saveOnClick.bind(this)
    this.cardsOnClick = this.cardsOnClick.bind(this)
    this.createOnClick = this.createOnClick.bind(this)
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
    console.log(this.state.flashcards)
  }

  cardsOnClick (event) {
    this.setState({view: 'Cards'})
    // console.log(this.state)
  }

  createOnClick (event) {
    this.setState({view: 'New'})
    console.log.bind(this.state)
  }

  render() {
    const appState = this.state
    const {view} = this.state
    const {flashcards} = this.state
    return (
      <div>
        <Navigation cardsOnClick={this.cardsOnClick} createOnClick={this.createOnClick}/>
        <CreateCard saveOnClick={this.saveOnClick} view={view}/>
        <ViewCards flashcards={flashcards} view={view} createOnClick={this.createOnClick}/>
      </div>
    )
  }
}
