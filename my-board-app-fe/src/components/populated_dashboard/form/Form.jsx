import React from 'react';
import Lines from '../../../assets/images/lines.png';
import Camera from '../../../assets/images/camera.png';
import IconImage from '../../../assets/images/icon-2.png';
import Calendar from '../../../assets/images/calendar.png';
import Flag from '../../../assets/images/flag.png';
import Status from '../../../assets/images/Icon-3.png';
import Close from '../../../assets/images/close.png';

const Form = ({ hideModal }) => {
    return (
        <form action="" className='flex justify-center '>
            <div className="  w-[550px]  mt-[20px] ">

                <div className='bg-[#175CD3] h-[87px] pt-[1.5px] rounded-t-[10px]'>

                    <div className='flex justify-between px-3'>
                        <h2 className='text-white text-lg font-semibold mt-2 mb-2 ml-4'>Task Name</h2>
                        <img src={Close} alt="" onClick={hideModal} className='w-[25px] h-[25px]'/>
                    </div>
                    <div>
                        <p className='text-white pb-2 ml-4'>My Shopping</p>
                        <div className='border-b-2 border-white ml-4 mr-8'></div>
                    </div>

                </div>
                <div className='bg-[#ffff] h-[550px] rounded-b-[10px] pl-6'>
                    <div className='flex gap-4 pt-4 pb-2'>
                        <img src={Lines} alt="" className='h-[15px] mt-6 w-[25px] ' />
                        <input type="text" className='border-l-0 border-r-0 border-t-0 w-[450px] h-[52px]' placeholder="Notes" />
                    </div>
                    <div className='flex gap-4 pb-2'>
                        <img src={Camera} alt="" className='h-[23px] mt-6 w-[25px]' />
                        <input type="text" className='border-l-0 border-r-0 border-t-0 w-[450px] h-[52px]' placeholder="Attachments" />
                    </div>
                    <div className='flex gap-4 pb-2'>
                        <img src={IconImage} alt="" className='h-[17px] mt-6 w-[25px]' />
                        <input type="text" className='border-l-0 border-r-0 border-t-0 w-[450px] h-[52px]' placeholder="Sub Task" />
                    </div>
                    <div className='flex gap-4 pb-2'>
                        <img src={Lines} alt="" className='h-[15px] mt-6 w-[25px]' />
                        <input type="text" className='border-l-0 border-r-0 border-t-0 w-[450px] h-[52px]' placeholder="List" />
                    </div>
                    <div className='flex gap-4 pb-2'>
                        <img src={Calendar} alt="" className='h-[25px] mt-6 w-[25px]' />
                        <input type="text" className='border-l-0 border-r-0 border-t-0 w-[450px] h-[52px]' placeholder="Due Date" />
                    </div>
                    <div className='flex gap-4 pt-2'>
                        <img src={Flag} alt="" className='h-[25px] mt-6 w-[25px]' />
                        <div className='flex flex-col'>
                            <p className='mb-2 text-gray-500'>Priority</p>
                            <div className='flex space-x-4'>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="priority" value="none" />
                                    <span className='ml-2'>None</span>
                                </label>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="priority" value="high" />
                                    <span className="ml-2">High</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className='form-radio text-blue-500' name="priority" value="medium" />
                                    <span className="ml-2">Medium</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" className='form-radio text-blue-500' name="priority" value="low" />
                                    <span className="ml-2">Low</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 pt-2'>
                        <img src={Status} alt="" className='h-[25px] mt-6 w-[25px]' />
                        <div className='flex flex-col'>
                            <p className='mb-2 text-gray-500'>Status</p>
                            <div className='flex space-x-4'>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="status" value="completed" />
                                    <span className='ml-2'>Completed</span>
                                </label>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="status" value="not started" />
                                    <span className='ml-2'>Not Started</span>
                                </label>
                                <label className='inline-flex items-center'>
                                    <input type="radio" className='form-radio text-blue-500' name="status" value="In Progress" />
                                    <span className='ml-2'>In Progress</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[35px]'>
                        <button className=' rounded-[5px] w-[100px] h-[40px] text-white gap-10 bg-red-500'>Delete</button>
                        <button className=' rounded-[5px] w-[100px] h-[40px] text-[#175CD3] gap-10 border border-blue-500  bg-white ml-[180px]'>Cancel</button>
                        <button className=' rounded-[5px] w-[100px] h-[40px] text-white gap-10 bg-[#175CD3] ml-2'>Save</button>
                    </div>
                </div>

            </div>
        </form>

    )
}

export default Form