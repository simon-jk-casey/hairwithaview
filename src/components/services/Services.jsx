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
        price: "$155.00"
    }
]

export default class Services extends Component {

    // listCreator(arr) {

    //     arr.map(element => {
    //         return (
    //             <listSection>
    //                 <listItem><category>{element.type}</category></listItem>
    //             </listSection>
    //         )
    //     });
    // }

    render () {
        return (
            <div className='servicesContainer'>
                <h2>Services</h2>
                <div className='listSection'>
                    {cuts.map(element => {
                        return (
                            <div key={element.id} className='listItem'>
                                <div><p>{element.type}</p></div>
                                <div><p>{element.price}</p></div>
                            </div>
                        )
                    })}
                    {roots.map(element => {
                        return (
                            <div key={element.id} className='listItem'>
                                <div><p>{element.type}</p></div>
                                <div><p>{element.price}</p></div>
                            </div>
                        )
                    })}
                    {through.map(element => {
                        return (
                            <div key={element.id} className='listItem'>
                                <div><p>{element.type}</p></div>
                                <div><p>{element.price}</p></div>
                            </div>
                        )
                    })}
                </div>
                <h4>All prices are a guideline and GST inclusive. Extra charges will apply for more product if required.</h4>
            </div>
        )
    }
}