import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
  
import './Hamburger.css'
import priceList from '../../assets/other/hwav_pricelist.pdf'

export default class Hamburger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuToggled: false
    }
  }

  ohHamburgers() {
    if (!this.state.menuToggled) {
      return <FontAwesomeIcon className='hamburger noRotate' icon={faBars} size='2x' onClick={this.toggleMenu.bind(this)} />
    } else {
      return (
        <div>
          <FontAwesomeIcon
            className='hamburger rotated'
            icon={faBars}
            size='2x'
            rotation={90}
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
            <FontAwesomeIcon
              className='instaIcon'
              icon={faInstagram}
              size='2x'
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
              size='2x'
            />
          </a>
        </div>
      </div>
    )
  }
}