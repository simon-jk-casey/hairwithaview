import React, { Component } from 'react'

export default class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div id='contactWrapper'>
        <div>
          <h1>Contact</h1>
        </div>
        <div>
          <p>For enquiries and appointments please get in touch with Alana.</p>
        </div>
        <div>
          <p>mailform placeholding</p>
        </div>
        <div>
          <p>Alternatively text Alana on</p>
          <a href='sms:+640274657856'>0274657856</a>
        </div>
      </div>
    )
  }
}
