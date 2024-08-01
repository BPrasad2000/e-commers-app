import React from 'react'
import Layout from '../../Layout/Layout'
import UserMenu from '../../Layout/UserMenu'
import { useAuth } from '../../../context/auth'

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiPostOffice } from "react-icons/gi";

const Dashboard = () => {
  const [auth] =useAuth();
  return (
    <Layout title={'user dashbord'}>
      <div className='container-fluid m-3 p-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <UserMenu/>
                </div>
                <div className='col-md-9'>
                    <div className='card w-75 p-3'>
                    <h3><FaUser color='Black' className='m-2' /> {auth?.user?.name}</h3>
                      <h3><MdEmail color='gray' className='m-2' />{auth?.user?.email}</h3>
                      <h3><GiPostOffice  color='black'  className='m-2' />{auth?.user?.address}</h3>

                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Dashboard
