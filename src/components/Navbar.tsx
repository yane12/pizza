import { LocalPizza } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box bgcolor={'rgba(251, 231, 239)'}>
      <Container sx={{ py: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Link href='/'>
              <Box display={"flex"} alignItems={"center"} color={'#bf743b'}>
                <LocalPizza />
                <Typography variant="h1" sx={{ fontSize: "24px", fontWeight: 800 }}>Pizza</Typography>
              </Box>
            </Link>
          </Box>

          <Box
            display={'flex'}
            gap={10}
            color={'#5c5a57'}
            fontWeight={600}
            fontSize={20}
          >
            <Link href='/'>
              Home
            </Link>
            <Link href='/orders'>Orders</Link>
            <Link href='#'>Who we are</Link>
          </Box>


          <Button sx={
            {
              backgroundColor: "#ff8c00",
              color: "white",
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