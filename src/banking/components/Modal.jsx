import React, { useEffect, useRef } from 'react'

function Modal({
  children,
  title = '',
  subtitle = '',
  isOpen,
  onRequestClose,
}) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialogNode = dialogRef.current
    if (isOpen) {
      dialogNode.showModal()
    } else {
      dialogNode.close()
    }
  }, [isOpen])

  useEffect(() => {
    const dialogNode = dialogRef.current
    const handleCancel = event => {
      event.preventDefault()
      onRequestClose()
    }
    dialogNode.addEventListener('cancel', handleCancel)
    return () => {
      dialogNode.removeEventListener('cancel', handleCancel)
    }
  }, [onRequestClose])

  return (
    <dialog ref={dialogRef}>
      <div className='flex-col'>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        {children}
      </div>
    </dialog>
  )
}

export default Modal
