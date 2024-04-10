import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../assets/images/Rectangle60.png';
import image2 from '../../../assets/images/Rectangle61.png';
import image3 from '../../../assets/images/Rectangle62.png';
import image4 from '../../../assets/images/Rectangle63.png';
import image5 from '../../../assets/images/Rectangle64.png';
import image6 from '../../../assets/images/Rectangle65.png';

export const Hero = () => {
  const renderImageDiv = (imgSrc, additionalMargins = "", positionPercent = "50%") => (
    <div 
      className={`rounded-full bg-no-repeat bg-cover ${additionalMargins} w-[11.9rem] h-[34.7rem]`}
      style={{ 
        backgroundImage: `url(${imgSrc})`,
        backgroundPosition: imgSrc === image4 ? `${positionPercent} center` : 'center center'
      }}
    ></div>
  );
  

  return (
    <div className="m-[0_4.5rem_4.4rem_4.6rem] flex flex-col items-center w-fit">
      <div className="flex flex-col items-center w-fit m-[0_7.3rem_3rem_7.3rem]">
        <p className="text-[3rem] font-bold leading-[1.298] text-black text-center break-words m-[0_0_0.9rem_0]">
          Let Us Help You Tick Those <br/><span className='text-[#175CD3]'>To-Dos</span> Off Your List
        </p>
        <p className="text-[1rem] font-normal leading-[1.75] text-gray-500 text-center break-words">
          Break Up With Inefficient Workflows - Our App Will Treat You Better, Wave Goodbye to Task Stress, a Simpler System Awaits, Two Heads Get More Done Than One - Let's Team Up<br />
        </p>
        <Link to="/" className="mt-4 rounded-md bg-[#175CD3] hover:bg-blue-600 flex justify-center items-center p-[0.9rem] w-[22.2rem] text-white">
          Get Started
        </Link>
      </div>
      <div className="flex flex-row w-[80.9rem]">
        {renderImageDiv(image1, "m-[0.7rem_1.5rem_0.5rem_0]")}
        {renderImageDiv(image2, "m-[3.8rem_2.2rem_2.6rem_0]")}
        {renderImageDiv(image3, "m-[0_1.8rem_4.3rem_0]")}
        {renderImageDiv(image4, "m-[4.3rem_2rem_0_0]", "27%")}
        {renderImageDiv(image5, "m-[0_1.8rem_4.3rem_0]")}
        {renderImageDiv(image6, "m-[3.8rem_0_0.5rem_0]")}
      </div>
    </div>
  );
};
