import React from 'react'
import PracticeCardBuild from './practicecardbuild'

export default class PracticeCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: props.flashcards,
      currentCard: 0
    }
  }
  render() {
    const {flashcards} = this.state
    const currentCard = flashcards[this.state.currentCard]
    const question = currentCard.question
    const answer = currentCard.answer
    return (
      <PracticeCardBuild question={question} answer={answer}/>
    )
  }
}
