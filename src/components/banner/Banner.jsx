import React, { Component } from 'react'

import './Banner.css'

export default class Banner extends Component {
  render () {
    return (
      <header>
        <div className='navMid'>
          <img
            src={require('../../assets/images/hwav_logo.png')}
            alt='Hair With a View - Brooklyn, Wellington logo'
          />
        </div>
      </header>
    )
  }
}
