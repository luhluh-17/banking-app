import React from 'react'

function Fab({ icon, text, onClick }) {
  return (
    <button className='btn-secondary fab' onClick={onClick}>
      <div className='flex-row-c'>
        <span className='material-symbols-outlined'>{icon}</span>
        <span>{text}</span>
      </div>
    </button>
  )
}

export default Fab
