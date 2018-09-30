import React, { Component } from 'react'
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button'

export default class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <ScrollUpButton />
      </div>
    )
  }
}
