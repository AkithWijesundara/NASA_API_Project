import React,{useState,useEffect} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../styles/APOD.css'

export default function Sidebar({ isOpen, toggleDrawer, imageName, imageDescription, imageDate }) {

  return (
    <>
    <div className='sidebar-main'>
        <Offcanvas show={isOpen} onHide={toggleDrawer} placement='bottom'>
            <div className='sidebar-container'>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>{imageName} : {imageDate}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {imageDescription}
                </Offcanvas.Body>
            </div>     
        </Offcanvas>
    </div>
        
    </>
  )
}
