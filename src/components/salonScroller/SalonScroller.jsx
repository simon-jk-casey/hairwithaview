import React, { Component } from 'react'

export default class SalonScroller extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      images: [
        {
          img: require('../../assets/images/salon_images/salon1.jpg'),
          alt: 'hair salon entry'
        },
        {
          img: require('../../assets/images/salon_images/salon2.jpg'),
          alt: 'view'
        },
        {
          img: require('../../assets/images/salon_images/salon3.jpg'),
          alt: 'boutique salon'
        },
        {
          img: require('../../assets/images/salon_images/salon4.jpg'),
          alt: 'relaxation'
        },
        {
          img: require('../../assets/images/salon_images/salon5.jpg'),
          alt: 'hair styling'
        },
        {
          img: require('../../assets/images/salon_images/salon6.jpg'),
          alt: 'hair salon'
        },
        {
          img: require('../../assets/images/salon_images/salon7.jpg'),
          alt: 'hair coloring colouring'
        },
        {
          img: require('../../assets/images/salon_images/salon8.jpg'),
          alt: 'hair salon Brooklyn Wellington'
        }
      ]
    }
  }

  render () {
    return (
      <div className='salonWrapper'>
        <img
          src={this.state.images[this.state.index].img}
          alt={this.state.images[this.state.index].alt}
        />
      </div>
    )
  }
}