import React, { Component } from 'react'

export default class Banner extends Component {
  render () {
    return (
      <header>
        <div id='navLeft'>
          <button>Home</button>
          <button>Philosophy</button>
          <button>Services</button>
        </div>
        <div id='navMid'>
          <img
            src={require('../../assets/images/hwav_logo.jpg')}
            alt='Hair With a View - Brooklyn, Wellington logo'
          />
        </div>
        <div id='navRight'>
          <button>Testimonials</button>
          <button>Gallery</button>
          <button>Contact</button>
        </div>
      </header>
    )
  }
}
