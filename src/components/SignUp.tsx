import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pizzaIcon from './pizza-icon.png'
import UploadFile from '@mui/icons-material/UploadFile'
import Upload from '@mui/icons-material/Upload'
import FileUploadOutlined from '@mui/icons-material/FileUploadOutlined'
import LocalPizza from '@mui/icons-material/LocalPizza'

export default function SignUp() {
    return (
        <Box display={'flex'} height={'100%'}>
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
                        <Image width={75} height={75} src={pizzaIcon} alt='pizza icon'/>
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
                        type="text"
                        name="name"
                        label="Your Name"
                        placeholder="Super Admin"
                        fullWidth
                        variant="outlined"
                    />

                    <TextField
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

                    <TextField
                        name="confirm-password"
                        placeholder="••••••••••"
                        type="password"
                        id="password"
                        label="Confirm Password"
                        fullWidth
                        variant="outlined"
                    />

                    <TextField
                        type="tel"
                        name="phone"
                        label="Phone Number"
                        placeholder="0911555555"
                        fullWidth
                        variant="outlined"
                    />

                    <TextField
                        type="text"
                        name="restaurant-name"
                        label="Restaurant Name"
                        placeholder="Azmera Pizaa"
                        fullWidth
                        variant="outlined"
                    />

                    <TextField
                        type="text"
                        name="location"
                        label="Location"
                        placeholder="Addis Ababa"
                        fullWidth
                        variant="outlined"
                    />

                    <Button
                        sx={{
                            backgroundColor: 'white',
                            color: 'orange'
                        }}
                        variant="contained"
                        component="label"
                    >
                        <FileUploadOutlined />
                        Upload Logo
                        <input
                            type="file"
                            hidden
                        />
                    </Button>


                    <FormControlLabel
                        control={<Checkbox value="terms" color="primary" />}
                        label="I accept the terms and conditon"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"

                        sx={{
                            backgroundColor: 'orange',
                            boxShadow: 'none'
                        }}
                    >

                        Sign up
                    </Button>
                    <Typography sx={{ textAlign: 'center' }}>
                        Don&apos;t have an account?{' '}
                        <span>
                            <Link style={{ color: 'orange' }} href='/signin'>
                                Login
                            </Link>
                        </span>
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}
