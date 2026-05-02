import React, { Component } from 'react'
import { Swipeable } from 'react-swipeable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import './Gallery.css'

export default class Gallery extends Component {

  render() {
    return (
      <div className='gallery'>
        <h2 className='galleryHeader'>Gallery</h2>
        <div className='galleryWrapper'>
          <iframe src="https://widgets.commoninja.com/iframe/97565379-f620-44f4-a055-ed4623edee2b" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
          {/* <iframe src="https://widgets.tagembed.com/163955?view" style={{width:'100%', height:'500px', overflow: 'auto'}} frameBorder="0" allowtransparency="true"></iframe>    */}
        </div>
      </div>
    )
  }
}
