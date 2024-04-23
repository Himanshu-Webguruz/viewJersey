import React from 'react'

const Button = ({name, onClick}) => {
  return (
    <>
    <div className="row mt-3">
    <button className="btn btn-primary" onClick={onClick} >{name}</button>
    </div>
    
    </>
  )
}

export default Button;