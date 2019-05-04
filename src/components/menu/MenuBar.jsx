import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './MenuBar.css'
import priceList from '../../assets/other/hwav_pricelist.pdf'
import fbookLogo from '../../assets/images/social_icons/fbook.png'
import igramLogo from '../../assets/images/social_icons/igram.png'

export default class MenuBar extends Component {
  render () {
    return (
      <div className='menu'>
        <a
          className='menuButton'
          href={this.props.anchorA}
        >
          <p className='buttonLabel'>
            About Us
          </p>
        </a>
        <a
          className='menuButton'
          href={this.props.anchorB}
        >
          <p className='buttonLabel'>
            Gallery
          </p>
        </a>
        <a
          className='menuButton'
          href={this.props.anchorC}
        >
          <p className='buttonLabel'>
            Testimonials
          </p>
        </a>
        <a
          className='menuButton'
          href={priceList} target='_blank' rel='noopener noreferrer'
        >
          <p className='buttonLabel'>
            Services
          </p>
        </a>
        <a
          className='menuButton'
          href={this.props.anchorD}
        >
          <p className='buttonLabel'>
            Location
          </p>
        </a>
        <a
          className='menuButton'
          href={this.props.anchorE}
        >
          <p className='buttonLabel'>
            Contact
          </p>
        </a>
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

MenuBar.propTypes = {
  anchorA: PropTypes.string.isRequired,
  anchorB: PropTypes.string.isRequired,
  anchorC: PropTypes.string.isRequired,
  anchorD: PropTypes.string.isRequired,
  anchorE: PropTypes.string.isRequired
}
