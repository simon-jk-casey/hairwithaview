import React, { Component } from 'react'

import priceList from '../../assets/other/hwav_pricelist.pdf'

export default class Services extends Component {
  render () {
    return (
      <div>
        <p>
          Ut efficitur lacus nec nibh convallis fermentum. Maecenas porta augue in tincidunt ultrices. Aenean arcu tellus, viverra eu enim nec, finibus imperdiet massa. Suspendisse malesuada, turpis eget ultrices commodo, ipsum eros aliquam leo, eget faucibus elit metus ac elit. Cras bibendum faucibus diam at interdum. Nullam aliquet sodales neque. Cras blandit et ex at malesuada. Duis ut ullamcorper tortor, eu lacinia massa.
        </p>
        <a href={priceList} target='_blank'>
          Price List
        </a>
      </div>
    )
  }
}
