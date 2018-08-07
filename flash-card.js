import React from 'react'
import Navigation from './nav-bar'
import Cards from './cards'
import Practice from './practice'
import CardForm from './card-form'
import parseHash from './parse-hash'
import * as queryString from './query-string'

export default class FlashCardApp extends React.Component {
  constructor(props) {
    super(props)
    const { path, params } = parseHash(window.location.hash)
    const flashcards = window.localStorage.getItem('flashcards')
    const editIndex = window.localStorage.getItem('edit')
    const topics = window.localStorage.getItem('topics')
    const selectedTopic = window.localStorage.getItem('selectedTopic')
    this.state = {
      path,
      params,
      editIndex: JSON.parse(editIndex) || null,
      flashcards: JSON.parse(flashcards) || [],
      topics: JSON.parse(topics) || [],
      selectedTopic: JSON.parse(selectedTopic) || ''
    }
    this.handleSave = this.handleSave.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSaveEdit = this.handleSaveEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.renderView = this.renderView.bind(this)
    this.handleSelectedTopic = this.handleSelectedTopic.bind(this)
    this.handleAll = this.handleAll.bind(this)
    this.handleCorrectAttempt = this.handleCorrectAttempt.bind(this)
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = parseHash(window.location.hash)
      this.setState({ path, params })
    })
    window.addEventListener('beforeunload', () => {
      for (var key in this.state) {
        localStorage.setItem(key, JSON.stringify(this.state[key]))
      }
    })
  }
  navigate({ path, params }) {
    window.location.hash = path + queryString.stringify(params)
  }
  handleSave(event) {
    event.preventDefault()
    const cardForm = event.target
    const formData = new FormData(cardForm)
    const cardObj = {}
    for (var pair of formData.entries()) {
      cardObj[pair[0]] = pair[1]
    }
    cardObj.correct = 0
    cardObj.failures = 0
    const flashcards = [...this.state.flashcards, cardObj]
    const topics = [...this.state.topics]
    if (!topics.includes(cardObj.topic)) {
      topics.push(cardObj.topic)
    }
    this.setState({
      flashcards,
      topics
    })
    alert('Your card has been saved.')
    console.log(this.state.flashcards)
    cardForm.reset()
  }
  handleEdit(event) {
    const editIndex = event.target.getAttribute('data-index')
    this.setState({
      editIndex
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
    const flashcards = this.state.flashcards.slice(0)
    flashcards.splice(editIndex, 1, cardObj)
    const topics= []
    flashcards.forEach(flashcard =>  {
      if (!topics.includes(flashcard.topic)) {
        topics.push(flashcard.topic)
      }
    })
    this.setState({
      flashcards,
      topics
    })
    alert('Your card has been updated.')
  }
  handleDelete(event) {
    const index = event.target.getAttribute('data-index')
    const flashcards = [...this.state.flashcards]
    flashcards.splice(index, 1)
    const topics= []
    flashcards.forEach(flashcard =>  {
      if (!topics.includes(flashcard.topic)) {
        topics.push(flashcard.topic)
      }
    })
    this.setState({
      flashcards,
      topics
    })
  }
  handleSelectedTopic(event) {
    const {flashcards} = this.state
    const selectedTopic = event.target.textContent
    const topics = []
    flashcards.forEach(flashcard => {
      if (!topics.includes(flashcard.topic)) {
        topics.push(flashcard.topic)
      }
    })
    this.setState({
      selectedTopic,
      topics
    })
    location.reload()
  }
  handleAll() {
    this.setState({
      selectedTopic: ''
    })
    location.reload()
  }
  handleCorrectAttempt() {
    const{flashcards} = this.state
    const question = document.getElementById('practice-question').textContent
    let cardIndex = null
    flashcards.forEach((flashcard, index) => {
      if (flashcard.question === question) {
        cardIndex = index
      }
    })
    const flashcardsCopy = [...this.state.flashcards]
    flashcardsCopy[cardIndex].correct += 1
    console.log(flashcardsCopy)
  }
  handleFailedAttempt () {

  }
  renderView() {
    const {path, flashcards, editIndex, selectedTopic,} = this.state
    const filteredCards = flashcards.filter(flashcard => flashcard.topic === selectedTopic)
    const allCards = flashcards
    const practiceCards = (selectedTopic === '') ? allCards : filteredCards
    const cardToEdit = flashcards[editIndex]
    switch (this.state.path) {
      case 'new-card' :
        return (
          <CardForm
          handleSave={this.handleSave}
          path={path}/>
        )
      case 'edit-card' :
        return (
          <CardForm
          handleSave={this.handleSaveEdit}
          path={path}
          cardToEdit={cardToEdit}/>
        )
      case 'cards' :
        return (
          <Cards
          flashcards={flashcards}
          handleCreate={this.handleCreate}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}/>
        )
      case 'practice' :
        return (
          <Practice
          flashcards={practiceCards}
          handleCorrectAttempt={this.handleCorrectAttempt}
          handleFailedAttempt={this.handleFailedAttempt}/>
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
