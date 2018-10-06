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

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Banner />
        <MenuBar
          anchorA='#philosophy'
          anchorB='#services'
          anchorC='#gallery'
          anchorD='#testimonial'
          anchorE='#contact'
        />
        <ScrollableAnchor id={'philosophy'}>
          <Philosophy />
        </ScrollableAnchor>
        <ScrollableAnchor id={'services'}>
          <Services />
        </ScrollableAnchor>
        <ScrollableAnchor id={'gallery'}>
          <Gallery />
        </ScrollableAnchor>
        <ScrollableAnchor id={'testimonial'}>
          <Testimonials />
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
