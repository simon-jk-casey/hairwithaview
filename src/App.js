import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import Banner from './components/banner/Banner'
import Testimonials from './components/testimonials/Testimonials'
import Philosophy from './components/philosophy/Philosophy'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Gallery from './components/gallery/Gallery'
import Footer from './components/footer/Footer'
import MenuBar from './components/menu/MenuBar'
import SalonScroller from './components/salonScroller/SalonScroller'
import Location from './components/location/Location'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Banner />
        <MenuBar
          anchorA='#philosophy'
          anchorB='#gallery'
          anchorC='#services'
          anchorD='#testimonials'
          anchorE='#location'
          anchorF='#contact'
        />
        <SalonScroller />
        <div className='pageDiv'>
          <ScrollableAnchor id={'philosophy'}>
            <Philosophy />
          </ScrollableAnchor>
          <ScrollableAnchor id={'gallery'}>
            <Gallery />
          </ScrollableAnchor>
        </div>
        <div className='pageDiv'>
          <ScrollableAnchor id={'services'}>
            <Services />
          </ScrollableAnchor>
          <ScrollableAnchor id={'testimonials'}>
            <Testimonials />
          </ScrollableAnchor>
        </div>
        <div className='pageDiv'>
        <ScrollableAnchor id={'location'}>
          <Location />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
