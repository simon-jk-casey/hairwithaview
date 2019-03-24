import React, { Component } from 'react'
import axios from 'axios'

class Sending extends Component {
  render () {
    return (
      <div>
        <h2>...SENDING...</h2>
      </div>
    )
  }
}

class Success extends Component {
  render () {
    return (
      <div>
        <p>Thanks for your message!  We will be in touch soon.</p>
      </div>
    )
  }
}

export default class Mailform extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      sending: false,
      sendSuccess: false,
      sendError: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state, 'input change')
  }

  toggleSending () {
    this.setState(prevState => ({
      sending: !prevState.sending
    }), () => console.log(this.state, 'toggle test'))
  }

  toggleSendSuccess () {
    this.setState(prevState => ({
      sending: !prevState.sending,
      sendSuccess: !prevState.sendSuccess
    }), () => console.log(this.state.sendSuccess, 'sent'))
  }

  toggleSendError () {
    this.setState(prevState => ({
      sending: !prevState.sending,
      sendError: !prevState.sendError
    }))
  }

  handleSubmit (e) {
    this.toggleSending()
    e.preventDefault()
    e.target.reset()
    const data = {
      name: this.state.name,
      email: this.state.email,
      content: this.state.message
    }

    axios.post(``, data) // removed URL while unsecured
      .then((response) => {
        if (response.status === 200) {
          this.toggleSendSuccess()
        }
        console.log(response.status, 'axios send response status')
      })
      .catch((err) => {
        console.log(err, 'axios send error')
      })

    // alert('Message sent!')
    // this.setState(
    //   {
    //     name: '',
    //     email: '',
    //     message: ''
    //   }
    // )
    console.log(this.state, 'check state clear:')
  }

  // try an async/await version of handlesubmit

  render () {
    if (this.state.sending) {
      return (
        <Sending />
      )
    } else if (this.state.sendSuccess) {
      return (
        <Success />
      )
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='nameField'>Name</label>
            <input
              type='text'
              name='name'
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='email'> Email</label>
            <input
              type='email'
              name='email'
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='message'> Message</label>
            <textarea
              rows='10'
              cols='50'
              name='message'
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <input type='submit' value='Send Message' />
          </div>
        </form>
      )
    }
  }
}