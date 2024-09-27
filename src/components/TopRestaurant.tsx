import React from 'react'
import pizzaImage from './pizza.jpg'
import Image from 'next/image'
import { CasesOutlined, CheckBoxOutlineBlank } from '@mui/icons-material'

export default function TopRestaurant() {
  return (
    <div>
      <h1>Top Restaurants</h1>
      <div>
        <div>
          <Image src={pizzaImage} alt='pizaa'/>
          <h3>Azmera Pizza</h3>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ducimus! Quidem molestias eos dolores.</h1>
        <div>
          <CheckBoxOutlineBlank/>
          <div>
            <p>number of orders</p>
            <p>2k</p>
          </div>
        </div>
      </div>
    </div>
  )
}
