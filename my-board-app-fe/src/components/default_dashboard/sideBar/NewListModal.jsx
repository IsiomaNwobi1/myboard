import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewListModal = ({ isOpen, onClose, listId, initialTitle = '', initialDescription = '' }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
  }, [initialTitle, initialDescription]);

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
  }, [listId]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const url = listId
      ? `http://localhost:8080/api/v1/task-list/update-tasklist/${listId}`
      : `http://localhost:8080/api/v1/task-list/create-task-list/${userId}`;

    const method = listId ? 'patch' : 'post';

    if (!accessToken) {
      console.error('No authentication token found');
      return;
    }

    try {
      const response = await axios({
        method: method,
        url: url,
        headers: { Authorization: `Bearer ${accessToken}` },
        data: { title, description }
      });
      console.log(`${listId ? 'Updated' : 'Created'} Task List:`, response.data);
      onClose(); // Close the modal on success
    } catch (error) {
      console.error(`Error ${listId ? 'updating' : 'creating'} task list:`, error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4">{listId ? 'Update Task List' : 'Create New Task List'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </label>
          <label className="block">
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </label>
          <div className="flex justify-end space-x-4">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              {listId ? 'Update' : 'Create'}
            </button>
            <button onClick={onClose} className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewListModal;