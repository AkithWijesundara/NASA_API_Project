import React from 'react'

export default function Button({
    children,
    onClick,
    btnStyle,
    btnSize,
    type
}) {
  return (
    <>
        <button 
        type={type}
        onClick = {onClick}
        className= {`btn ${btnStyle} ${btnSize}`}
        >
            {children}
        </button>
    </>
  )
}
