import React from 'react'
import Navigation from './nav-bar'
import Cards from './cards'
import Practice from './practice'
import CardForm from './card-form'

export default class FlashCardApp extends React.Component {
  constructor(props) {
    super(props)
    const view = window.localStorage.getItem('view')
    const flashcards = window.localStorage.getItem('flashcards')
    const flashcardsFiltered = window.localStorage.getItem('flashcardsFiltered')
    const editIndex = window.localStorage.getItem('edit')
    const topics = window.localStorage.getItem('topics')
    const selectedTopic = window.localStorage.getItem('selectedTopic')
    this.state = {
      view: JSON.parse(view) || 'New',
      editIndex: JSON.parse(editIndex) || null,
      flashcards: JSON.parse(flashcards) || [],
      flashcardsFiltered: JSON.parse(flashcardsFiltered) || [],
      topics: JSON.parse(topics) || [],
      selectedTopic: JSON.parse(selectedTopic) || []
    }
    this.handleSave = this.handleSave.bind(this)
    this.handleClickCards = this.handleClickCards.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSaveEdit = this.handleSaveEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handlePractice = this.handlePractice.bind(this)
    this.renderView = this.renderView.bind(this)
    this.handleSelectedTopic = this.handleSelectedTopic.bind(this)
    this.handleAll = this.handleAll.bind(this)
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
    const flashcardsCopy = this.state.flashcards.slice(0)
    flashcardsCopy.push(cardObj)
    const updatedTopics = this.state.topics.slice(0)
    if (updatedTopics.indexOf(cardObj.topic) === -1) {
      updatedTopics.push(cardObj.topic)
    }
    this.setState({
      flashcards: flashcardsCopy,
      topics: updatedTopics
    })
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
    console.log(this.state.view)
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
    const flashcardsCopy = this.state.flashcards.slice(0)
    flashcardsCopy.splice(editIndex, 1, cardObj)
    const updatedTopics= []
    flashcardsCopy.map(flashcard =>  {
      if (updatedTopics.indexOf(flashcard.topic) === -1) {
        updatedTopics.push(flashcard.topic)
      }
    })
    this.setState({
      view: "Cards",
      flashcards: flashcardsCopy,
      topics: updatedTopics
    })
  }
  handleDelete(event) {
    const index = event.target.getAttribute('data-index')
    const flashcardStateCopy = this.state.flashcards.slice(0)
    flashcardStateCopy.splice(index, 1)
    const updatedTopics= []
    flashcardStateCopy.map(flashcard =>  {
      if (updatedTopics.indexOf(flashcard.topic) === -1) {
        updatedTopics.push(flashcard.topic)
      }
    })
    this.setState({
      flashcards: flashcardStateCopy,
      topics: updatedTopics
    })
  }
  handleSelectedTopic(event) {
    const {flashcards} = this.state
    const topic = event.target.textContent
    const flashcardsFilteredCopy = this.state.flashcards.slice(0)
    const filteredCards = flashcardsFilteredCopy.filter(flashcard => flashcard.topic === topic)
    const updatedTopics = []
    flashcards.map(flashcard => {
      if (updatedTopics.indexOf(flashcard.topic) === -1) {
        updatedTopics.push(flashcard.topic)
      }
    })
    this.setState({
      view: 'Practice',
      selectedTopic: topic,
      flashcardsFiltered: filteredCards,
      topics: updatedTopics
    })
    location.reload()
  }
  handleAll() {
    const flashcardsAll = this.state.flashcards.slice(0)
    this.setState({
      view: 'Practice',
      flashcardsFiltered: flashcardsAll
    })
    location.reload()
  }
  renderView() {
    const {view, flashcards, editIndex, topics, selectedTopic, flashcardsFiltered} = this.state
    const cardToEdit = flashcards[editIndex]
    switch (this.state.view) {
      case 'New' :
        return (
          <CardForm
          handleSave={this.handleSave}
          view={view}/>
        )
      case 'Edit' :
        return (
          <CardForm
          handleSave={this.handleSaveEdit}
          view={view}
          cardToEdit={cardToEdit}/>
        )
      case 'Cards' :
        return (
          <Cards
          flashcards={flashcards}
          handleCreate={this.handleCreate}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}/>
        )
      case 'Practice' :
        return (
          <Practice
          flashcards={flashcards}
          topics={topics}
          selectedTopic={selectedTopic}
          flashcardsFiltered={flashcardsFiltered}/>
        )
    }
  }
  render() {
    const {view, topics, flashcards} = this.state
    return (
      <div>
        <Navigation
          handleClickCards={this.handleClickCards}
          handleCreate={this.handleCreate}
          handlePractice={this.handlePractice}
          handleSelectedTopic={this.handleSelectedTopic}
          handleAll={this.handleAll}
          flashcards={flashcards}
          topics={topics}
          view={view}/>
        {this.renderView()}
      </div>
    )
  }
}
