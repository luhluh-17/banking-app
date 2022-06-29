import React from 'react'

function Fab({ icon, text, cb }) {
  return (
    <button className='btn fab' onClick={cb}>
      <div className='flex-row-c'>
        <span className='material-symbols-outlined'>{icon}</span>
        <span>{text}</span>
      </div>
    </button>
  )
}

export default Fab
