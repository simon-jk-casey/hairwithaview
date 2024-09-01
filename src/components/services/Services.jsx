import React, { Component } from "react";

import './Services.css'

const cuts = [
    {
        id: 0,
        type: "Women's Cut & Blowdry",
        price: "$99"
    },
    {
        id: 1,
        type: "Men's Cut",
        price: "$47"
    },
    {   
        id: 2,
        type: "Kid's Cut ~ Under 12",
        price: "$40"
    },
    {
        id: 3,
        type: "Kid's Cut ~ Under 18",
        price: "$50"
    }
]

const roots = [
    {
        id: 4,
        type: "Roots ~ Cut",
        price: "$220"
    },
    {
        id: 5,
        type: "Roots ~ No Cut",
        price: "$140"
    }
]

const through = [
    {
        id: 6,
        type: "Throughout ~ Cut",
        price: "$245"
    },
    {
        id: 7,
        type: "Throughout ~ No Cut",
        price: "$165"
    }
]

const toner = [
    {
        id: 8,
        type: "Toner ~ Cut",
        price: "$155"
    },
    {
        id: 9,
        type: "Toner ~ No Cut",
        price: "$100"
    }

]

const ombre = [
    {
        id: 10,
        type: "Ombre ~ Cut",
        price: "$355"
    },
    {
        id: 11,
        type: "Ombre ~ No Cut",
        price: "$305"
    }
]

const fullHead = [
    {
        id: 12,
        type: "Full Head ~ Cut",
        price: "$330"
    },
    {
        id: 13,
        type: "Full Head ~ No Cut",
        price: "$280"
    }
]

const halfHead = [
    {
        id: 13,
        type: "Half Head ~ Cut",
        price: "$280"
    },
    {
        id: 14,
        type: "Half Head ~ No Cut",
        price: "$230"
    }
]

const foils = [
    {
        id: 15,
        type: "Foils and Base Colour ~ Cut",
        price: "$380"
    },
    {
        id: 16,
        type: "Foils and Base Colour ~ No Cut",
        price: "$350"
    }
]

const other = [
    {
        id: 17,
        type: "Special Hair Up",
        price: "$90"
    },
    {
        id: 18,
        type: "Wash & Blowdry",
        price: "$75"
    },
    {
        id: 19,
        type: "Aura Smoothing",
        price: "$300"
    }
]


export default class Services extends Component {

    render () {
        return (
            <div className='servicesContainer'>
                <h2>Services</h2>
                <div className='listSection'>
                    {cuts.map(element => {
                        return (
                            <div key={element.id} className='listItem'>
                                <div className='serviceItem'><p className='listText'>{element.type}</p></div>
                                <div className='servicePrice'><p className='listText'>{element.price}</p></div>
                            </div>
                        )
                    })}
                </div>
                <div className='listSection'>
                    {roots.map(element => {
                        return (
                            <div key={element.id} className='listItem'>
                                <div className='serviceItem'><p className='listText'>{element.type}</p></div>
                                <div className='servicePrice'><p className='listText'>{element.price}</p></div>
                            </div>
                        )
                    })}
                </div>
                <div className='listSection'>
                    {through.map(element => {
                        return (
                            <div key={element.id} className='listItem'>
                                <div className='serviceItem'><p className='listText'>{element.type}</p></div>
                                <div className='servicePrice'><p className='listText'>{element.price}</p></div>
                            </div>
                        )
                    })}
                </div>
                <div className='listSection'>
                    {toner.map(element => {
                        return (
                            <div key={element.id} className='listItem'>
                                <div className='serviceItem'><p className='listText'>{element.type}</p></div>
                                <div className='servicePrice'><p className='listText'>{element.price}</p></div>
                            </div>
                        )
                    })}
                </div>
                <div className='listSection'>
                    {ombre.map(element => {
                        return (
                            <div key={element.id} className='listItem'>
                                <div className='serviceItem'><p className='listText'>{element.type}</p></div>
                                <div className='servicePrice'><p className='listText'>{element.price}</p></div>
                            </div>
                        )
                    })}
                </div>
                <div className='listSection'>
                    {fullHead.map(element => {
                        return (
                            <div key={element.id} className='listItem'>
                                <div className='serviceItem'><p className='listText'>{element.type}</p></div>
                                <div className='servicePrice'><p className='listText'>{element.price}</p></div>
                            </div>
                        )
                    })}
                </div>
                <div className='listSection'>
                    {halfHead.map(element => {
                        return (
                            <div key={element.id} className='listItem'>
                                <div className='serviceItem'><p className='listText'>{element.type}</p></div>
                                <div className='servicePrice'><p className='listText'>{element.price}</p></div>
                            </div>
                        )
                    })}
                </div>
                <div className='listSection'>
                    {foils.map(element => {
                        return (
                            <div key={element.id} className='listItem'>
                                <div className='serviceItem'><p className='listText'>{element.type}</p></div>
                                <div className='servicePrice'><p className='listText'>{element.price}</p></div>
                            </div>
                        )
                    })}
                </div>
                <div className='listSection'>
                    {other.map(element => {
                        return (
                            <div key={element.id} className='listItem'>
                                <div className='serviceItem'><p className='listText'>{element.type}</p></div>
                                <div className='servicePrice'><p className='listText'>{element.price}</p></div>
                            </div>
                        )
                    })}
                </div>
                <h4>All prices are a guideline and GST inclusive. Extra charges will apply for more product if required.</h4>
            </div>
        )
    }
}