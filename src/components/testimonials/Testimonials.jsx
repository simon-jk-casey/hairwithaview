import React, { Component } from 'react'

import './Testimonials.css'

export default class Testimonials extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      testimonials: [
        {
          name: 'Michelle',
          feedback: 'Alana is the only hairdresser who has ever been able to tame my crazy frizzy hair.  Love my visits and chats with Alana'
        },
        {
          name: 'Francine',
          feedback: 'Love love love visiting Alana.  She knows how to cut and colour my hair beautifully.  She is honest about whether a style or colour would suit you and offers alternatives.  She is awesome at blonde colour also.  Highly recommended.'
        },
        {
          name: 'Lauren',
          feedback: 'Alana has such a passion for what she does.  Visiting her is always a wonderful experience and leaves me feeling fabulous when I leave!'
        },
        {
          name: 'Katie',
          feedback: '5 stars.  Alana did such an amazing job on my hair and the whole experience was so relaxing.'
        },
        {
          name: 'Lissa',
          feedback: 'After several horrible and overpriced cuts since moving to New Zealand, I discovered Hair With a View.  Alana has listened to my hair woes more than once.  She gives her expert advice on not only what would look best, but what will keep my hair healthy.  The relaxed environment and easy conversation, along with affordable prices, is what will make this salon a huge success in Wellington.  Alana cares about your experience.  I am so happy to have found this gem of a salon and am only sorry I didn\'t find it sooner!'
        },
        {
          name: 'Emily',
          feedback: 'Eight years of fantastic cuts, colour and service.  Thanks Alana!'
        }
      ]
    }
  }

  nextTest () {
    if (this.state.index === this.state.testimonials.length - 1) {
      this.setState({index: 0})
    } else {
      this.setState({index: this.state.index + 1})
    }
  }

  prevTest () {
    if (this.state.index === 0) {
      this.setState({index: this.state.testimonials.length - 1})
    } else {
      this.setState({index: this.state.index - 1})
    }
  }

  render () {
    return (
      <div className='bodyComponent'>
        <h2>testimonials</h2>
        <div className='testimonialContainer'>
          <div className='testButtonContainer'>
            <button onClick={this.prevTest.bind(this)}>back</button>
          </div>
          <div className='testimonialPane'>
            <p>{this.state.testimonials[this.state.index].feedback}</p>
            <p>{this.state.testimonials[this.state.index].name}</p>
          </div>
          <div className='testButtonContainer'>
            <button onClick={this.nextTest.bind(this)}>fwd</button>
          </div>
        </div>
      </div>
    )
  }
}

// function to cycle thru state testimonials - need an index in state?
// replace back/fwd with icons later
