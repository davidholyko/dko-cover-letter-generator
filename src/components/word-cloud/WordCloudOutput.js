import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class WordCloudOutput extends Component {
  constructor () {
    super()

    this.state = {
      jobDescription: ''
    }
  }

  render () {
    const { wordCloud } = this.props

    return (
      <div>
        {wordCloud.length
          ? wordCloud.sort((a, b) => b[1] - a[1]).map(word => (
            <p key={Math.random()}>
              {word[0]} : {word[1]}
            </p>)
          )
          : ''}
      </div>
    )
  }
}

export default withRouter(WordCloudOutput)
