import React, { useState } from "react";
import image1 from "../../../assets/images/add1.png";
import image2 from "../../../assets/images/three-dots.png";
import EditMenu from "../../populated_dashboard/edit_menu/EditMenu";
import image from "../../../assets/images/img2.png";

const Body = ({ hideModal, tasks }) => {
  const [showEditMenu, setShowEditMenu] = useState(false);
  const ToggleEditMenuModal = () => {
    setShowEditMenu((showEditMenu) => !showEditMenu);
  };
  return (
    <>
      {showEditMenu && <EditMenu toggleEditMenuModal={ToggleEditMenuModal} />}
      <div className="pt-[13rem] w-[1215px]">
        {!tasks && (
          <>
            <div className="flex justify-center items-center ">
              <img
                className=" bg-[50%_50%] bg-cover bg-no-repeat w-[27.9rem] h-[25.8rem] mx-auto "
                src={image}
                alt=""
              />
            </div>
            <p className="text-center font-lato font-bold text-2xl leading-7 text-[#475467] mt-6">
              A fresh list, let's get started
            </p>
          </>
        )}
        {tasks &&
        tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between border-b-[#EAECF0] border-t-0 border-r-0 border-l-0 border-2 p-5">
            <div className="flex items-center justify-between ">
              <input
                type="radio"
                name="Go to the movies by 7pm with Nonso"
                id=""
              />
              <p className="pl-5 text-[#667085]">{task.title} </p>
            </div>
            <button onClick={ToggleEditMenuModal}>
              <img src={image2} alt="" className="mr-[68px]" />
            </button>
          </div>
        ))}
        <div className="flex items-end flex-col ">
          <button onClick={hideModal} className=" mr-[6.4rem]">
            <img src={image1} alt="" />
          </button>
          <p className=" mr-[5rem] mt-1 text-10px leading-11px text-#101828">
            Create a task
          </p>
        </div>
      </div>
    </>
  );
};

export default Body;
