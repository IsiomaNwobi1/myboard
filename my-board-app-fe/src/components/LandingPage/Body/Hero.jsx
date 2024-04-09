import React from 'react'
import { Link } from 'react-router-dom';
import Image1 from '../../../assets/images/Rectangle60.png'
import Image2 from '../../../assets/images/Rectangle61.png'
import Image3 from '../../../assets/images/Rectangle62.png'
import Image4 from '../../../assets/images/Rectangle63.png'
import Image5 from '../../../assets/images/Rectangle64.png'
import Image6 from '../../../assets/images/Rectangle65.png'

export const Hero = () => {
  return (
    <div className="m-[0_4.5rem_4.4rem_4.6rem] flex flex-col items-center w-[fit-content] box-sizing-border">
    <div className="m-[0_7.3rem_3rem_7.3rem] flex flex-col items-center w-[fit-content] box-sizing-border">
      <div className="m-[0_0_0.9rem_0] flex flex-col items-center w-[fit-content] box-sizing-border">
        <p className="m-[0_0_0.2rem_0] text-center break-words font-['Lato'] font-bold text-[3rem] leading-[1.298] text-[#000000]">
            Let Us Help You Tick Those 
            <br/><span className='text-[#175CD3]'>To-Dos</span> Off Your List
        </p>
        <p className="text-center break-words font-['Inter'] font-normal text-[1rem] leading-[1.75] text-[var(--grey-5001,#667085)]">
          Break Up With Inefficient Workflows - Our App Will Treat You Better, Wave Goodbye to Task Stress, a Simpler System Awaits, Two Heads Get More Done Than One - Let&#39;s Team Up<br />
        </p>
      </div>
      <Link to='/' className="rounded-[0.3rem] bg-[#175CD3] flex flex-row justify-center p-[0.9rem_0rem_0.9rem_0] w-[22.2rem] box-sizing-border hover:bg-blue-600 hover:border-blue-600">
        <p className="break-words font-['Inter'] font-normal text-[1rem] leading-[1.75] text-[var(--white-1,#FFFFFF)]">
          Get Started
        </p>
      </Link>
    </div>
    <div className="flex flex-row w-[80.9rem] box-sizing-border">
      <div className="rounded-[6.3rem] bg-no-repeat bg-[center_right_46%] bg-cover m-[0.7rem_1.5rem_0.5rem_0] w-[11.9rem] h-[37.8rem]">
        <img src={Image1} alt='' className="rounded-[6.3rem] object-cover object-position-[60%_cener] w-full h-full "/>
      </div>
      <div className="rounded-[6.3rem] bg-no-repeat bg-[center_right_70%] bg-cover m-[3.8rem_2.2rem_2.6rem_0] w-[11.9rem] h-[32.6rem]">
        <img src={Image2} alt='' className="rounded-[6.3rem] object-cover w-full h-full"/>
      </div>
      <div className="rounded-[6.3rem] bg-no-repeat bg-[center_right_50%] bg-cover m-[0_1.8rem_4.3rem_0] w-[11.9rem] h-[34.7rem]">
        <img src={Image3} alt='' className="rounded-[6.3rem] object-cover w-full h-full"/>
      </div>
      <div className="rounded-[6.3rem] bg-no-repeat bg-[center_right_70%] bg-cover m-[4.3rem_2rem_0_0] w-[11.9rem] h-[34.7rem]">
        <img src={Image4} alt='' className="rounded-[6.3rem] object-cover w-full h-full"/>
      </div>
      <div className="rounded-[6.3rem] bg-no-repeat bg-[center_right_65%] bg-cover m-[0_1.8rem_4.3rem_0] w-[11.9rem] h-[34.7rem]">
        <img src={Image5} alt='' className="rounded-[6.3rem] object-cover w-full h-full"/>
      </div>
      <div className="rounded-[6.3rem] bg-no-repeat bg-[center_right_50%] bg-cover m-[3.8rem_0_0.5rem_0] w-[11.9rem] h-[34.7rem]">
        <img src={Image6} alt='' className="rounded-[6.3rem] object-cover w-full h-full"/>
      </div>
    </div>
  </div>
  )
}
