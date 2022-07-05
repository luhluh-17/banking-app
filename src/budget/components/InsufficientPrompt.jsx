import React from 'react'

const InsufficientPrompt = ({onChangeModalOpen}) => {
  return (
    <div className='modal error'>
      <span className="material-symbols-outlined" onClick={()=> onChangeModalOpen(false)}>close</span>
      <h3>Insufficient Balance!</h3>
    </div>
  )
}

export default InsufficientPrompt
