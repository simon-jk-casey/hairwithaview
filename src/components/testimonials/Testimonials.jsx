import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
          name: 'Emily',
          feedback: 'Eight years of fantastic cuts, colour and service.  Thanks Alana!'
        },
        {
          name: "Melanie Quigg",
          feedback: "I love going to Alana for my hair! I did my research when I moved to Wellington and thought I'd try a couple out, however I tried Hair with a view and loved it so much I never left! Alana is great at discussing what you want done with your hair, provides options and is always so lovely to talk to!"
        },
        {
          name: "Natasha Beardsley",
          feedback: "Highly recommend visiting Hair With A View. Alana has been my hairdresser for many years and does a beautiful job every time. I love catching up for a chat, and always leave her salon feeling pampered and like a new me."
        },
        {
          name: "Alison Smith",
          feedback: "Alana is amazing, listens, advises on styles, makes you more than comfortable. Her place is gorgeous, so personal, not like the big impersonal salons, you are treated like an individual. The longest I have stayed with a single hairdresser, she’s a gem xx"
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
      <div className='testComponent'>
        <h2 className='testHeader'>Testimonials</h2>
        <div className='testimonialContainer'>
          <div className='testButtonContainerLeft'>
            <FontAwesomeIcon
              className='testIcon'
              icon={faChevronLeft}
              size='2x'
              onClick={this.prevTest.bind(this)}
            />
          </div>
          <div className='testimonialPane'>
            <p>{this.state.testimonials[this.state.index].feedback}</p>
            <p> - {this.state.testimonials[this.state.index].name}</p>
          </div>
          <div className='testButtonContainerRight'>
            <FontAwesomeIcon
              className='testIcon'
              icon={faChevronRight}
              size='2x'
              onClick={this.nextTest.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }
}
