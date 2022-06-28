import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='flex-col'>
      <h2>404</h2>
      <p>page not found</p>
      <Link to='/'>back home</Link>
    </section>
  )
}
export default Error
