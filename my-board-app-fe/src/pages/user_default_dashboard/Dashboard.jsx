import Header from '../../components/default_dashboard/header/Header';
import SideBar from '../../components/default_dashboard/sideBar/SideBar';
import Body from '../../components/default_dashboard/body/Body';


const Dashboard = () => {
  return (
    <section>
     <div className='flex'>
      < SideBar />
     <div>
      < Header />
      < Body />
     </div>
     </div>
    </section>
    

  )
}

export default Dashboard