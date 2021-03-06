import React, { Component } from 'react'

import './salonScroller.css'

export default class SalonScroller extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      images: [
        {
          img: require('../../assets/images/salon_images/salon_1.jpg'),
          alt: 'hair salon entry'
        },
        {
          img: require('../../assets/images/salon_images/salon_2.jpg'),
          alt: 'view'
        },
        {
          img: require('../../assets/images/salon_images/salon_3.jpg'),
          alt: 'boutique salon'
        },
        {
          img: require('../../assets/images/salon_images/salon_4.jpg'),
          alt: 'relaxation'
        },
        {
          img: require('../../assets/images/salon_images/salon_5.jpg'),
          alt: 'hair styling'
        },
        {
          img: require('../../assets/images/salon_images/salon_6.jpg'),
          alt: 'hair salon'
        },
        {
          img: require('../../assets/images/salon_images/salon_7.jpg'),
          alt: 'hair coloring colouring'
        },
        {
          img: require('../../assets/images/salon_images/salon_8.jpg'),
          alt: 'hair salon Brooklyn Wellington'
        }
      ]
    }
  }

  cycleIndex () {
    if (this.state.index === this.state.images.length - 1) {
      this.setState({index: 0})
    } else {
      this.setState({index: this.state.index + 1})
    }
  }

  componentDidMount () {
    setInterval(this.cycleIndex.bind(this), 3000)
  }

  render () {
    return (
      <div className='salonWrapper'>
        <img
          className='salonImg'
          src={this.state.images[this.state.index].img}
          alt={this.state.images[this.state.index].alt}
        />
      </div>
    )
  }
}
