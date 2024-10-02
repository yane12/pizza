import Image from 'next/image'
import React from 'react'
import pizzaImage from './popular-pizza.png'
import { Box, Button, Container, Typography } from '@mui/material'

export default function FeaturedPizza() {
  return (
    <Box sx={{
      py: 8,
      background: 'rgba(251, 231, 239)'
    }}>
      <Container>
        <Box>
          <Typography variant='h2' sx={{
            fontSize: 40,
            color: '#717680',
            mb: '1rem'
          }}>
            Featured pizza</Typography>
          <Box sx={{
            borderRadius: 10,
            border: 1,
            borderColor: 'transparent',
            backgroundColor: '#bdaf99',
            pl: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Box sx={{ width: '65%' }}>
              <Typography variant='h3'>Make your first order and get <span>50% off</span></Typography>
              <Typography variant='body1'>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Est tempore minima,
                nihil maiores asperiores reprehenderit quia dignissimos magni facilis eligendi
                excepturi sunt at placeat expedita ducimus dicta, distinctio soluta obcaecati!</Typography>
              <Button sx={
                {
                  backgroundColor: "#bf743b",
                  color: "#f7ce97",
                  fontWeight: "700",
                  fontSize: "18px",
                  cursor: "pointer",
                  padding: "0.5rem 1.5rem",
                  textTransform: "none",
                  borderRadius: '5px'
                }
              }>Order us</Button>
            </Box>
            <Box sx={{ width: '35%' }}>
              <Image style={{ width: '300px', height: '300px' }} src={pizzaImage} alt='pizza' />
            </Box>

          </Box>
        </Box>
      </Container>
    </Box>
  )
}
