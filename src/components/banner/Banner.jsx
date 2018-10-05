import React, { Component } from 'react'

export default class Banner extends Component {
  render () {
    return (
      <header>
        <div id='navMid'>
          <img
            src={require('../../assets/images/hwav_logo.jpg')}
            alt='Hair With a View - Brooklyn, Wellington logo'
          />
        </div>
      </header>
    )
  }
}
