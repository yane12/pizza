import React from 'react'
import pizzaImage from './hero-pizza.png'
import womanImage from './women.png'
import Image from 'next/image'
import { Box, Button, Container, Typography } from '@mui/material'

export default function OrderHistory() {
  return (
    <Box py={10} bgcolor={'rgba(251, 231, 239)'}>
      <Container>
        <Typography variant='h2' fontSize={40} color='#717680' pb={2}>Order History</Typography>
        <Box width={'30%'}>
          <Image width={300} height={300} src={pizzaImage} alt='pizza' />
          <Typography variant='h3' fontWeight={600} fontSize={18}>Margherita</Typography>
          <Typography variant='body1' fontSize={12} pb={1}>tomato, mozzarella, Bell Peppers, Onions, Olivers</Typography>
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant='body1' color='green' fontSize={48} fontWeight={600}>150
              <span style={{ verticalAlign: "super", color: 'black', fontSize: '14px', fontWeight: '300' }}>Birr</span></Typography>
            <Typography variant='h4' color={'green'} fontWeight={600} fontSize={32}>Received</Typography>
          </Box>
          
        </Box>

      </Container>
    </Box>

  )
}
