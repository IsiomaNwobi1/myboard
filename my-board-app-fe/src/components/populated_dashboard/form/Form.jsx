import React, { useState } from 'react';
import axios from 'axios';
import Lines from '../../../assets/images/lines.png';
import Calendar from '../../../assets/images/calendar.png';
import Flag from '../../../assets/images/flag.png';
import Status from '../../../assets/images/Icon-3.png';
import Close from '../../../assets/images/close.png';

const Form = ({ hideModal }) => {
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        deadline: '',
        priorityLevel: 'NONE',
        status: 'NOT_STARTED'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = 'USER_ID'; // Replace with actual userId
        const taskListId = 'TASKLIST_ID'; // Replace with actual taskListId
        try {
            const response = await axios.post(`http://localhost:8080/api/v1/task/new_task/${userId}/${taskListId}`, taskData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Task created:', response.data);
            hideModal(); // Close the modal on successful submission
        } catch (error) {
            console.error('Failed to create task:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex justify-center fixed top-[10] left-[50] w-[100%] items-center h-[100vh] z-[3] bg-[#00000036]'>
            <div className="w-[550px] mt-[50px]">
                <div className='bg-[#175CD3] h-[87px] pt-[1.5px] rounded-t-[10px]'>
                <div className='flex justify-between items-center px-3'>
                <h2 className='text-white text-lg font-semibold mt-2 mb-2 ml-1'>Task Name</h2>
                <img src={Close} alt="Close" onClick={hideModal} className='w-[25px] h-[25px] mt-1'/>
                </div>
                <div>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={taskData.title}
                    placeholder="Task Title"
                    className='text-white bg-transparent border-none p-2 w-full border-b-2 border-white'
                />
                </div>
                </div>
                <div className='bg-white h-[550px] rounded-b-[10px] pl-6'>
                    <div className='flex gap-4 pt-4 pb-2'>
                        <img src={Lines} alt="Notes" className='h-[15px] mt-6 w-[25px]' />
                        <input
                            type="text"
                            name="description"
                            onChange={handleChange}
                            value={taskData.description}
                            placeholder="Notes"
                            className='border-0 border-b-2 border-gray-300 flex-grow p-2'
                        />
                    </div>
                    <div className='flex gap-4 pb-2'>
                        <img src={Camera} alt="Attachments" className='h-[23px] mt-6 w-[25px]' />
                        <input
                            type="text"
                            // name="attachments"
                            // onChange={handleChange}
                            // value={taskData.attachments}
                            placeholder="Attachments"
                            className='border-0 border-b-2 border-gray-300 flex-grow p-2'
                        />
                    </div>
                    <div className='flex gap-4 pb-2'>
                        <img src={IconImage} alt="Sub Task" className='h-[17px] mt-6 w-[25px]' />
                        <input
                            type="text"
                            // name="subtask"
                            // onChange={handleChange}
                            // value={taskData.subtask}
                            placeholder="Sub Task"
                            className='border-0 border-b-2 border-gray-300 flex-grow p-2'
                        />
                    </div>
                    <div className='flex gap-4 pb-2'>
                        <img src={Lines} alt="List" className='h-[15px] mt-6 w-[25px]' />
                        <input
                            type="text"
                            // name="list"
                            // onChange={handleChange}
                            // value={taskData.list}
                            placeholder="List"
                            className='border-0 border-b-2 border-gray-300 flex-grow p-2'
                        />
                    </div>
                    <div className='flex gap-4 pb-2'>
                        <img src={Calendar} alt="Due Date" className='h-[25px] mt-6 w-[25px]' />
                        <input
                            type="datetime-local"
                            name="deadline"
                            onChange={handleChange}
                            value={taskData.deadline}
                            className='border-0 border-b-2 border-gray-300 flex-grow p-2'
                        />
                    </div>
                    <div className='flex gap-4 pt-2'>
                        <img src={Flag} alt="Priority" className='h-[25px] mt-6 w-[25px]' />
                        <div className='flex flex-col'>
                            <p className='mb-2 text-gray-500'>Priority</p>
                            <div className='flex space-x-4'>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="priorityLevel" value="none" onChange={handleChange} checked={taskData.priorityLevel === 'NONE'} />
                                    <span className='ml-2'>None</span>
                                </label>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="priorityLevel" value="high" onChange={handleChange} checked={taskData.priorityLevel === 'HIGH'} />
                                    <span className='ml-2'>High</span>
                                </label>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="priorityLevel" value="medium" onChange={handleChange} checked={taskData.priorityLevel === 'MEDIUM'} />
                                    <span className='ml-2'>Medium</span>
                                </label>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="priorityLevel" value="low" onChange={handleChange} checked={taskData.priorityLevel === 'LOW'} />
                                    <span className='ml-2'>Low</span>
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
                                    <input type="radio" className='form-radio text-blue-500' name="status" value="completed" onChange={handleChange} checked={taskData.status === 'COMPLETED'} />
                                    <span className='ml-2'>Completed</span>
                                </label>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="status" value="not started" onChange={handleChange} checked={taskData.status === 'NOT_STARTED'} />
                                    <span className='ml-2'>Not Started</span>
                                </label>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="status" value="in progress" onChange={handleChange} checked={taskData.status === 'IN_PROGRESS'} />
                                    <span className='ml-2'>In Progress</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end space-x-2 mt-6'>
                        <button type="button" className='rounded-[5px] w-[100px] h-[40px] text-white bg-red-500' onClick={hideModal}>Cancel</button>
                        <button type="submit" className='rounded-[5px] w-[100px] h-[40px] text-white bg-[#175CD3]'>Save</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;
