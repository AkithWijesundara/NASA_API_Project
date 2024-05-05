import React from 'react'
import '../styles/APOD.css'

export default function Main({
    image,
    onImageClick
}) {
  return (
    <div className='image-container'>
        <img src={image.hdurl} alt={image.title} className="bgImage" onClick={() => onImageClick(image)} />
    </div>
  )
}
