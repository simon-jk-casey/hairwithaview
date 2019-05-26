import React, { Component } from 'react'

import Mailform from '../mailform/Mailform'
import './Contact.css'

export default class Contact extends Component {
  render () {
    return (
      <div>
        <div>
          <h2>Contact</h2>
        </div>
        <div>
          <p>For enquiries and appointments please get in touch with Alana.</p>
        </div>
        <div className='formContainer'>
          <Mailform />
        </div>
        <div>
          <p>
            Or text Alana on:  <a href='sms:+640274657856'>0274657856</a>
          </p>
        </div>
      </div>
    )
  }
}
