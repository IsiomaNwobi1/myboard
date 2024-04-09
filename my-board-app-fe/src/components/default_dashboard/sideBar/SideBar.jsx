import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/Users/decagon/myboard_fe/myboard_fe/my-board-app-fe/src/assets/add_task.png';
import List from '/Users/decagon/myboard_fe/myboard_fe/my-board-app-fe/src/assets/images/list-ul.png';
import Icon from '/Users/decagon/myboard_fe/myboard_fe/my-board-app-fe/src/assets/images/Icon.png';
import vector from '/Users/decagon/myboard_fe/myboard_fe/my-board-app-fe/src/assets/images/Vector.png';
import Delete from '/Users/decagon/myboard_fe/myboard_fe/my-board-app-fe/src/assets/images/Delete.png';
import Logout from '/Users/decagon/myboard_fe/myboard_fe/my-board-app-fe/src/assets/images/logout.png';

const SideBar = () => {
  return (
  <div className='w-[15%]'>
      <div className=' bg-[#175CD3]   h-full overflow-y-auto'>
        <div className='flex gap-3 pt-8 pl-10'>
          <img className='w-[40] h-[40]' src={logo} alt="" />
          <h1 className='font-sans font-normal text-xl leading-7 text-white'>My Board</h1>
        </div>
        <div className='flex mt-16 gap-6 ml-7'>
          <img src={List} alt=''/>
          <Link to='/dashboard' className='text-white text-xl'>Post</Link>
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

export default SideBar;