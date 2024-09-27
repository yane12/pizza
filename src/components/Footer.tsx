import { Copyright, Facebook, LinkedIn, LocalPizza, X, YouTube } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <div>
        <div>
          <Link href='#'>Home</Link>
          <Link href='#'>Order</Link>
          <Link href='#'>About Us</Link>
        </div>
        <div>
          <div><LocalPizza/>Pizza</div>
          <input type="text" placeholder='Your feedback' />
        </div>
      </div>
      <div>
        <div>
          <p><Copyright/> Pizza All Rights Reserved</p>
          <p>Terms & conditions</p>
        </div>
        <div>
          <Facebook/>
          <LinkedIn/>
          <X/>
          <YouTube/>
        </div>
      </div>
    </div>
   
  )
}
