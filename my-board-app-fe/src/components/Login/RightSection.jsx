
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../assets/images/my-board-logo.png';
import Google from '../../assets/images/Google.png';
import './style.css';
import Loader from '../Signup/Loader';

export const RightSection = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        
        if (!email.trim() && !password.trim()) {
            setErrorMessage('Email and password are required');
            setIsLoading(false);
            return;
        }
        if(!email.trim()) {
          setErrorMessage('Email Address cannot be empty');
          setIsLoading(false);
          return;
        }
        if(!password.trim()) {
          setErrorMessage('Password cannot be empty');
          setIsLoading(false);
          return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
                email,
                password
            });

            setIsLoading(true)

            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('userId', response.data.id)
            localStorage.setItem('userName', response.data.firstName);


            setTimeout(() => {
                navigate('/dashboard')
                setIsLoading(false)
            }, 3000); // Redirect user to dashboard after successful login
        } catch (error) {
            const errorMsg = error.response ? error.response.data.error : 'Login failed, please try again';
            setErrorMessage(errorMsg);
        }
    };

    return (
                
        <div className='py-20 px-20'>
          {isLoading && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)'
                }}>
                    <Loader />
                </div>
            )}
            <div className='flex items-center justify-center'>
                <img src={Logo} alt='logo'/>
                <p className='px-3 text-[#175CD3] text-[25px]'>My Board</p>
            </div>

            <h2 className='flex items-center justify-center pt-5 text-3xl'>Welcome back to My Board</h2>

            <form onSubmit={handleLogin}>
                <div className='mt-10'>
                    <label>Email Address</label>
                    <input
                        className='border bottom-3 rounded w-full mt-3'
                        placeholder='sani.jdogo@gmail.com'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='pt-2'>
                    <label>Password</label>
                    <input
                        className='border bottom-3 rounded w-full mt-3'
                        placeholder='**********'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {errorMessage && <p className="text-red-500 text-center mt-2">{errorMessage}</p>}

                <p className='mt-[15px] text-blue-700 underline underline-offset-4'>
                    <Link to='/initiate-reset-password'>Forgot Password?</Link>
                </p>

                <div className="m-[30px_6px_6px_50px] flex flex-row justify-between w-[476px] box-sizing-border">
          <div className="flex flex-row box-sizing-border">
            <div className="m-[10px_14px_9px_0] flex flex-row justify-center w-[220px] h-[1px] box-sizing-border">
              <div className="bg-[#EAEBEC] w-full h-[1px]"></div>
            </div>
            <span className="break-words font-['Inter'] font-[var(--button-normal-14-font-weight,400)] text-[14px] leading-[var(--button-normal-14-line-height,1.429)] text-[var(--grey-400,#98A2B3)]">
              OR
            </span>
          </div>
          <div className="m-[9px_0_10px_0] flex flex-row justify-center w-[202px] h-[1px] box-sizing-border">
            <div className="bg-[#EAEBEC] w-full h-[1px]"></div>
          </div>
        </div>

        <div className='flex items-center  justify-center w-full'>
                <button className="flex items-center justify-center flex-row rounded-lg mt-2 mb-2 bg-white py-3 w-full border text-[#98A2B3] border-[#D0D5DD] border-3">
                    <img src={Google} alt="Google sign-in" className='px-3' />
                    Sign in with Google
                </button>
            </div>

                <div className='flex items-center justify-center mt-2 mb-2'>
                    <button type="submit" className="buttoun w-full text-[#FCFCFD]" disabled={isLoading}>{isLoading ?"Loading...": "LOG IN"}</button>
                </div>
            </form>

            

            <p className='flex items-center justify-center text-[#98A2B3]'>Don't have an Account? <span className='text-[#175CD3] m-2'><Link to='/signup'>Sign up here</Link></span></p>
        </div>
    );
}