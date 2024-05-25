import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'

function Pagenotfound() {

    const [auth,setAuth]=useAuth();

  return (
    <Layout title={'Page not found'}>
        <div className='pnf'>
            <h1 className='pnf-title'>404</h1>
            <h2 className='pnf-heading'>Oop ! Page Not Found</h2>
            <Link to="/" className='pnf-btn'>
                Go Back
            </Link>
        </div>
        <pre>{JSON.stringify(auth,null,4)}</pre> 
    </Layout>
  )
}

export default Pagenotfound
