import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRedRiver } from '@fortawesome/free-solid-svg-icons'
  
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

  ohHamburgers() {
    if (!this.state.menuToggled) {
      return <FontAwesomeIcon className='hamburger' icon={faBars} size='2x' onClick={this.toggleMenu.bind(this)} />
    } else {
      return (
        <div>
          <FontAwesomeIcon
            className='hamburger rotated'
            icon={faBars}
            size='2x'
            rotation='90'
            onClick={this.toggleMenu.bind(this)}
          />
          <Menu />
        </div>
      )
    }
  } 

  toggleMenu() {
    this.setState(prevState => ({
      menuToggled: !prevState.menuToggled
    }))
    console.log(this.state)
  }

  render () {
    return (
      <div className='hamMenu'>
        {this.ohHamburgers()}
        {/* {this.showHideMenu()} */}
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