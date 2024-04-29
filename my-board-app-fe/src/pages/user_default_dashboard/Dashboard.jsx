import Header from '../../components/default_dashboard/header/Header';
import SideBar from '../../components/default_dashboard/sideBar/SideBar';
import Body from '../../components/default_dashboard/body/Body';
import Form from '../../components/populated_dashboard/form/Form';
import Modal from '../../components/Modal';
import { useState } from 'react';
import Menu from '../../components/populated_dashboard/menu/Menu';

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedListName, setSelectedListName] = useState("Post"); // Default to "Post"

  const ToggleFormModal = () => {
    setShowForm(showForm => !showForm);
  };

  const ToggleMenuModal = () => {
    setShowMenu(showMenu => !showMenu);
  };

  const handleListSelect = (name) => {
    setSelectedListName(name);
  };

  return (
    <section className="dashboard-container">
      {showMenu && <Menu toggleMenuModal={ToggleMenuModal} />}
      <div className="flex">
        <SideBar onListSelect={handleListSelect} />
        <Header selectedListName={selectedListName} toggleMenuModal={ToggleMenuModal} />
        <Body hideModal={ToggleFormModal} />
      </div>
      {showForm && <Modal children={<Form className="z-50" hideModal={ToggleFormModal} />} />}
    </section>
  );
}

export default Dashboard;
