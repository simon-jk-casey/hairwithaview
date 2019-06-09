import React, { Component } from 'react'
import { Link } from 'react-scroll'

import './MenuBar.css'
import priceList from '../../assets/other/hwav_pricelist.pdf'
import fbookLogo from '../../assets/images/social_icons/fbook.png'
import igramLogo from '../../assets/images/social_icons/igram.png'

export default class MenuBar extends Component {
  render () {
    return (
      <div className='menu'>
        <div className='buttonLabel'>
            <Link to='about' smooth={true}>About Us</Link>
        </div>
        <div className='buttonLabel'>
            <Link to='gallery' smooth={true}>Gallery</Link>
        </div>
        <div className='buttonLabel'>
            <Link to='testimonials' smooth={true}>Testimonials</Link>
        </div>
        <div className='buttonLabel'>
            <a 
              id='menuAnchor'
              href={priceList}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>Services</span>
            </a>
        </div>
        <div className='buttonLabel'>
            <Link to='contact' smooth={true}>Contact</Link>
        </div>
        <div className='buttonLabel'>
            <Link to='location' smooth={true}>Location</Link>
        </div>
        <div className='socialsSub'>
          <a
            href='https://www.instagram.com/hair_by_alana1/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='igramLogo' src={igramLogo} alt='Instagram' />  
          </a>
          <a
            href='https://www.facebook.com/hairwav/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className='fbookLogo' src={fbookLogo} alt='Facebook' />
          </a>
        </div>
      </div>
    )
  }
}