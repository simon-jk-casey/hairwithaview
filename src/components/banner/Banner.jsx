import React, { Component } from 'react'

import './Banner.css'

export default class Banner extends Component {
  render () {
    return (
        <div className='logo'>
          <img className='logo'
            src={require('../../assets/images/hwav_logo.png')}
            alt='Hair With a View - Brooklyn, Wellington logo'
          />
        </div>
    )
  }
}
