import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <main className='flex-col'>
      <h1>Landing Page</h1>
      <p>Hero Section Goes Here</p>
      <Link to='/login' className='btn'>
        Go to Login Page
      </Link>
    </main>
  )
}

export default Landing
