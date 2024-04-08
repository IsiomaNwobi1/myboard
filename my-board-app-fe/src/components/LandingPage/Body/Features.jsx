import React from 'react'
import { Link } from 'react-router-dom';


export const Features = () => {
  return (
    <div className="m-[0_3.4rem_0rem_5.8rem] flex flex-col items-center w-[fit-content] box-sizing-border">
    <div className="m-[0_0_0rem_0] flex flex-col items-center w-[fit-content] box-sizing-border">
      <div className="m-[0_0_3rem_0] flex flex-row w-[fit-content] box-sizing-border">
        
        <div className="m-[4.8rem_4.3rem_4.8rem_0] flex flex-col box-sizing-border">
          
          <div className="relative m-[0_0_5.6rem_0] flex flex-row justify-center box-sizing-border">
            <p className="mb-[20px] break-words font-['Inter'] font-bold text-[2.1rem] leading-[1.266] text-[#000000]">
              Collaborate seamlessly, and integrate with your favourite apps.
            </p>
            <p className="absolute right-[-1rem] bottom-[-5.6rem] break-words font-['Inter'] font-medium text-base leading-7 text-[var(--grey-5001,#667085)]">
              Break Up With Inefficient Workflows - Our App Will Treat You Better, Wave Goodbye to Task Stress, a Simpler System Awaits, Two Heads Get More Done Than One - Let's Team Up pulvinar integer
            </p>
          </div>
          
          <Link to='/' className="mt-[20px] rounded-[0.3rem] bg-[#175CD3] flex flex-row justify-center self-start p-[0.9rem_0rem_0.9rem_0] w-[11.6rem] box-sizing-border hover:bg-blue-600 hover:border-blue-600">
            <p className="break-words font-['Inter'] font-medium text-[1rem] leading-[1.75] text-[var(--white-1,#FFFFFF)]">
              Learn More
            </p>
          </Link>
        
        </div>
        
        <div className="rounded-[0.3rem] relative flex flex-row justify-center p-[0_0_0_3.3rem] w-[38.1rem] h-[24.1rem] box-sizing-border">
          <div className="rounded-[0.3rem] bg-[#175CD3] relative w-[34.9rem] h-[21.5rem]">
          </div>
          
          <div className="rounded-[0.3rem] bg-[url('/Users/mac/Desktop/myboard_fe/my-board-app-fe/src/assets/images/Rectangle81.png')] absolute left-[0rem] right-[3.3rem] bottom-[0rem] h-[21.5rem]">
          </div>
        </div>
      
      </div>
      
      <div className="m-[0_0.8rem_0_0] flex flex-row w-[fit-content] box-sizing-border">
        <div className="rounded-[0.3rem] relative m-[0_1.4rem_0_0] flex flex-row justify-center p-[0_2.5rem_2.4rem_0] w-[39.9rem] h-[23.8rem] box-sizing-border">
          <div className="rounded-[0.3rem] bg-[#175CD3] relative w-[37.4rem] h-[21.4rem]">
          </div>
          <div className="rounded-[0.3rem] bg-[url('/Users/mac/Desktop/myboard_fe/my-board-app-fe/src/assets/images/Rectangle8.png')] absolute left-[2.5rem] right-[0rem] bottom-[0rem] h-[21.4rem]">
          </div>
        </div>
        
        <div className="m-[3rem_0_4.6rem_0] flex flex-col box-sizing-border">
          <div className="relative m-[0_0_5.6rem_0] flex flex-row justify-center box-sizing-border">
            <p className="mb-[20px] break-words font-['Inter'] font-bold text-[2.1rem] leading-[1.266] text-[#000000]">
              Customise workflows and Effortlessly organise tasks, projects, and teams.
            </p>
            <p className="absolute right-[-0.7rem] bottom-[-5.1rem] break-words font-['Inter'] font-medium text-[1rem] leading-[1.75] text-[var(--grey-5001,#667085)]">
              Break Up With Inefficient Workflows - Our App Will Treat You Better, Wave Goodbye to Task Stress, a Simpler System Awaits, Two Heads Get More Done Than One - Let's Team Up pulvinar integer
            </p>
          </div>
          <a href='/' className="mt-[20px] rounded-[0.3rem] bg-[#175CD3] flex flex-row justify-center self-start p-[0.9rem_0rem_0.9rem_0] w-[11.6rem] box-sizing-border hover:bg-blue-600 hover:border-blue-600">
            <p className="break-words font-['Inter'] font-medium text-[1rem] leading-[1.75] text-[var(--white-1,#FFFFFF)]">
              Learn More
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
