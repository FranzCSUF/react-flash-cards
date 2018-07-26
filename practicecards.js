import React from 'react'
import PracticeCardBuild from './practicecardbuild'
import Controls from './practicecontrols'

export default class PracticeCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: props.flashcards,
      currentCard: 0,
      answerIsShown: false
    }
    this.handleShowAnswer = this.handleShowAnswer.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  handleShowAnswer() {
    this.setState((prevState, props) => {
      return {answerIsShown: !prevState.answerIsShown}
      })
    }

  handlePrev() {
    const {flashcards} = this.props
    const {currentCard} = this.state
    this.setState({
      currentCard: currentCard === 0 ? flashcards.length - 1 : currentCard - 1,
      answerIsShown: false
    })
  }
  handleNext() {
    const {flashcards} = this.props
    const {currentCard} = this.state
    this.setState({
      currentCard: currentCard === flashcards.length - 1 ? 0 : currentCard + 1,
      answerIsShown: false
    })
  }

  render() {
    const {flashcards} = this.state
    const currentCard = flashcards[this.state.currentCard]
    const question = currentCard.question
    const answer = currentCard.answer
    const {answerIsShown} = this.state
    return (
      <div>
        <PracticeCardBuild question={question} answer={answer} answerIsShown={answerIsShown} handleShowAnswer={this.handleShowAnswer}/>
        <Controls handlePrev={this.handlePrev} handleNext={this.handleNext}/>
      </div>
    )
  }
}
