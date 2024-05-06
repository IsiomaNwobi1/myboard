import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lines from '../../../assets/images/lines.png';
import Calendar from '../../../assets/images/calendar.png';
import Flag from '../../../assets/images/flag.png';
import Status from '../../../assets/images/Icon-3.png';
import Close from '../../../assets/images/close.png';

const Form = ({ hideModal }) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDueDate, setTaskDueDate] = useState('');
    const [taskPriority, setTaskPriority] = useState('NONE');
    const [taskStatus, setTaskStatus] = useState('NOT_STARTED');
    const [selectedTaskListId, setSelectedTaskListId] = useState('');
    const [taskLists, setTaskLists] = useState([]);
    
    const userId = localStorage.getItem('userId');

    useEffect(() =>  {
        const accessToken = localStorage.getItem('token');
    
        const fetchTaskLists = async () => {
            if (userId && accessToken) { 
                try {
                    const response = await axios.get(`http://localhost:8080/api/v1/task-list/get-task-list/${userId}`, {
                        headers: { Authorization: `Bearer ${accessToken}` }

                    });

                    setTaskLists(response.data);
                    console.log(response.data)
                    if (response.data.length > 0) {
                        setSelectedTaskListId(response.data[0].id);
                    }
                } catch (error) {
                    console.error('Failed to fetch task lists', error);
                }
            } else {
                console.error('User ID or access token not found');
            }
        };
    
        fetchTaskLists();
    }, [userId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const accessToken = localStorage.getItem('token');

        console.log('Selected Task List ID:', selectedTaskListId);

        const taskData = {
            title: taskTitle,
            description: taskDescription,
            deadline: taskDueDate,
            priorityLevel: taskPriority,
            status: taskStatus
        };

        try {
            const response = await axios.post(`http://localhost:8080/api/v1/task/new_task/${userId}/${selectedTaskListId}`, taskData, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            console.log('Task created successfully:', response.data);
            hideModal();
        } catch (error) {
            console.error('Failed to create task:', error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className='flex justify-center fixed top-[10] left-[50] w-[100%] items-center h-[100vh] z-[3] bg-[#00000036]'>
            <div className="w-[550px] mt-[50px]">
                <div className='bg-[#175CD3] h-[87px] pt-[1.5px] rounded-t-[10px]'>
                    <div className='flex justify-between px-3'>
                        <h2 className='text-white text-lg font-semibold mt-2 mb-2 ml-1'>Create New Task</h2>
                        <button onClick={hideModal}><img src={Close} alt="Close" className='w-[25px] h-[25px] mt-1'/></button>
                    </div>
                    <div>
                        <input 

                            type="text" 
                            value={taskTitle} 
                            onChange={(e) => setTaskTitle(e.target.value)} 
                            className='text-white bg-transparent border-none outline-none w-full px-4'
                            placeholder='Task Title'
                        />
                        <div className='border-b-2 border-white ml-4 mr-8 mt-[-6px]'></div>
                    </div>
                </div>
                <div className='bg-[#ffff] h-[420px] rounded-b-[10px] pl-6'>
                    <div className='flex gap-4 pt-4 pb-2'>
                        <img src={Lines} alt="Lines" className='h-[15px] mt-6 w-[25px]' />
                        <input 
                            type="text"
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            className='border-l-0 border-r-0 border-t-0 w-[450px] h-[52px]'
                            placeholder="Task Description"
                        />
                    </div>
                    <div className='flex gap-4 pb-2'>
                        <img src={Lines} alt="Lines" className='h-[15px] mt-6 w-[25px]' />
                        <select
                        value={selectedTaskListId}
                        onChange={(e) => {
                            // setSelectedTaskListId(e.target.value){
                            setSelectedTaskListId(taskLists[e.target.selectedIndex]?.id);
                            }}
                        
                        className='border-l-0 border-r-0 border-t-0 w-[450px] h-[52px]'
                        placeholder="Select Task List"
                         >
                        
                        {taskLists.map((list) => (
                            <option key={list.id} value={list.id}>{list.title}</option>
                        ))}
                    </select>
                    </div>
                    <div className='flex gap-4 pb-2'>
                        <img src={Calendar} alt="Calendar" className='h-[25px] mt-6 w-[25px]' />
                        <input 
                            type="datetime-local"
                            value={taskDueDate}
                            onChange={(e) => setTaskDueDate(e.target.value)}
                            className='border-l-0 border-r-0 border-t-0 w-[450px] h-[52px]'
                        />
                    </div>
                    <div className='flex gap-4 pt-2'>
                        <img src={Flag} alt="Priority" className='h-[25px] mt-6 w-[25px]' />
                        <div className='flex flex-col'>
                            <p className='mb-2 text-gray-500'>Priority</p>
                            <div className='flex space-x-4'>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="priority" value="NONE" checked={taskPriority === 'NONE'} onChange={(e) => setTaskPriority(e.target.value)} />
                                    <span className='ml-2'>None</span>
                                </label>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="priority" value="HIGH" checked={taskPriority === 'HIGH'} onChange={(e) => setTaskPriority(e.target.value)} />
                                    <span className="ml-2">High</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className='form-radio text-blue-500' name="priority" value="MEDIUM" checked={taskPriority === 'MEDIUM'} onChange={(e) => setTaskPriority(e.target.value)} />
                                    <span className="ml-2">Medium</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className='form-radio text-blue-500' name="priority" value="LOW" checked={taskPriority === 'LOW'} onChange={(e) => setTaskPriority(e.target.value)} />
                                    <span className="ml-2">Low</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 pt-2'>
                        <img src={Status} alt="Status" className='h-[25px] mt-6 w-[25px]' />
                        <div className='flex flex-col'>
                            <p className='mb-2 text-gray-500'>Status</p>
                            <div className='flex space-x-4'>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="status" value="COMPLETED" checked={taskStatus === 'COMPLETED'} onChange={(e) => setTaskStatus(e.target.value)} />
                                    <span className='ml-2'>Completed</span>
                                </label>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="status" value="NOT_STARTED" checked={taskStatus === 'NOT_STARTED'} onChange={(e) => setTaskStatus(e.target.value)} />
                                    <span className='ml-2'>Not Started</span>
                                </label>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="status" value="IN_PROGRESS" checked={taskStatus === 'IN_PROGRESS'} onChange={(e) => setTaskStatus(e.target.value)} />
                                    <span className='ml-2'>In Progress</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[35px] pl-28'>
                        <button className='rounded-[5px] w-[100px] h-[40px] text-[#175CD3] border border-blue-500 bg-white ml-[180px]' onClick={hideModal}>Cancel</button>
                        <button className='rounded-[5px] w-[100px] h-[40px] text-white bg-[#175CD3] ml-2'>Save</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;
