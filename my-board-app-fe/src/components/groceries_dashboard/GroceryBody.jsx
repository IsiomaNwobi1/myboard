import React from 'react';
// import { Link } from 'react-router-dom';
import image1 from '../../assets/images/add1.png';
import image2 from '../../assets/images/three-dots.png'

const GroceryBody = ({ hideModal }) => {


    return (
        <div className='pt-[8rem] w-[1215px]'>
            <div className='h-[62vh]'>
                <div className='flex items-center justify-between border-b-[#EAECF0] border-t-0 border-r-0 border-l-0 border-2 p-5'>
                    <div className='flex items-center justify-between '>
                        <input type="radio" name="Go to the movie with Nonso by 7pm" id="" />
                        <p className='pl-5 text-[#667085]'>Go to the movie with Nonso by 7pm</p>
                    </div>
                    <img src={image2} alt="" />
                </div>
                <div className='flex items-center justify-between border-b-[#EAECF0] border-t-0 border-r-0 border-l-0 border-2 p-5'>
                    <div className='flex items-center justify-between '>
                        <input type="radio" name="Go to the movie with Nonso by 7pm" id="" />
                        <p className='pl-5 text-[#667085]'>Go to the movie with Nonso by 7pm</p>
                    </div>
                    <img src={image2} alt="" />
                </div>
                <div className='flex items-center justify-between border-b-[#EAECF0] border-t-0 border-r-0 border-l-0 border-2 p-5'>
                    <div className='flex items-center justify-between '>
                        <input type="radio" name="Go to the movie with Nonso by 7pm" id="" />
                        <p className='pl-5 text-[#667085]'>Go to the movie with Nonso by 7pm</p>
                    </div>
                    <img src={image2} alt="" />
                </div>
                <div className='flex items-center justify-between border-b-[#EAECF0] border-t-0 border-r-0 border-l-0 border-2 p-5'>
                    <div className='flex items-center justify-between '>
                        <input type="radio" name="Go to the movie with Nonso by 7pm" id="" />
                        <p className='pl-5 text-[#667085]'>Go to the movie with Nonso by 7pm</p>
                    </div>
                    <img src={image2} alt="" />
                </div>
                <div className='flex items-center justify-between border-b-[#EAECF0] border-t-0 border-r-0 border-l-0 border-2 p-5'>
                    <div className='flex items-center justify-between '>
                        <input type="radio" name="Go to the movie with Nonso by 7pm" id="" />
                        <p className='pl-5 text-[#667085]'>Go to the movie with Nonso by 7pm</p>
                    </div>
                    <img src={image2} alt="" />
                </div>
            </div>

            <div className='flex items-end flex-col pt-[5rem]'>
                <button onClick={hideModal} className=' mr-[6.4rem]'><img src={image1} alt="" /></button>
                <p className=' mr-[5rem] mt-1 text-10px leading-11px text-#101828'>Create a task</p>
            </div>
        </div>
    )
};

export default GroceryBody;