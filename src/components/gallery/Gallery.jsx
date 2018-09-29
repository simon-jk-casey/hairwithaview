import React, { Component } from 'react'

export default class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      images: [
        require('../../assets/images/gallery_images/style1.jpg'),
        require('../../assets/images/gallery_images/style2.jpg'),
        require('../../assets/images/gallery_images/style3.jpg'),
        require('../../assets/images/gallery_images/style4.jpg'),
        require('../../assets/images/gallery_images/style5.jpg'),
      ],
      imgAlt: [
        'style1', 'style2', 'style3', 'style4', 'style5'
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
      <div classname='galleryWrapper'>
        <button
          className='buttonLeft'
          onClick={this.prevImg.bind(this)}
        >
          &lt;
        </button>
        <img
          src={this.state.images[this.state.index]} alt={this.state.imgAlt[this.state.index]}
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
