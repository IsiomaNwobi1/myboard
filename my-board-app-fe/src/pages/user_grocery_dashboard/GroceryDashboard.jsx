

import { useState } from 'react';
import Menu from '../../components/populated_dashboard/menu/Menu';
import GrocerySideBar from '../../components/groceries_dashboard/GrocerySideBar';
import GroceryHeader from '../../components/groceries_dashboard/GroceryHeader';
import {Outlet} from 'react-router-dom'

const GroceryDashboard = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ToggleMenuModal = () => {
    setShowMenu(showMenu => !showMenu);
  }
 

  return (
    <section className="dashboard-container h-[100vh] relative ">
      
      {showMenu && <Menu toggleMenuModal={ToggleMenuModal}/>}
  
      <div className="flex">
         <GrocerySideBar />
         <GroceryHeader toggleMenuModal={ToggleMenuModal}/>
         <Outlet/>
        </div>
    </section>
   
  );
}

export default GroceryDashboard;