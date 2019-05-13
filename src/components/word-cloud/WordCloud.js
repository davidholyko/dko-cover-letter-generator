import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import WordCloudInput from './WordCloudInput'
import WordCloudOutput from './WordCloudOutput'

class WordCloud extends Component {
  constructor () {
    super()

    this.state = {
      wordCloud: []
    }
  }

  updateWordCloud = wordCloud => this.setState({ wordCloud })

  render () {
    const { wordCloud } = this.state

    return (
      <div>
        <WordCloudInput updateWordCloud={this.updateWordCloud} />
        <WordCloudOutput updateWordCloud={this.updateWordCloud} wordCloud={wordCloud}/>
      </div>
    )
  }
}

export default withRouter(WordCloud)
