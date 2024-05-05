import React from 'react'
import '../styles/hero.css'
import Button from '../components/Button'
import { Link } from '@mui/material'


export default function HeroSection() {

  return (
    <div className='hero-container'>
        <h1>STELLAR</h1>
        <p className='typed-text'>Dive into the vast space to uncover it's secrets</p>
        <div className='hero-btns'>
            <Button
            type= 'button'
            btnStyle = 'btn-outline-primary'
            btnSize = 'btn-lg'
            >
                GET STARTED
            </Button>
            
            <Link href="/Signin" sx={{textDecoration: 'none'}}>
              <Button
                type= 'button'
                btnStyle = 'btn-primary'
                btnSize = 'btn-lg'>
                    SIGN IN
                </Button>
            </Link>  
            

        </div>
    </div>
  )
}
