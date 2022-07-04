import React from 'react'

function Button({ type = 'button', icon = '', text, className, onClick }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      <span className='material-symbols-outlined'>{icon}</span>
      <span>{text}</span>
    </button>
  )
}

export default Button
