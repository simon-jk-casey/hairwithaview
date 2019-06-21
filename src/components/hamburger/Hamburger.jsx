import React, { Component } from 'react'
import { Link } from 'react-scroll'

import './Hamburger.css'
import priceList from '../../assets/other/hwav_pricelist.pdf'
import fbookLogo from '../../assets/images/social_icons/fbook.png'
import igramLogo from '../../assets/images/social_icons/igram.png'

export default class Hamburger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuToggled: false
    }
  }

  toggleMenu() {
    this.setState(prevState => ({
      menuToggled: !prevState.menuToggled
    }))
    console.log(this.state)
  }

  showHideMenu() {
    if (this.state.menuToggled) {
      return <Menu />
    } else {
      return
    }
  }

  render () {
    return (
      <div className='hamMenu'>
        <button onClick={this.toggleMenu.bind(this)}>TEST</button>
        {this.showHideMenu()}
      </div>
    )
  }
}

class Menu extends Component {
  render () {
    return (
      <div className='menuContainer'>
        <div className='buttonLabel mobile'>
          <Link to='about' smooth={true}>About Us</Link>
        </div>
        <div className='buttonLabel mobile'>
          <Link to='gallery' smooth={true}>Gallery</Link>
        </div>
        <div className='buttonLabel mobile'>
          <Link to='testimonials' smooth={true}>Testimonials</Link>
        </div>
        <div className='buttonLabel mobile'>
          <a 
            id='menuAnchor'
            href={priceList}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Services</span>
          </a>
        </div>
        <div className='buttonLabel mobile'>
          <Link to='contact' smooth={true}>Contact</Link>
        </div>
        <div className='buttonLabel mobile'>
          <Link to='location' smooth={true}>Location</Link>
        </div>
        <div className='mobile'>
          <a
            href='https://www.instagram.com/hair_by_alana1'
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