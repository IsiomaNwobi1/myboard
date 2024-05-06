import React, { useState } from 'react';
import Logo from '../../assets/images/my-board-logo.png';
import ApiQueryWithoutToken from "../../api-service/index.js";
import Icon from '../../assets/images/Icon.svg'
import { Link } from 'react-router-dom';



export const Right = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const [email, setEmail] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);

      await ApiQueryWithoutToken.post('/auth/forgot-password-email?email=' + email)
          .then(response => {
            console.log(response);
            setSuccessMessage(response.data.message);
            openModal();
          }).catch(error => alert(error.message));
  }

  return (
    <div className='py-[200px] px-20'>
        <div className='flex items-center justify-center'>
            <img src={Logo} alt='logo'/>
            <p className='px-3 text-[#175CD3] text-[25px]'>My Board</p>
        </div>

        <div>
        <h2 className='flex items-center justify-center pt-5 text-3xl w-200 h-34'>Reset your password</h2>
        </div>

        <div className='flex items-center justify-center'>
        <p className='mt-5 text-[#667085] w-[400px] text-center'>Enter your email below and we’ll send you instructions on how to reset your password.</p>
        </div>
    


   <div className='mt-10'>
    <label className='text-[#212121]'>Email Address</label>
    <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='border bottom-3 rounded w-full mt-3 h-[50px]' placeholder='sani.jdogo@gmail.com'/>
    </div>

      <div className='flex items-center  justify-center mt-7'>
        <button className="buttoun w-full text-[#FCFCFD] h-[50px]" onClick={(e)=>handleForgotPassword(e)}>
      Send Reset Instructions</button>
    </div>
    
    {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-65 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-[544px] h-[320px]">
              <h2 className="text-xl mb-8 text-center text-[#175CD3] font-medium font-lato">Reset Password!</h2>
                <div className='flex items-center justify-center mb-8'><img src={Icon} alt=''/></div>
              <p className='text-center text-[#667085]'>You will get an email confirmation {email&&email}</p>
              <Link to='/login'><div className='flex items-center justify-center'>
                <button className="mt-6 buttoun w-full">
                    Return to Login
                    </button>
                    </div>
                    </Link>
            </div>
          </div>
        </>
      )}
    </div>
    )
  }