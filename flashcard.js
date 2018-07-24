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
    this.handleClickSave = this.handleClickSave.bind(this)
    this.handleClickCards = this.handleClickCards.bind(this)
    this.handleClickCreate = this.handleClickCreate.bind(this)
  }
  componentDidMount() {
    window.addEventListener('beforeunload', event => {
      for (var key in this.state) {
        localStorage.setItem(key, JSON.stringify(this.state[key]))
      }
    })
  }
  handleClickSave(event) {
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
  }
  handleClickCards() {
    this.setState({view: 'Cards'})
  }
  handleClickCreate() {
    this.setState({view: 'New'})
  }
  render() {
    const {view} = this.state
    const {flashcards} = this.state
    return (
      <div>
        <Navigation handleClickCards={this.handleClickCards} handleClickCreate={this.handleClickCreate}/>
        {view === 'New' &&
          <CreateCard handleClickSave={this.handleClickSave} view={view}/>
        }
        {view === 'Cards' &&
          <ViewCards flashcards={flashcards} handleClickCreate={this.handleClickCreate}/>
        }
      </div>
    )
  }
}
