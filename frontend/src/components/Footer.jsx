import React from 'react'

export default function Footer({ imageName}) {
  return (
    <>
      <footer>
        <div className='footer-text'>
            <h2>Astronomical Picture of the day</h2>
            <h1>{imageName}</h1>
        </div>
        
    </footer>
    </>
  )
}
