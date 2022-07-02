import React from 'react'

function Button({ type = 'button', icon = '', text, className, onClick }) {
  const googleIcon = () => (
    <span className='material-symbols-outlined'>{icon}</span>
  )

  return (
    <button type={type} className={className} onClick={onClick}>
      {icon && googleIcon()}
      <span>{text}</span>
    </button>
  )
}

export default Button
