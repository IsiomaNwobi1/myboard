 import React from 'react'
import Logo from '../../assets/images/my-board-logo.png';
import { Link } from 'react-router-dom';
// import './style.css';


export const Right = () => {
    

  return (
    <div className='py-[200px] px-20'>
        <div className='flex items-center justify-center'>
            <img src={Logo} alt='logo'/>
            <p className='px-3 text-[#175CD3] text-[25px]'>My Board</p>
        </div>

        <div>
        <h2 className='flex items-center justify-center pt-5 text-3xl w-200 h-34'>Reset your password</h2>
        </div>

        <div className='flex items-center justify-center'>
        <p className='mt-5 text-[#667085] w-[400px] text-center'>Enter your email below and we’ll send you instructions on how to reset your password.</p>
        </div>

    


   <div className='mt-10'>
    <label className='text-[#212121]'>Email Address</label>
    <input className='border bottom-3 rounded w-full mt-3 h-[50px]' placeholder='sani.jdogo@gmail.com' type='email'/>
    </div>

    <Link to='/reset-password'><div className='flex items-center  justify-center mt-7'>
        <button className="buttoun w-full text-[#FCFCFD] h-[50px]">Send Reset Instructions</button>
      
    </div>
    </Link>
        
    </div>
    )
  }