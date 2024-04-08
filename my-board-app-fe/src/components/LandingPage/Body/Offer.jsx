import React from 'react';

export const Offer = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col items-center">
        <div className="-mt-[50px]">
          <h2 className="font-lato font-semibold text-3xl leading-[1.559] text-black mb-8">
            What We Offer?
          </h2>
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center">
              <img src="/Users/mac/Desktop/myboard_fe/my-board-app-fe/src/assets/images/Rectangle54.png" alt="" className="w-[25.9rem] h-[18.8rem] bg-cover bg-no-repeat bg-center mb-3"/>
              <p className="font-lato font-medium text-1.7rem leading-[1.4] text-black">
                Effortlessly organise tasks, projects, and teams.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="assets/images/Rectangle56.png" alt="" className="w-[25.8rem] h-[18.8rem] bg-cover bg-no-repeat bg-center mb-3"/>
              <p className="font-lato font-medium text-1.7rem text-black">
                Robust features allow you to prioritize effectively
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="assets/images/Rectangle55.png" alt="" className="w-[26.3rem] h-[18.8rem] bg-cover bg-no-repeat bg-center mb-3"/>
              <p className="font-lato font-medium text-1.7rem text-black">
                Set due dates, assignees, priorities,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
