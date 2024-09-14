import React, { Component } from 'react'

import './Location.css'

export default class Location extends Component {
  render () {
    return (
      <div className='locationWrapper'>
        <h2>Location</h2>
        <div>
          <p>224a Mitchell St, Brooklyn, Wellington</p>
        </div>
        <div className='mapWrapper'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d445.46538044842583!2d174.75744517326225!3d-41.31491245742489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b179c71e085b%3A0x1e3e1110189c0935!2sHair%20with%20a%20view!5e0!3m2!1sen!2snz!4v1725168128029!5m2!1sen!2snz" 
            width="800"
            height="675"
            frameBorder="0"
            title="Google Maps"
            allowFullScreen
          />
        </div>
      </div>
    )
  }
}