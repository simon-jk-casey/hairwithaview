import React, { Component } from 'react'

export default class Testimonials extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      testimonials: [
        {
          name: 'Gregor Clegane',
          feedback: 'In a pulvinar turpis. Mauris rhoncus malesuada purus et fermentum. Cras sed commodo lectus. Quisque eget nisi interdum, interdum neque at, blandit ipsum. Proin eu massa at libero venenatis sagittis. Suspendisse malesuada sapien dolor, a fermentum mi iaculis sit amet. Aenean molestie nunc eget sem mollis mattis.'
        },
        {
          name: 'Arya Stark',
          feedback: 'Proin sapien urna, pellentesque eu volutpat id, ultricies sed risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce elementum eu mi in suscipit. Pellentesque mollis eu leo non commodo. Fusce mollis nisl ipsum, ut commodo ligula auctor vel. Sed sed mauris sit amet sem eleifend porta. Phasellus gravida tellus purus, eget luctus nunc malesuada sed.'
        },
        {
          name: 'Melania Trump',
          feedback: 'Praesent condimentum, nisl quis tincidunt pellentesque, neque est mattis nibh, vulputate fermentum diam enim quis est. Vivamus in tortor eget nulla lacinia gravida eget quis nulla. Donec efficitur congue nisi quis condimentum. Duis pellentesque ullamcorper ipsum, in interdum lorem accumsan in. Mauris gravida sit amet leo non lacinia.'
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
      <div>
        <h1>Testimonials</h1>
        <div>
          <button onClick={this.prevTest.bind(this)}>back</button>
        </div>
        <div>
          <p>{this.state.testimonials[this.state.index].feedback}</p>
          <p>{this.state.testimonials[this.state.index].name}</p>
        </div>
        <div>
          <button onClick={this.nextTest.bind(this)}>fwd</button>
        </div>
      </div>
    )
  }
}

// function to cycle thru state testimonials - need an index in state?
// replace back/fwd with icons later
