import { Link } from 'react-router-dom';
import UserNameIcon from '../default_dashboard/header/UserNameIcon';
import sublist from '../../assets/images/Sub List 1.png'
import add from '../../assets/images/add.png'
import Dot from '../../assets/images/Dot.png'
import list from '../../assets/images/list-ul.png'



const SchedulerHeader = ({selectedListName, toggleMenuModal}) => {
    const userName = localStorage.getItem('userName') || 'Guest'; 
  
    return (
      <header>
        <nav className=' absolute z-0 w-[85%] ml-[225] bg-[#175CD3] h-[134px] '>
          <div className='flex justify-between h-8 pr-[4rem] ml-4  pt-6'>
            <div className='flex '>
                < img src={list}  alt='Logo' className='w-9 h-7 '/>
                <p className='w-[2rem] h-[1.7rem]  text-white mt-[0.9px]'> Calendar</p>
                <Link to='/dashboard' className=" text-white font-lato  text-xl leading-tight pl-2">{selectedListName}</Link>
            </div>
            <div className='flex  gap-3 mr-[2rem]'>
              <h4 className=' mt-1.5 text-white font-lato text-xl  leading-tight'>Hey, {userName}</h4>
              <button><UserNameIcon className='w-[34px] h-[34px]' /></button>
            </div>
          </div>
          <div className='flex justify-between mt-12 pr-[4rem] ml-4'>
            <p className='w-[2rem] h-[1.7rem] text-2xl text-white' > Calendar</p>
            <div className='flex gap-2 h-8 mr-[2rem] '>
              <img src={add} alt="" className='w-8'/>
              <button  onClick={toggleMenuModal}><img src={Dot} alt="" /></button>
            </div>
          </div>
        </nav>
      </header>
    )
  }

export default SchedulerHeader