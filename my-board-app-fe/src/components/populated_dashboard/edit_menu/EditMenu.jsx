import React from 'react';
import Edit from '../../../assets/images/edit.png';
import Check from '../../../assets/images/highlight.png';
import CancelX from '../../../assets/images/cancel.png';
import Clear from '../../../assets/images/clear.svg';
import {Link} from 'react-router-dom'

const EditMenu = ({toggleEditMenuModal}) => {
  return (
    <div className='fixed top-[0] left-[0] w-[100%] flex justify-center items-center h-[100vh] z-[3] bg-[#0000004d]'>
        <div className=' w-[200px] h-[116px] p-[7px 10px 7px 0px] gap-[6px] bg-[#FFFFFF] ml-8 rounded-xl text-[#175CD3]'>
          <div className='flex gap-6  text-black ml-1'>
            <img src={Edit} alt="" className='w-[24px] h-[24px] mt-2' />
            <Link to='/grocerydashboard' className='mt-2'>Edit Task</Link>
            <img onClick={toggleEditMenuModal} className='text-end text-black ml-7' src={Clear}/>
          </div>
          <div className='flex gap-6  text-black mt-[0.75rem]  ml-2'>
            <img src={Check} alt="" className='w-[18px] h-[20px] ' />
            <Link to='/grocerydashboard'>Highlight</Link>
          </div>
          <div className='flex gap-6  text-black mt-[0.75rem]  ml-2'>
            <img src={CancelX} alt="" className='w-[22px] h-[24px]' />
            <Link to='/grocerydashboard'>Delete Task</Link>
          </div>
        </div>
    </div>
  )
}

export default EditMenu