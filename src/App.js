import React, { Component } from 'react'

import Banner from './components/banner/Banner'
import Testimonials from './components/testimonials/Testimonials'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        {/* <Banner /> */}
        {/* <Testimonials /> */}
        <Services />
        <Contact />
      </div>
    )
  }
}

export default App
