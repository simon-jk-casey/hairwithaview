import React, { Component } from 'react'

import Mailform from '../mailform/Mailform'

export default class Contact extends Component {
  render () {
    return (
      <div id='contactWrapper'>
        <div>
          <h2>contact</h2>
        </div>
        <div>
          <p>For enquiries and appointments please get in touch with Alana.</p>
        </div>
        <div>
          <Mailform />
        </div>
        <div>
          <p>Alternatively text Alana on</p>
          <a href='sms:+640274657856'>0274657856</a>
        </div>
      </div>
    )
  }
}
