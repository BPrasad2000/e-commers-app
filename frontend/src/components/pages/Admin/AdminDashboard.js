import React from 'react'
import Layout from '../../Layout/Layout'
import AdminMenu from '../../Layout/AdminMenu'
import { useAuth } from '../../../context/auth'

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const AdminDashboard = () => {
  const [auth] =useAuth();

  return (
    <Layout>
     <div className='container-fluid m-3 p-3'>
      <div className='row'>
        <div className='col-md-3'>
          <AdminMenu/>
        </div>
        <div className='col-md-9'>
          <div className='card w-75 p-3'>
            <h4><FaUser color='Black' className='m-2' /><b>Admin Name:</b> <b className='text-primary'>{auth?.user?.name}</b></h4>
            <h4><MdEmail color='gray' className='m-2' /><b>Admin Email:</b> <b className='text-primary'>{auth?.user?.email}</b></h4>
            <h4><FaPhoneVolume color='blue'  className='m-2' /><b>Admin Contact:</b> <b className='text-primary'>{auth?.user?.phone}</b></h4>

          </div>
        </div>
      </div>
     </div>
    </Layout>
  )
}

export default AdminDashboard
