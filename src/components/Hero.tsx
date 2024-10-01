import { Box, Container, InputBase, Typography } from '@mui/material'
import React from 'react'
import pizzaImage from './hero-pizza.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <Box sx={{
      backgroundColor: "#ffd9bd",
      py: '4rem',
    }}>
      <Container sx={{
        display: 'flex',

      }}>
        <Box>
          <Typography variant='h1' sx={{
            fontWeight: '700',
            color: '#bf743b',
            fontSize: '8rem',
            width: '70%'
          }}>
            Order us
          </Typography>
          <Typography variant='body1' sx={{
            fontSize: "18px",
            color: '#5c5a57'
          }}>
            In publishing and graphic design, Lorem ipsum is
            placeholder text commonly used to demonstrate the visual form
            of a document of typeface without.
          </Typography>
          <InputBase sx={{
            backgroundColor: "white",
            borderRadius: 10,
            fontSize: '18px',
            width: '80%',
            px: 2,
            height: 80,
            mt: 3,
            color: "#5c5a57"
          }} placeholder='search' />
        </Box>
        <Box sx={{
          width: '30%',

        }}>
          <Image style={{ width: '400px', height: '400px' }} src={pizzaImage} alt='pizza image' />
        </Box>

      </Container>
    </Box>
  )
}
