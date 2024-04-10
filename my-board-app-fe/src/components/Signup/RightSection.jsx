import React, { useState } from 'react'
import Logo from '../../assets/images/my-board-logo.png';
import Google from '../../assets/images/Google.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import "./RightSetion.css";
import {Link} from 'react-router-dom'


export const RightSection = () => {
    const [value, setValue] = useState();

  return (
    <div className='py-2 px-20'>
        <div className='flex items-center justify-center'>
            <img src={Logo} alt='logo'/>
            <p className='px-3 text-[#175CD3] text-[25px]'>My Board</p>
        </div>

        <div>
        <h2 className='flex items-center justify-center pt-5 text-3xl w-200 h-34'>Create Account</h2>
        </div>
        <div>

    <div className=''>
      <label>First Name</label>
      <input className='border bottom-3 rounded w-full flex items-center border-gray-400 mt-2 mb-2' placeholder='Sani'/>
    </div>

    <div>
      <label>Last Name</label>
      <input className='border bottom-3 border-gray-400 rounded w-full mt-2 mb-2' placeholder='Dogo'/>
    </div>

    <div>
      <label>Phone Number</label>
        <PhoneInput 
          international
          defaultCountry='NG'
          value={value}
          onChange={setValue}
          className='border bottom-3 border-gray-400 rounded w-full px-3 mt-2 mb-2'/>
    </div>

    <div>
      <label>Email Address</label>
      <input className='border bottom-3 border-gray-400 rounded w-full mt-2 mb-2' placeholder='sani.jdogo@gmail.com' type='email'/>
    </div>

    <div>
      <label>Password</label>
      <input className='border bottom-3 border-gray-400 rounded w-full mt-2 mb-2' placeholder='**********' type='password'/>
    </div>

    <div>
      <label>Confirm Password</label>
      <input className='border bottom-3 border-gray-400  rounded w-full mt-2 mb-2' placeholder='**********' type='password'/>
    </div>
    </div>

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
        <button className="buttoun w-full text-[#FCFCFD]"><Link to ='/login'>SIGNUP</Link></button>
    </div>
    <p className='flex items-center  justify-center text-[#98A2B3]'>Already  have an Account ?<span className='text-[#175CD3] m-2'><Link to= '/login'>Log In here</Link></span></p>
        
    </div>
  )
}