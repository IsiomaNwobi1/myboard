import React, { useState, useEffect } from "react";
import axios from "axios";
import Lines from "../../../assets/images/lines.png";
import Calendar from "../../../assets/images/calendar.png";
import Flag from "../../../assets/images/flag.png";
import Status from "../../../assets/images/Icon-3.png";
import Close from "../../../assets/images/close.png";

const EditForm = ({ hideModal, taskListId, taskId }) => {
  const [taskDetails, setTaskDetails] = useState({
    taskTitle: "",
    title: "",
    dueDate: "",
    priority: "none",
    status: "not started",
    description: "",
  });

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/task/get_task/${taskId}`
        );
        setTaskDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch task details", error);
      }
    };

    fetchTaskDetails();
  }, [taskId]);

  const updateTask = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/api/v1/task/update/${taskId}`,
        {
          title: taskDetails.taskTitle,
          dueDate: taskDetails.dueDate,
          priority: taskDetails.priority,
          status: taskDetails.status,
          description: taskDetails.description,
        }
      );
      console.log("Task updated successfully:", response.data);
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  const handleCancel = () => {
    hideModal();
  };

  return (
    <form
      action=""
      className="flex justify-center fixed top-[10] left-[50] w-[100%] items-center h-[100vh] z-[3] bg-[#00000036]"
    >
      <div className=" w-[550px]  mt-[50px]">
        <div className="bg-[#175CD3] h-[87px] pt-[1.5px] rounded-t-[10px] ">
          <div className="flex justify-between px-3">
            <h2 className="text-white text-lg font-semibold mt-2 mb-2 ml-1">
              Edit Task Form
            </h2>
            <button>
              <img
                src={Close}
                alt=""
                onClick={hideModal}
                className="w-[25px] h-[25px] mt-1"
              />
            </button>
          </div>
          <div>
            <input
              type="text"
              name="taskTitle"
              value={taskDetails.taskTitle}
              onChange={handleChange}
              className="text-white bg-transparent border-none outline-none w-full px-4"
            />
            <div className="border-b-2 border-white ml-4 mr-8 mt-[-6px]"></div>
          </div>
        </div>
        <div className="bg-[#ffff] h-[420px] rounded-b-[10px] pl-6">
          <div className="flex gap-4 pt-4 pb-2">
            <img src={Lines} alt="" className="h-[15px] mt-6 w-[25px] " />
            <input
              type="text"
              name="description"
              value={taskDetails.description}
              onChange={handleChange}
              className="border-l-0 border-r-0 border-t-0 w-[450px] h-[52px]"
              placeholder="Task Description"
            />
          </div>
          <div className="flex gap-4 pb-2">
            <img src={Lines} alt="" className="h-[15px] mt-6 w-[25px]" />
            <select
              name="taskListId"
              value={taskDetails.taskListId}
              onChange={handleChange}
              className="border-l-0 border-r-0 border-t-0 w-[450px] h-[52px]"
            >
              {/* Populate options based on task lists */}
              <option value="">Select Task List</option>
            </select>
          </div>
          <div className="flex gap-4 pb-2">
            <img src={Calendar} alt="" className="h-[25px] mt-6 w-[25px]" />
            <input
              type="datetime-local"
              name="dueDate"
              value={taskDetails.dueDate}
              onChange={handleChange}
              className="border-l-0 border-r-0 border-t-0 w-[450px] h-[52px]"
              placeholder="Due Date"
            />
          </div>
          <div className="flex gap-4 pt-2">
            <img src={Flag} alt="" className="h-[25px] mt-6 w-[25px]" />
            <div className="flex flex-col">
              <p className="mb-2 text-gray-500">Priority</p>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500"
                    name="priority"
                    value="none"
                    checked={taskDetails.priority === "none"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">None</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500"
                    name="priority"
                    value="high"
                    checked={taskDetails.priority === "high"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">High</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500"
                    name="priority"
                    value="medium"
                    checked={taskDetails.priority === "medium"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Medium</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500"
                    name="priority"
                    value="low"
                    checked={taskDetails.priority === "low"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Low</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-4 pt-2">
            <img src={Status} alt="" className="h-[25px] mt-6 w-[25px]" />
            <div className="flex flex-col">
              <p className="mb-2 text-gray-500">Status</p>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500"
                    name="status"
                    value="completed"
                    checked={taskDetails.status === "completed"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Completed</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500"
                    name="status"
                    value="not started"
                    checked={taskDetails.status === "not started"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Not Started</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500"
                    name="status"
                    value="In Progress"
                    checked={taskDetails.status === "In Progress"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">In Progress</span>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-[35px] pl-28">
            <button
              className="rounded-[5px] w-[100px] h-[40px] text-[#175CD3] gap-10 border border-blue-500  bg-white ml-[180px]"
              onClick={() => handleCancel}
            >
              Cancel
            </button>
            <button
              className="rounded-[5px] w-[100px] h-[40px] text-white gap-10 bg-[#175CD3] ml-2"
              onClick={updateTask}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
