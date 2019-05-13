import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { convertJobDescription } from './ConvertJobDescription'

class WordCloudInput extends Component {
  constructor () {
    super()

    this.state = {
      jobDescription: ''
    }
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value })

  convertJobDescription = () => {
    event.preventDefault()
    console.log(convertJobDescription(this.state.jobDescription))
  }

  render () {
    const { jobDescription } = this.state

    return (
      <form className='d-flex flex-column' onSubmit={this.convertJobDescription}>
        <label htmlFor="Job Description">Job Description</label>
        <textarea
          required
          type="text"
          name="jobDescription"
          value={jobDescription}
          placeholder="Input Job Description Here"
          onChange={this.handleChange}
        />
        <button type="submit">Convert</button>
      </form>
    )
  }
}

export default withRouter(WordCloudInput)
