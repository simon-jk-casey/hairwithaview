import React, { Component } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt, faSyncAlt } from '@fortawesome/free-solid-svg-icons'

import './Mailform.css'

const mailFormState = {
  name: '',
  email: '',
  message: '',
  sending: false,
  sendSuccess: false,
  sendError: false
}

class Sending extends Component {
  render () {
    return (
      <div>
        <FontAwesomeIcon icon={faSyncAlt} size='3x' spin/>
      </div>
    )
  }
}

class Error extends Component {
  render () {
    return (
      <div>
        <p>Something went wrong!  Please try again</p>
        <FontAwesomeIcon
          icon={faRedoAlt}
          size='3x'
          onClick={this.props.clickFunction}
        />
        <p> Alternatively email:</p>
        <a href='mailto:hairwithaviewbrooklyn@gmail.com'>
          hairwithaviewbrooklyn@gmail.com
        </a>
      </div>
    )
  }
}

class Success extends Component {

  render () {
    return (
      <div>
        <p>Thanks for your message!  We will be in touch soon.</p>
        <p>Send another message</p>
        <FontAwesomeIcon
          icon={faRedoAlt}
          size='3x'
          onClick={this.props.clickFunction}
        />
      </div>
    )
  }
}

export default class Mailform extends Component {
  constructor (props) {
    super(props)
    this.state = mailFormState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state, 'input change')
  }

  testClick () {
    console.log(this.state)
  }

  reloadFormSuccess () {
    this.setState(mailFormState)
  }

  reloadFormError () {
    this.setState({ sendError: false })
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

    axios.post(`https://rvsat317q2.execute-api-us-east-1.amazonaws.com/dev/email/send`, data) // removed URL while unsecured
      .then((response) => {
        if (response.status === 200) {
          this.toggleSendSuccess()
        }
        console.log(response.status, 'axios send response status')
      })
      .catch((err) => {
        if (err) {
          this.toggleSendError()
        }
      })
    console.log(this.state, 'check state clear:')
  }

  render () {
    if (this.state.sending) {
      return (
        <Sending />
      )
    } else if (this.state.sendSuccess) {
      return (
        <Success clickFunction={this.reloadFormSuccess.bind(this)}/>
      )
    } else if (this.state.sendError) {
      return (
        <Error clickFunction={this.reloadFormError.bind(this)} />
      )
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className='fieldContainer'>
            <span className='fieldLabel'>Name</span>
            <input
              type='text'
              name='name'
              value={this.state.name}
              placeholder='enter your name'
              onChange={this.handleChange}
              required
            />
          </div>
          <div className='fieldContainer'>
            <span className='fieldLabel'>Email</span>
            <input
              type='email'
              name='email'
              value={this.state.email}
              placeholder='enter a valid email address'
              onChange={this.handleChange}
              required
            />
          </div>
          <div className='fieldContainer'>
            <span className='fieldLabel'>Message</span>
            <textarea
              rows='5'
              name='message'
              value={this.state.message}
              placeholder='compose your message'
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <input className='formSubmit' type='submit' value='Send Message' />
          </div>
        </form>
      )
    }
  }
}
