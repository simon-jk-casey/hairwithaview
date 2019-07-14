import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import './Gallery.css'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      images: [
        {
          img: require('../../assets/images/gallery_images/style_1.jpg'),
          alt: 'style1'
        },
        {
          img: require('../../assets/images/gallery_images/style_2.jpg'),
          alt: 'style2'
        },
        {
          img: require('../../assets/images/gallery_images/style_3.jpg'),
          alt: 'style3'
        },
        {
          img: require('../../assets/images/gallery_images/style_4.jpg'),
          alt: 'style4'
        },
        {
          img: require('../../assets/images/gallery_images/style_5.jpg'),
          alt: 'style5'
        },
        {
          img: require('../../assets/images/gallery_images/style_6.jpg'),
          alt: 'style6'
        },
        {
          img: require('../../assets/images/gallery_images/style_7.jpg'),
          alt: 'style7'
        },
        {
          img: require('../../assets/images/gallery_images/style_8.jpg'),
          alt: 'style8'
        },
        {
          img: require('../../assets/images/gallery_images/style_9.jpg'),
          alt: 'style9'
        },
        {
          img: require('../../assets/images/gallery_images/style_10.jpg'),
          alt: 'style10'
        },
        {
          img: require('../../assets/images/gallery_images/style_11.jpg'),
          alt: 'style11'
        },
        {
          img: require('../../assets/images/gallery_images/style_12.jpg'),
          alt: 'style12'
        }
      ]
    }
  }

  prevImg() {
    if (this.state.index === 0) {
      this.setState({ index: this.state.images.length - 1 })
    } else {
      this.setState({ index: this.state.index - 1 })
    }
  }

  nextImg() {
    if (this.state.index === this.state.images.length - 1) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: this.state.index + 1 })
    }
  }

  render() {
    return (
      <div className='gallery'>
      <h2 className='galleryHeader'>Gallery</h2>
      <div className='galleryWrapper'>
        <div className='buttonWrapperLeft'>
          <FontAwesomeIcon
            className='galleryIcon'
            icon={faChevronLeft}
            size='3x'
            onClick={this.prevImg.bind(this)}
          />
        </div>
        <div className='galleryImgWrapper'>
          <img
            className='galleryImg'
            src={this.state.images[this.state.index].img} alt={this.state.images[this.state.index].alt}
          />
        </div>
        <div className='buttonWrapperRight'>
            <FontAwesomeIcon
              className='galleryIcon'
              icon={faChevronRight}
              size='3x'
              onClick={this.nextImg.bind(this)}
            />
        </div>
      </div>
      </div>
    )
  }
}
