import React from 'react'
import Navigation from './nav-bar'
import CreateCard from './create-card'
import ViewCards from './view-cards'
import EditCard from './edit-card'
import PracticeCards from './practice-cards'

export default class FlashCardApp extends React.Component {
  constructor(props) {
    super(props)
    const view = window.localStorage.getItem('view')
    const flashCards = window.localStorage.getItem('flashcards')
    const editIndex = window.localStorage.getItem('edit')
    this.state = {
      view: JSON.parse(view) || 'New',
      editIndex: JSON.parse(editIndex) || null,
      flashcards: JSON.parse(flashCards) || [],
    }
    this.handleSave = this.handleSave.bind(this)
    this.handleClickCards = this.handleClickCards.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSaveEdit = this.handleSaveEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handlePractice = this.handlePractice.bind(this)
  }
  componentDidMount() {
    window.addEventListener('beforeunload', event => {
      for (var key in this.state) {
        localStorage.setItem(key, JSON.stringify(this.state[key]))
      }
    })
  }
  handleSave(event) {
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
  handleCreate() {
    this.setState({view: 'New'})
  }
  handlePractice() {
    this.setState({view: 'Practice'})
  }
  handleEdit(event) {
    const index = event.target.getAttribute('data-index')
    this.setState({
      view: "Edit",
      editIndex: index
    })
  }
  handleSaveEdit(event) {
    event.preventDefault()
    const cardForm = event.target
    const formData = new FormData(cardForm)
    const cardObj = {}
    const {editIndex} = this.state
    for (var pair of formData.entries()) {
      cardObj[pair[0]] = pair[1]
    }
    const flashCardStateCopy = this.state.flashcards.slice(0)
    flashCardStateCopy.splice(editIndex, 1, cardObj)
    this.setState({
      view: "Cards",
      flashcards: flashCardStateCopy})
  }
  handleDelete(event) {
    const index = event.target.getAttribute('data-index')
    const flashCardStateCopy = this.state.flashcards.slice(0)
    flashCardStateCopy.splice(index, 1)
    this.setState({
      flashcards: flashCardStateCopy
    })
  }

  render() {
    const {view, flashcards, editIndex} = this.state
    const cardToEdit = flashcards[editIndex]
    return (
      <div>
        <Navigation
          handleClickCards={this.handleClickCards}
          handleCreate={this.handleCreate}
          handlePractice={this.handlePractice}
          view={view}/>
        {view === 'New' && <CreateCard
          handleSave={this.handleSave}
          view={view}/>
        }
        {view === 'Edit' && <EditCard
          handleSaveEdit={this.handleSaveEdit}
          view={view}
          cardToEdit={cardToEdit}
          />
        }
        {view === 'Cards' && <ViewCards
          flashcards={flashcards}
          handleCreate={this.handleCreate}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}/>
        }
        {view === 'Practice' && <PracticeCards
          flashcards={flashcards}/>
        }
      </div>
    )
  }
}
