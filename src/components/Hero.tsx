import { Box, Container, InputAdornment, InputBase, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import pizzaImage from './hero-pizza.png';
import Image from 'next/image';
import Search from '@mui/icons-material/Search';
import SearchRounded from '@mui/icons-material/SearchRounded';

export default function Hero() {
  return (
    <Box py={10} sx={{
      background: 'linear-gradient(rgba(251, 231, 239), rgba(251, 231, 239), rgba(252, 162, 95, .6), rgba(251, 231, 239))',
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
          <OutlinedInput sx={{
            backgroundColor: "white",
            borderRadius: 10,
            fontSize: '18px',
            width: '80%',
            px: 2,
            height: 80,
            mt: 3,
            color: "#5c5a57"
          }}
            endAdornment={
              <InputAdornment position="end">
                <SearchRounded sx={{ color: 'orange', fontSize: '48px' }} />
              </InputAdornment>
            }
            label='search' />
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
