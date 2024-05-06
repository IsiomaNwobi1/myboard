import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = ({ match }) => {
  const { taskListId } = match.params;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/task/get_tasks/${taskListId}`);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [taskListId]);

  return (
    <div>
      <h1>Tasks for Task List ID: {taskListId}</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
