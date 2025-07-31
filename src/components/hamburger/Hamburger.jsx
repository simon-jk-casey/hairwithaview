import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
  
import './Hamburger.css'

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
          <Menu toggle={this.toggleMenu.bind(this)}/>
        </div>
      )
    }
  } 

  toggleMenu() {
    this.setState(prevState => ({
      menuToggled: !prevState.menuToggled
    }))
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
          <Link to='about' smooth={true} onClick={this.props.toggle}>About Us</Link>
        </div>
        <div className='buttonLabel mobile'>
          <Link to='services' smooth={true} onClick={this.props.toggle}>Services</Link>
        </div>
        <div className='buttonLabel mobile'>
          <Link to='gallery' smooth={true} onClick={this.props.toggle}>Gallery</Link>
        </div>
        <div className='buttonLabel mobile'>
          <Link to='testimonials' smooth={true} onClick={this.props.toggle}>Testimonials</Link>
        </div>
        <div className='buttonLabel mobile'>
          <Link to='contact' smooth={true} onClick={this.props.toggle}>Contact</Link>
        </div>
        <div className='buttonLabel mobile'>
          <Link to='location' smooth={true} onClick={this.props.toggle}>Location</Link>
        </div>
        <div className='mobile'>
          <a
            href='https://www.instagram.com/hairwithaviewnz/'
            target='_blank'
            rel='noopener noreferrer'
            onClick={this.props.toggle}
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
            onClick={this.props.toggle}
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