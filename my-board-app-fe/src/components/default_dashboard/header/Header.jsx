
import { Link } from 'react-router-dom';
import List from '../../../assets/images/list-ul.png';
import background from '../../../assets/images/Background.png';
import UserNameIcon from './UserNameIcon';
import sublist from '../../../assets/images/Sub List 1.png';
import add from '../../../assets/images/add.png';
import Dot from '../../../assets/images/Dot.png';

const Header = ({selectedListName, toggleMenuModal}) => {
  const userName = localStorage.getItem('userName') || 'Guest'; // 'Guest' if no name is stored

  return (
    <header>
      <nav className=' absolute z-0 w-[85%] ml-[225] bg-[#175CD3] h-[134px] '>
        <div className='flex justify-between h-8 pr-[4rem]  pt-6'>
          <div className='flex '>
            <div src={List} alt="" className='w-[2rem] h-[1.7rem]'/>
            <Link to='/dashboard' className=" text-white font-lato  text-xl leading-tight pl-2"></Link>
          </div>
          <div className='flex  gap-3 mr-[2rem]'>
            <h4 className=' mt-1.5 text-white font-lato text-xl  leading-tight'>Hey, {userName}</h4>
            <button><UserNameIcon className='w-[34px] h-[34px]' /></button>
          </div>
        </div>
        <div className='flex justify-between mt-12 pr-[4rem] '>
          <div className='w-[50px] h-[50px]' src={sublist} alt="" />
          <div className='flex gap-2 h-8 mr-[2rem] '>
            <img src={add} alt="" className='w-8'/>
            <button  onClick={toggleMenuModal}><img src={Dot} alt="" /></button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;