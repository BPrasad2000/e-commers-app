import React,{useState} from 'react'
import Layout from '../../Layout/Layout'
import toast from 'react-hot-toast';
import axios from 'axios';

import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

    const [email,setEmail] =useState('');
    const [newPassword,setNewPassword] =useState('');
    const [answer,setAnswer] =useState('');



    const navigate= useNavigate();


    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
            const res =await axios.post('http://localhost:8080/api/v1/auth/forgot-password',
            {email,newPassword,answer}
            );
            if(res.data.success){
                toast.success(res.data.msg);
               
               
                 navigate('/login');
            }
            else{
                toast.error(res.data.msg)
            }

        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }


    }

  return (
    <Layout title={"reset-password"}>
           <div className='register'>
                
                <form  onSubmit={handleSubmit} className="login-form">
                <h1 className="text-center">Reset_Password</h1>
                    <div className="mb-3">
                        Email
                        <input type="email"  value={email} onChange={(e)=> {setEmail(e.target.value)}} className="form-control"  id="exampleInputEmail" placeholder='Enter your Email' required />
                        
                    </div>
                    <div className="mb-3">
                    Your favorite spots
                        <input type="text"  value={answer} onChange={(e)=> {setAnswer(e.target.value)}} className="form-control"  id="exampleInputAnswer" placeholder='Enter your Answer' required />
                        
                    </div>
                    <div className="mb-3">
                        Password
                        <input type="password" value={newPassword} onChange={(e)=> {setNewPassword(e.target.value)}} className="form-control" id="exampleInputPassword" placeholder='Enter your Password' required/>
                    </div>
        
                   
                    <button type="submit" className="login-btn">Reset</button>
                </form>
            </div>
    </Layout>
  )
}

export default ForgotPassword

