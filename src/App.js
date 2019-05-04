import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import Banner from './components/banner/Banner'
import Testimonials from './components/testimonials/Testimonials'
import About from './components/about/About'
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
          anchorA='#about'
          anchorB='#gallery'
          anchorC='#testimonials'
          anchorD='#location'
          anchorE='#contact'
        />
        <SalonScroller />
        <ScrollableAnchor id={'about'}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={'gallery'}>
          <Gallery />
        </ScrollableAnchor>
        <ScrollableAnchor id={'testimonials'}>
          <Testimonials />
        </ScrollableAnchor>
        <ScrollableAnchor id={'location'}>
          <Location />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
        <Footer />
      </div>
    )
  }
}

export default App
