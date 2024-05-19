import React from 'react'
import '../styles/APOD.css'

export default function Main({
    image,
    onImageClick
}) {
  return (
    <div className='image-container'>
        {image.media_type === 'image'?(
        <img src={image.hdurl} alt={image.title} className="bgImage" onClick={() => onImageClick(image)} />
      ):image.media_type === 'video'?(
        <iframe
          src={image.url}
          title={image.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ):(
        <p>Resourse Type Not identified</p>
      )}
    </div>
  )
}
