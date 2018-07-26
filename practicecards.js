import React from 'react'
import PracticeCardBuild from './practicecardbuild'

export default class PracticeCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: props.flashcards,
      currentCard: 0,
      answerIsShown: false
    }
    this.handleShowAnswer = this.handleShowAnswer.bind(this)
  }

  handleShowAnswer() {
    this.setState((prevState, props) => {
      return {answerIsShown: !prevState.answerIsShown}
      })
      console.log(this.state)
    }

  render() {
    const {flashcards} = this.state
    const currentCard = flashcards[this.state.currentCard]
    const question = currentCard.question
    const answer = currentCard.answer
    const {answerIsShown} = this.state
    return (
      <PracticeCardBuild question={question} answer={answer} answerIsShown={answerIsShown} handleShowAnswer={this.handleShowAnswer}/>
    )
  }
}
