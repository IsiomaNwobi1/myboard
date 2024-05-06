import Header from '../../components/default_dashboard/header/Header';
import SideBar from '../../components/default_dashboard/sideBar/SideBar';
import Body from '../../components/default_dashboard/body/Body';
import Form from '../../components/populated_dashboard/form/Form';
import axios from 'axios';
import Modal from '../../components/Modal';
import { useState } from 'react';
import Menu from '../../components/populated_dashboard/menu/Menu';

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [tasks, setTasks] = useState(false);
  const [selectedListName, setSelectedListName] = useState("Post"); // Default to "Post"
  const [selectedListId, setSelectedListId] = useState(null);
  const accessToken = localStorage.getItem('token');

  const fetchTasks = async (tasksId) => {
    if (!accessToken) {
      console.error('No authentication token found');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/api/v1/task/get_tasks/${tasksId}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      if (response) {
        setTasks(response.data);
      }
    } catch (error) {
      console.error('Error fetching task lists', error);
    }
  };

  console.log(selectedListId);
  console.log("tasks:", tasks);

  const ToggleFormModal = () => {
    setShowForm(showForm => !showForm);
  };

  const ToggleMenuModal = () => {
    setShowMenu(showMenu => !showMenu);
  };



  return (
    <section className="dashboard-container">
      {showMenu && <Menu toggleMenuModal={ToggleMenuModal} />}
      <div className="flex">
        <SideBar setSelectedListId={setSelectedListId} selectedListId={selectedListId} fetchTasks={fetchTasks} />
        <Header selectedListName={selectedListName} toggleMenuModal={ToggleMenuModal} />
        <Body hideModal={ToggleFormModal} tasks={tasks}/>
      </div>
      {showForm && <Modal children={<Form className="z-50" hideModal={ToggleFormModal} />} />}
    </section>
  );
}

export default Dashboard;
