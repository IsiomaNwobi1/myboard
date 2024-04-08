import Header from '../../components/default_dashboard/header/Header';
import SideBar from '../../components/default_dashboard/sideBar/SideBar';
import Body from '../../components/default_dashboard/body/Body';

const Dashboard = () => {
  return (
    <section className="dashboard-container">
      <div className="flex">
         <SideBar />
         <Header />
         <Body />
        </div>
    </section>
  );
}

export default Dashboard;