import React, { Component } from 'react'

import Banner from './components/banner/Banner'
import Testimonials from './components/testimonials/Testimonials'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        {/* <Banner /> */}
        <Testimonials />
      </div>
    )
  }
}

export default App
