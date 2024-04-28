import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewListModal from './NewListModal';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/add_task.png';
import List from '../../../assets/images/list-ul.png';
import Icon from '../../../assets/images/Icon.png';
import vector from '../../../assets/images/Vector.png';
import Delete from '../../../assets/images/Delete.png';
import Logout from '../../../assets/images/logout.png';

const SideBar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [taskLists, setTaskLists] = useState([]);
  const userId = localStorage.getItem('userId');
  const accessToken = localStorage.getItem('token');

  useEffect(() => {
    let mounted = true;
  
    const fetchTaskLists = async () => {
      if (!accessToken) {
        console.error('No authentication token found');
        return;
      }
  
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/task-list/get-task-list/${userId}`, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        if (mounted) {
          setTaskLists(response.data);
        }
      } catch (error) {
        console.error('Error fetching task lists', error);
      }
    };
  
    fetchTaskLists();
    return () => { mounted = false };
  }, [userId, accessToken]);  

  return (
    <div className='w-[225px]'>
      <div className='bg-[#175CD3] h-screen overflow-y-auto'>
        <div className='flex gap-3 pt-8 pl-10'>
          <img className='w-[40] h-[40]' src={logo} alt="" />
          <h1 className='font-sans font-normal text-xl leading-7 text-white pt-1.5'>My Board</h1>
        </div>
        <div className='mt-16 ml-7'>
          {taskLists.map(list => (
            <div key={list.id} className='flex items-center gap-2'>
              <button><img src={List} alt='' onClick={() => setSelectedList(list)} /></button>
              <Link to={`/dashboard/${list.id}`} className='text-white text-xl'>{list.title}</Link>
              {selectedList && selectedList.id === list.id && (
                <div className="absolute bg-white shadow-lg rounded-lg p-2">
                  <button onClick={() => setModalOpen(true)}>Edit List</button>
                  <button onClick={() => handleDelete(list.id)}>Delete List</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='mt-[10px] w-[133px] h-[158px] p-[7px 20px 7px 0px] gap-[10px] bg-[#FFFFFF] ml-8 rounded-xl text-[#175CD3]'>
          <div className='flex gap-2 ml-2'>
            <img src={Icon} alt="" className='w-[18px] h-[10px] mt-3' />
            <Link to="#" onClick={() => setModalOpen(true)} className='mt-2'>New List</Link>
          </div>
          <div className='flex gap-2 mt-[0.75rem] ml-2'>
            <img src={vector} alt="" className='w-[18px] h-[18px]' />
            <Link to='/dashboard'>Edit List</Link>
          </div>
          <div className='flex gap-2 mt-[0.75rem] ml-2'>
            <img src={Delete} alt="" className='w-[14px] h-[18px]' />
            <Link to='/dashboard'>Delete List</Link>
          </div>
          <div className='flex gap-2 mt-[0.75rem] ml-2'>
            <img src={Logout} alt="" />
            <Link to='/dashboard'>Logout</Link>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <NewListModal
          isOpen={isModalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedList(null);
          }}
          listId={selectedList && selectedList.id}
          initialTitle={selectedList && selectedList.title}
          initialDescription={selectedList && selectedList.description}
        />
      )}
      {/* <NewListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} userId={userId} /> */}
    </div>
  )
}

export default SideBar;
