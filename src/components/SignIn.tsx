import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pizzaIcon from './pizza-icon.png'

export default function SignIn() {
    return (
        <Box display={'flex'} height={'100vh'}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%',
            }}
                bgcolor={'orange'}
            >
                <Image width={400} height={400} src={pizzaIcon} alt='pizza icon' />
            </Box>
            <Box
                sx={{
                    p: 8,
                    width: '50%',
                }}>
                <Box display={'flex'} flexDirection={'column'} gap={2}>
                    <Box display={'flex'} alignItems={'center'}>
                        <Image width={75} height={75} src={pizzaIcon} alt='pizza icon' />
                        <Typography
                            component="h1"
                            variant="h4"
                            color={'orange'}
                            sx={{ fontSize: '1.5rem', fontWeight: '600', mt: 3 }}
                        >

                            Pizza
                        </Typography>
                    </Box>

                    <TextField
                        id="email"
                        type="email"
                        name="email"
                        label="Email adress"
                        placeholder="john@email.com"
                        autoComplete="email"
                        fullWidth
                        variant="outlined"
                    />


                    <TextField
                        name="password"
                        placeholder="••••••••••"
                        type="password"
                        id="password"
                        label="Password"
                        fullWidth
                        variant="outlined"
                    />





                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            backgroundColor: 'orange'

                        }}

                    >
                        Login
                    </Button>

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />

                    <Typography sx={{ textAlign: 'center' }}>
                        Don&apos;t have an account?{' '}
                        <span>
                            <Link style={{ color: 'orange' }} href='/signup'>
                                Sign up
                            </Link>
                        </span>
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}
