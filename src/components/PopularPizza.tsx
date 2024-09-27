import React from 'react'
import pizzaImage from './pizza.jpg'
import Image from 'next/image'

export default function PopularPizza() {
  return (
    <div>
      <h1>Popular Pizzas</h1>
      <div>
        <Image src={pizzaImage} alt='pizza'/>
        <h2>Margherita</h2>
        <p>tomato, mozzarella, Bell Peppers, Onions, Olivers</p>
        <div>
          <p>150 <span>birr</span></p>
          <button>Order</button>
        </div>
        <div>
        <Image src={pizzaImage} alt='pizza'/>
        <h3>Azmera Pizza</h3>
        </div>
      </div>
    </div>
  )
}
