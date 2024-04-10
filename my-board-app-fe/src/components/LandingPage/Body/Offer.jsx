import React from 'react';
import imageSrc1 from '../../../assets/images/Rectangle54.png';
import imageSrc2 from '../../../assets/images/Rectangle55.png';
import imageSrc3 from '../../../assets/images/Rectangle56.png';

const OfferBlock = ({ imgSrc, title, description }) => (
  <div className="relative flex flex-col items-center">
    <div className="m-[0_1.1rem_3rem_0] flex justify-center w-[25.9rem] h-[18.8rem]">
      <div style={{ backgroundImage: `url(${imgSrc})`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100%' }}></div>
    </div>
    <div className="w-[422px] text-center">
      <h2 className="mb-1 text-[1.7rem] font-medium leading-snug text-black">{title}</h2>
      <p className="text-base font-medium leading-relaxed text-gray-500">{description}</p>
    </div>
  </div>
);

export const Offer = () => {
  return (
    <div className="m-[0_3.4rem_6rem_5.8rem] flex flex-col items-center w-fit">
      <h1 className="m-[5rem_0.1rem_2rem_0] inline-block text-[3rem] font-semibold leading-[1.559] text-black">
        What We Offer?
      </h1>
      <div className="flex flex-row justify-center relative w-fit">
        <OfferBlock
          imgSrc={imageSrc1}
          title="Effortlessly organise tasks, projects & teams."
          description="Lorem ipsum dolor sit amet consectetur. Aenean augue eu bibendum morbi."
        />
        <OfferBlock
          imgSrc={imageSrc2}
          title="Robust features allow you to prioritize effectively"
          description="Lorem ipsum dolor sit amet consectetur. Aenean augue eu bibendum morbi."
        />
        <OfferBlock
          imgSrc={imageSrc3}
          title="Set due dates, assignees & priorities"
          description="Lorem ipsum dolor sit amet consectetur. Aenean augue eu bibendum morbi."
        />
      </div>
    </div>
  );
}
