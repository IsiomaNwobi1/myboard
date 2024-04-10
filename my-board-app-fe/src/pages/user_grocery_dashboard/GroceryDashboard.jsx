import Form from '../../components/populated_dashboard/form/Form';
import Modal from '../../components/Modal';
import { useState } from 'react';
import Menu from '../../components/populated_dashboard/menu/Menu';
import GrocerySideBar from '../../components/groceries_dashboard/GrocerySideBar';
import GroceryHeader from '../../components/groceries_dashboard/GroceryHeader';
import GroceryBody from '../../components/groceries_dashboard/GroceryBody';

const GroceryDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const ToggleFormModal = () => {
    setShowForm(showForm => !showForm);
  }

  const ToggleMenuModal = () => {
    setShowMenu(showMenu => !showMenu);
  }

  return (
    <section className="dashboard-container">
      {showMenu && <Menu toggleMenuModal={ToggleMenuModal}/>}
      <div className="flex">
         <GrocerySideBar />
         <GroceryHeader toggleMenuModal={ToggleMenuModal} />
         <GroceryBody hideModal={ToggleFormModal} />
        </div>
        {showForm && <Modal children={<Form hideModal={ToggleFormModal} />} />}
    </section>
   
  );
}



export default GroceryDashboard;