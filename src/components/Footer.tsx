import { Copyright, Facebook, LinkedIn, LocalPizza, X, YouTube } from '@mui/icons-material'
import Send from '@mui/icons-material/Send'
import { Box, Container, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <Box>
      <Box py={8} bgcolor={'#705C53'}>
        <Container>
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Box fontSize={20} fontWeight={600} display={'flex'} gap={8}>
              <Link href='#'>Home</Link>
              <Link href='#'>Order</Link>
              <Link href='#'>About Us</Link>
            </Box>
            <Box>
              <div><LocalPizza />Pizza</div>
              <OutlinedInput
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  fontSize: '18px',
                  width: '80%',
                  px: 2,
                  height: 48,
                  mt: 3,
                  color: "#5c5a57"
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <Send sx={{ color: 'orange' }} />
                  </InputAdornment>
                }
                label="Your Feedback"
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box py={2} bgcolor={'black'} color={'white'}>
        <Container>
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>

            <Box display={'flex'} alignItems={'center'} gap={5} fontSize={12}>
              <Box display={'flex'} alignItems={'center'} >
                <Copyright sx={{ fontSize: '16px' }} />
                <Typography fontSize={14}>Pizza All Rights Reserved</Typography>
              </Box>
              <Typography fontSize={14}>Terms & conditions</Typography>
            </Box>

            <Box>
              <Facebook/>
              <LinkedIn />
              <X />
              <YouTube />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
