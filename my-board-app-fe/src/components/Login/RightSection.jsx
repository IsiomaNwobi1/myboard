import React, { useState } from 'react'
import Logo from '../../assets/images/my-board-logo.png';
import Google from '../../assets/images/Google.png';
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';
import './style.css';


export const RightSection = () => {
    

  return (
    <div className='py-20 px-20'>
        <div className='flex items-center justify-center'>
            <img src={Logo} alt='logo'/>
            <p className='px-3 text-[#175CD3] text-[25px]'>My Board</p>
        </div>

        <div>
        <h2 className='flex items-center justify-center pt-5 text-3xl w-200 h-34'>Welcome back to My Board</h2>
        </div>
    


   <div className='mt-10'>
    <label >Email Address</label>
    <input className='border bottom-3 rounded w-full mt-3' placeholder='sani.jdogo@gmail.com' type='email'/>
    </div>

    <div className='pt-2'>
    <label>Password</label>
    <input className='border bottom-3 rounded w-full mt-3' placeholder='**********' type='password'/>
    </div>


       <p className='mt-[15px] text-blue-700 underline underline-offset-4 '><Link to ='/initiate-reset-password'>Forgot Password?</Link></p>
    

        <div className="m-[30px_6px_6px_50px] flex flex-row justify-between w-[476px] box-sizing-border">
            <div className="flex flex-row box-sizing-border">
              <div className="m-[10px_14px_9px_0] flex flex-row justify-center w-[220px] h-[1px] box-sizing-border">
                <div className="bg-[#EAEBEC] w-full h-[1px]">
                </div>
              </div>
              <span className="break-words font-['Inter'] font-[var(--button-normal-14-font-weight,400)] text-[14px] leading-[var(--button-normal-14-line-height,1.429)] text-[var(--grey-400,#98A2B3)]">
                OR
              </span>
            </div>
            <div className="m-[9px_0_10px_0] flex flex-row justify-center w-[202px] h-[1px] box-sizing-border">
              <div className="bg-[#EAEBEC] w-full h-[1px]">
              </div>
            </div>
        </div>

    <div className='flex items-center  justify-center w-full'>
        <button className="flex items-center justify-center flex-row rounded-lg mt-2 mb-2 bg-white py-3 w-full border text-[#98A2B3] border-[#D0D5DD] border-3">
            <img src={Google} className='px-3'></img>Sign in with Google</button>
    </div>

    <div className='flex items-center  justify-center mt-2 mb-2'>
        <button className="buttoun w-full text-[#FCFCFD]"><Link to='/dashboard'>LOG IN</Link></button>
      
    </div>
    <p className='flex items-center  justify-center text-[#98A2B3]'>Don't have an Account ?<span className='text-[#175CD3] m-2'><Link to='/signup' >Sign up here</Link></span></p>
        
    </div>
    )
  }