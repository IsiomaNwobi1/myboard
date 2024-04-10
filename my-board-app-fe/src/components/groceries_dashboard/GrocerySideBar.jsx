import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/add_task.png'
import List from '../../assets/images/list-ul.png';
import Icon from '../../assets/images/Icon.png';
import vector from '../../assets/images/Vector.png';
import Delete from '../../assets/images/Delete.png';
import Logout from '../../assets/images/logout.png';

const GrocerySideBar = () => {
  return (
  <div className='w-[15%]'>
      <div className=' bg-[#175CD3]   h-full overflow-y-auto'>
        <div className='flex gap-3 pt-8 pl-10'>
          <img className='w-[40] h-[40]' src={logo} alt="" />
          <h1 className='font-sans font-normal text-xl leading-7 text-white'>My Board</h1>
        </div>
        <div className='flex mt-16 gap-6 ml-7'>
          <img src={List} alt=''/>
          <Link to='/dashboard' className='text-white text-base'>Shopping</Link>
        </div>
        <div className='flex mt-5 marker:gap-6 ml-7'>
          <img src={List} alt=''/>
          <Link to='/dashboard' className='text-white text-base pl-6'>Home Chores</Link>
        </div>
        <div className='flex mt-5 gap-6 ml-7'>
          <img src={List} alt=''/>
          <Link to='/dashboard' className='text-white text-base'>Movies to watch</Link>
        </div>
        <div className='flex mt-5 gap-6 ml-7'>
          <img src={List} alt=''/>
          <Link to='/dashboard' className='text-white text-base'>My Projects</Link>
        </div>
        <div className='flex mt-5 gap-6 ml-7'>
          <img src={List} alt=''/>
          <Link to='/dashboard' className='text-white text-base'>My Calendar</Link>
        </div>
        <div className='mt-[10px] w-[133px] h-[158px] p-[7px 20px 7px 0px] gap-[10px] bg-[#FFFFFF] ml-8 rounded-xl text-[#175CD3]'>
          <div className='flex gap-6  ml-2'>
            <img src={Icon} alt="" className='w-[18px] h-[10px] mt-3' />
            <Link to='/dashboard' className='mt-2'>New List</Link>
          </div>
          <div className='flex gap-6 mt-[0.75rem]  ml-2'>
            <img src={vector} alt="" className='w-[18px] h-[18px] ' />
            <Link to='/dashboard'>Edit List</Link>
          </div>
          <div className='flex gap-6 mt-[0.75rem]  ml-2'>
            <img src={Delete} alt="" className='w-[14px] h-[18px]' />
            <Link to='/dashboard'>Delete List</Link>
          </div>
          <div className='flex gap-4 mt-[0.75rem] ml-2'>
            <img src={Logout} alt="" />
            <Link to='/dashboard'>Logout</Link>
          </div>
        </div>
    </div>
  </div>
  )
}

export default GrocerySideBar;