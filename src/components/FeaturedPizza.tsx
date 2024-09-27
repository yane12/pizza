import Image from 'next/image'
import React from 'react'
import pizzaImage from './pizza.jpg'
import { Box, Container } from '@mui/material'

export default function FeaturedPizza() {
  return (
    <Box>
      <Container>
      <Box>
        <h1>Featured pizza</h1>
        <div>
          <div>
            <div>
              <h2>Make your first order and get <span>50% off</span></h2>
              <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Est tempore minima,
                nihil maiores asperiores reprehenderit quia dignissimos magni facilis eligendi
                excepturi sunt at placeat expedita ducimus dicta, distinctio soluta obcaecati!</p>
              <button>Order us</button>
            </div>
            <div>
              <Image src={pizzaImage} alt='pizza' />
            </div>
          </div>
        </div>
      </Box>
      </Container>  
    </Box>


  )
}
