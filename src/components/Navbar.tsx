import { LocalPizza } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box sx={{ backgroundColor: '#ffd9bd' }}>
      <Container sx={{ py: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: "flex", alignItems: "center", color: '#bf743b' }}>
            <LocalPizza />
            <Typography variant="h1" sx={{fontSize: "24px", fontWeight: 800}}>Pizza</Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            gap: '2rem',
            color: '#5c5a57',
            fontWeight: '700',
            fontSize: '18px',
          
          }}>
            <Link href='/'>
              Home
            </Link>
            <Link href='/orders'>Orders</Link>
            <Link href='#'>Who we are</Link>
          </Box>


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
          }>Regitser</Button>

        </Box>
      </Container>
    </Box>
  )
}