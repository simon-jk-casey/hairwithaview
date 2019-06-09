import React, { Component } from 'react'

import Banner from './components/banner/Banner'
import Testimonials from './components/testimonials/Testimonials'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Gallery from './components/gallery/Gallery'
import Footer from './components/footer/Footer'
import MenuBar from './components/menu/MenuBar'
import SalonScroller from './components/salonScroller/SalonScroller'
import Location from './components/location/Location'
import Hamburger from './components/hamburger/Hamburger'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Hamburger />
        <Banner />
        <MenuBar />
        <div className='content'>
          <SalonScroller />
        </div>
        <div className='mainBodyWrapper'>
          <div className='sideSpacer'/>
          <div className='mainBodyContent'>
            <div id='about' className='content'><About /></div>
            <div id='gallery' className='content'><Gallery /></div>
            <div id='testimonials' className='content'><Testimonials /></div>
            <div id='contact' className='content'><Contact /></div>
            <div id='location' className='content'><Location /></div>
          </div>
          <div className='sideSpacer'/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
