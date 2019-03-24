import React, { Component } from 'react'

export default class Gallery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      images: [
        {
          img: require('../../assets/images/gallery_images/style1.jpg'),
          alt: 'style1'
        },
        {
          img: require('../../assets/images/gallery_images/style2.jpg'),
          alt: 'style2'
        },
        {
          img: require('../../assets/images/gallery_images/style3.jpg'),
          alt: 'style3'
        },
        {
          img: require('../../assets/images/gallery_images/style4.jpg'),
          alt: 'style4'
        },
        {
          img: require('../../assets/images/gallery_images/style5.jpg'),
          alt: 'style5'
        }
        // NEED TO CHANGE ALT TEXT TO MORE DESCRIPTIVE FOR SEO
      ]
    }
  }

  prevImg () {
    if (this.state.index === 0) {
      this.setState({index: this.state.images.length - 1})
    } else {
      this.setState({index: this.state.index - 1})
    }
  }

  nextImg () {
    if (this.state.index === this.state.images.length - 1) {
      this.setState({index: 0})
    } else {
      this.setState({index: this.state.index + 1})
    }
  }

  render () {
    return (
      <div className='galleryWrapper'>
        <button
          className='buttonLeft'
          onClick={this.prevImg.bind(this)}
        >
          &lt;
        </button>
        <img
          src={this.state.images[this.state.index].img} alt={this.state.images[this.state.index].alt}
        />
        <button
          className='buttonRight'
          onClick={this.nextImg.bind(this)}
        >
          &gt;
        </button>
      </div>
    )
  }
}
