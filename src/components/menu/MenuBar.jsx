import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './MenuBar.css'

export default class MenuBar extends Component {
  render () {
    return (
      <div className='menu'>
        <div className='buttonLabel'>
          <Link to='about' smooth={true}>About Us</Link>
        </div>
        <div className='buttonLabel'>
          <Link to='services' smooth={true}>Services</Link>
        </div>
        <div className='buttonLabel'>
          <Link to='gallery' smooth={true}>Gallery</Link>
        </div>
        <div className='buttonLabel'>
          <Link to='testimonials' smooth={true}>Testimonials</Link>
        </div>
        <div className='buttonLabel'>
          <Link to='contact' smooth={true}>Contact</Link>
        </div>
        <div className='buttonLabel'>
          <Link to='location' smooth={true}>Location</Link>
        </div>
        <div>
          <a
            href='https://www.instagram.com/hair_by_alana1/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon
              className='instaIcon'
              icon={faInstagram}
              size='3x'
            />
          </a>
          <a
            href='https://www.facebook.com/hairwav/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon
              className='fbIcon'
              icon={faFacebookSquare}
              size='3x'
            />
          </a>
        </div>
      </div>
    )
  }
}