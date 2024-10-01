import React from 'react'
import pizzaImage from './hero-pizza.png'
import Image from 'next/image'
import { CasesOutlined, CheckBoxOutlineBlank } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import LunchDining from '@mui/icons-material/LunchDining'

export default function TopRestaurant() {
  return (
    <Box sx={{ py: 10, backgroundColor: '#ede8df' }}>
      <Container>
        <Typography variant='h2' sx={{ fontSize: 40, color: '#717680', pb: 8 }}>Top Restaurants</Typography>

        <Box sx={{
          width: '500px',
          backgroundColor: 'white',
          borderRadius: 5,
          p: 3,
          display: 'flex',
          alignItems: 'center'
        }}>
          <Box sx={{width: '50%'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '.5rem', pb: 1}}>
              <Image style={{ borderRadius: "50%" }} width={50} height={50} src={pizzaImage} alt='pizza' />
              <h3>Azmera Pizza</h3>
            </Box>
            <Typography variant='body1' fontSize={12}>Lorem ipsum dolor sit amet  elit. Eum, ducimus! Quidem molestias eos dolores.</Typography>

          </Box>
          <Box sx={{
            display: 'flex', 
            gap: '.5rem',
            alignItems: 'center'
          }}>
            <LunchDining  sx={{
              color: 'orange', 
              width: 60,
              height: 60,
              backgroundColor: '#FFDBBB', 
              borderRadius: '50%',
              p: '1rem'
              }}/>
            <Box pl={2}>
              <Typography variant='body1' fontSize={12}>number of orders</Typography>
              <Typography variant='body1' fontSize={48} fontWeight={600} color= {'orange'}>2k</Typography>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  )
}
