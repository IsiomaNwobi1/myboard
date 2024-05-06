import React, { useState } from 'react';
import UserNameIcon from '../header/UserNameIcon';

const EditUserModal = ({ isOpen, toggleModal, updateUser }) => {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [userIcon, setUserIcon] = useState(localStorage.getItem('userIcon') || '');

  const handleUpdate = () => {
    localStorage.setItem('userName', userName);
    localStorage.setItem('userIcon', userIcon);
    updateUser(userName, userIcon);
    toggleModal();
  };

  // Function to handle closing modal when clicking outside
  const handleBackdropClick = (event) => {
    // Check if the clicked element is the backdrop itself
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center' onClick={handleBackdropClick}>
      <div className='bg-white w-[700px] h-[525px] rounded-lg' onClick={(e) => e.stopPropagation()}>
        <div className='bg-blue-700 text-white p-4 rounded-t-lg'>
          Edit User Information
        </div>
        <div className='p-4'>
          <div className='flex flex-col space-y-4'>
            <div className='flex justify-center items-center'>
              <UserNameIcon className='w-24 h-24' fontSize='text-6xl' />
            </div>
            <div>
              <label htmlFor='userName'>First Name:</label>
              <input
                id='userName'
                type='text'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className='border border-gray-300 p-2 w-full'
              />
            </div>
            <div>
              <label htmlFor='lastName'>Last Name:</label>
              <input
                id='lastName'
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='border border-gray-300 p-2 w-full'
              />
            </div>
            <div>
              <label htmlFor='userIcon'>Update Profile Picture:</label>
              <input
                id='userIcon'
                type='file'
                onChange={(e) => setUserIcon(URL.createObjectURL(e.target.files[0]))}
                className='border border-gray-300 p-2 w-full'
              />
            </div>
          </div>
        </div>
        <div className='flex justify-end space-x-4 p-4'>
          <button onClick={toggleModal} className='bg-gray-500 text-white px-4 py-2 rounded'>Cancel</button>
          <button onClick={handleUpdate} className='bg-blue-700 text-white px-4 py-2 rounded'>Update</button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;