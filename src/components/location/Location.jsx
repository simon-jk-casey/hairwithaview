import React, { Component } from 'react'

import './Location.css'

export default class Location extends Component {
  render () {
    return (
      <div className='locationWrapper'>
        <h2>location</h2>
        <div className='addressWrapper'>
          <p>224a Mitchell St, Brooklyn, Wellington</p>
        </div>
        <div className='mapWrapper'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1475.465466367027!2d174.7563114191524!3d-41.31459326434064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b00c2dc8d53d%3A0xc16cc02be8fed26!2s224+Mitchell+St%2C+Brooklyn%2C+Wellington+6021!5e0!3m2!1sen!2snz!4v1556430151763!5m2!1sen!2snz"
            width="600"
            height="450"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
    )
  }
}