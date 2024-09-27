import Image from 'next/image'
import React from 'react'
import pizzaImage from './pizza.jpg'
import { Box, Container, Grid, Grid2, Typography } from '@mui/material'

export default function FeaturedPizza() {
  return (
    <Box sx={{pt: 8, pb: 8, backgroundColor: '#ecf3f3'}}>
      <Container>
      <Box>
        <Typography variant='h1' sx={{fontSize: 40, color: '#717680'}}>Featured pizza</Typography>
        <Box sx={{display: 'flex', flex: 1}}>
            <Box>
              <h2>Make your first order and get <span>50% off</span></h2>
              <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Est tempore minima,
                nihil maiores asperiores reprehenderit quia dignissimos magni facilis eligendi
                excepturi sunt at placeat expedita ducimus dicta, distinctio soluta obcaecati!</p>
              <button>Order us</button>
            </Box>
            <Box sx={{width: '50%', height: 200}}>
              <Image src={pizzaImage} alt='pizza' />
            </Box>
          
        </Box>
      </Box>
      </Container>  
    </Box>


  )
}
