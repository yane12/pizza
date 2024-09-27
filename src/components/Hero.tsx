import { Box, Container } from '@mui/material'
import React from 'react'
import pizzaImage from './pizza.jpg';
import Image from 'next/image';

export default function Hero() {
  return (
    <Box>
      <Container>
        <Box>
          <h1>Order us</h1>
          <p>In publishing and graphic design, Lorem ipsum is 
            placeholder text commonly used to demonstrate the visual form 
            of a document of typeface without.
          </p>
          <input type="text" placeholder='search' />
        </Box>
        <Box>
          <Image src={pizzaImage} alt='pizza image'/>
        </Box>
        
      </Container>
    </Box>
  )
}
