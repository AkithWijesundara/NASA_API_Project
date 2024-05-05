import React from 'react'
import {Link} from 'react-router-dom'
// import Button from './Button'

export default function Navbar() {

  return (
    <>
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Stellar <i class="fa-solid fa-earth-asia"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/APOD">APOD</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/Mars">MARS</a>
                </li>
                {/* <div className='d-flex'>
                    <li className="nav-item">
                        <Button
                            type= 'button'
                            btnStyle = 'btn-outline-secondary'
                            btnSize = 'btn-sm'
                        >
                            <a className="nav-link" href="/Login">Login</a>
                        </Button>
                    </li>
                </div> */}
                
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}
