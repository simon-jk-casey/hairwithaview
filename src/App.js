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
        <div className='content'>
          <SalonScroller />
        </div>
        <div className='mainBodyWrapper'>
          <div className='sideSpacer'/>
          <div className='mainBodyContent'>
            <ScrollableAnchor id={'about'}>
            <div className='content'>
              <About />
            </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'gallery'}>
              <div className='content'>
              <Gallery />          
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'testimonials'}>
              <div className='content'>
                <Testimonials />
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'contact'}>
              <div className='content'>
                <Contact />
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'location'}>
              <div className='content'>
                <Location />
              </div>
            </ScrollableAnchor>
          </div>
          <div className='sideSpacer'/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
