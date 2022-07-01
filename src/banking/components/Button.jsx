import React from 'react'

function Button({ icon, text, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <span className='material-symbols-outlined'>{icon}</span>
      <span>{text}</span>
    </button>
  )
}

export default Button
