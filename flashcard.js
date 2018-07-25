import React from 'react'
import Navigation from './navbar'
import CreateCard from './createcard'
import ViewCards from './viewcards'
import EditCard from './editcard'

export default class Flashcard extends React.Component {
  constructor(props) {
    super(props)
    const localView = window.localStorage.getItem('view')
    const localFlashCards = window.localStorage.getItem('flashcards')
    const localEdit = window.localStorage.getItem('edit')
    this.state = {
      view: JSON.parse(localView) || 'New',
      edit: JSON.parse(localEdit) || null,
      flashcards: JSON.parse(localFlashCards) || []

    }
    this.handleSave = this.handleSave.bind(this)
    this.handleClickCards = this.handleClickCards.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSaveEdit = this.handleSaveEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
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
  handleEdit(event) {
    const index = event.target.getAttribute('data-index')
    this.setState({
      view: "Edit",
      edit: index
    })
  }
  handleSaveEdit(event) {
    event.preventDefault()
    const cardForm = event.target
    const formData = new FormData(cardForm)
    const cardObj = {}
    const editIndex = this.state.edit
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
  }
  render() {
    const {view} = this.state
    const {flashcards} = this.state
    const editIndex = this.state.edit
    const cardToEdit = this.state.flashcards[editIndex]
    return (
      <div>
        <Navigation
          handleClickCards={this.handleClickCards}
          handleCreate={this.handleCreate}
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
      </div>
    )
  }
}
