import React from 'react'
import FlashcardBuild from './flashcardbuild'

export default class Flashcard extends React.Component {
  constructor(props) {
    super(props)
    this.state = []
  }
  render() {
    return (
      <FlashcardBuild/>
    )
  }
}
