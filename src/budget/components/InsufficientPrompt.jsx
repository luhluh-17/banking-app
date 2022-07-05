import React from 'react'

const InsufficientPrompt = ({onChangeModalOpen}) => {
  return (
    <div
      style={{
        height: '10rem',
        width: '10rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <span className="material-symbols-outlined">close</span>
      <h3>Insufficient Balance!</h3>
      <p onClick={()=> onChangeModalOpen(false)}>Close</p>
    </div>
  )
}

export default InsufficientPrompt
