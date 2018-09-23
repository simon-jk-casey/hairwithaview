import React, { Component } from 'react'

export default class Mailform extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state)
  }

  handleSubmit () {
    alert("Message sent!")
    this.setState(
      {
        name: '',
        email: '',
        message: ''
      }
    )
    console.log(this.state)
  }

  render () {
    return (
      <form>
        <div>
          <label htmlFor='nameField'>Name*</label>
          <input
            type='text'
            name='name'
            onChange={event => this.handleChange(event)}
            required
          />
        </div>
        <div>
          <label htmlFor='email'> Email*</label>
          <input
            type='email'
            name='email'
            onChange={event => this.handleChange(event)}
            required
          />
        </div>
        <div>
          <label htmlFor='message'> Message*</label>
          <textarea
            rows='10'
            cols='50'
            name='message'
            onChange={event => this.handleChange(event)}
            required
          />
        </div>
        <div>
          <button onClick={this.handleSubmit.bind(this)}>Send Message</button>
          <input type='submit' value='Send Message' />
        {/* NOTE: button with submithandler does not enforce required field; input however does (though not if using submit handler => look into handling required fields ) */}
        </div>
      </form>
    )
  }
}
