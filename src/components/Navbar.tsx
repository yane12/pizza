import { LocalPizza } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import Link from "next/link";
 
export default function Navbar() {
  return (
    <Box sx={{backgroundColor: 'background.paper'}}>
      <Container sx={{py: {xs: 2, md: 3}}}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div>
          <LocalPizza/>
          <p>Pizza</p>
        </div>

        <div>
          <Link href='/'>Home</Link>
          <Link href='/orders'>Orders</Link>
          <Link href='#'>Who we are</Link>
        </div>

        <div>
          <button>Regitser</button>
        </div>
      </Box>
      </Container>
    </Box>
  )
}