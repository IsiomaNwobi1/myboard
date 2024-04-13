import React from 'react';
import Edit from '../../../assets/images/edit.png';
import Check from '../../../assets/images/check_box.png';
import CancelX from '../../../assets/images/cancel.png';
import Clear from '../../../assets/images/clear.svg';
import {Link} from 'react-router-dom'

const Menu = ({toggleMenuModal}) => {
  return (
    <div className='fixed top-[10] left-[50] w-[100%] flex justify-center items-center h-[100vh] z-[3] bg-[#0000004d]'>
        <div className=' w-[200px] h-[120px] p-[7px 20px 7px 0px] gap-[10px] bg-[#FFFFFF] ml-8 rounded-xl text-[#175CD3]'>
          <div className='flex gap-6  text-black ml-3'>
            <img src={Edit} alt="" className='w-[24px] h-[24px] mt-2' />
            <Link to='/grocerydashboard' className='mt-2'>Edit Sub List</Link>
            <img onClick={toggleMenuModal} className='text-end text-black m-[1_0_0_0]' src={Clear}/>
          </div>
          <div className='flex gap-6  text-black mt-[0.75rem]  ml-2'>
            <img src={Check} alt="" className='w-[24px] h-[24px] ' />
            <Link to='/grocerydashboard'>Complete All</Link>
          </div>
          <div className='flex gap-6  text-black mt-[0.75rem]  ml-2'>
            <img src={CancelX} alt="" className='w-[22px] h-[24px]' />
            <Link to='/grocerydashboard'>Delete Sub Task</Link>
          </div>
        </div>
    </div>
  )
}

export default Menu