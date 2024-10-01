import React from 'react'
import pizzaImage from './hero-pizza.png'
import womanImage from './women.png'
import Image from 'next/image'
import { Box, Button, Container, Typography } from '@mui/material'

export default function PopularPizza() {
  return (
    <Box py={10} bgcolor={'#ede8df'}>
      <Container>
        <Typography variant='h2' fontSize={40} color='#717680' pb={8}>Popular Pizzas</Typography>
        <Box width={'30%'}>
          <Image width={300} height={300} src={pizzaImage} alt='pizza' />
          <Typography variant='h3' fontWeight={600} fontSize={18}>Margherita</Typography>
          <Typography variant='body1' fontSize={12} pb={1}>tomato, mozzarella, Bell Peppers, Onions, Olivers</Typography>
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant='body1' color='green' fontSize={48} fontWeight={600}>150
              <span style={{ verticalAlign: "super", color: 'black', fontSize: '14px', fontWeight: '300' }}>Birr</span></Typography>
            <Button
              sx={{
                backgroundColor: "orange",
                color: "white",
                fontWeight: "700",
                fontSize: "24px",
                cursor: "pointer",
                padding: "0.5rem 2.5rem",
                textTransform: "none",
                borderRadius: '5px'
              }}
            >Order</Button>
          </Box>
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Image style={{borderRadius: '50%'}} width={55} height={55} src={womanImage} alt='pizza' />
            <Typography variant='h4' fontSize={16} fontWeight={600}>Azmera Pizza</Typography>
          </Box>
        </Box>

      </Container>
    </Box>

  )
}
