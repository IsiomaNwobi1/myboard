// import './RightSection.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../../assets/images/my-board-logo.png';
import Google from '../../assets/images/Google.png';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Loader from '../Signup/Loader'
import { useNavigate } from 'react-router-dom'; // useNavigate for redirection to login page


Modal.setAppElement('#root'); // This line is for accessibility reasons

export const RightSection = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSignupSuccess, setIsSignupSuccess] = useState(false); // State for tracking signup success
    const navigate = useNavigate();

    useEffect(() => {
        if (modalIsOpen) {
            const timer = setTimeout(() => {
                navigate('/login'); // Redirect to login page after 10 seconds
            }, 10000);
            return () => clearTimeout(timer); // Clear timer on component unmount
        }
    }, [modalIsOpen, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading

        // Check for empty fields
        if (!firstName.trim()) {
        setModalMessage('First Name cannot be empty');
        setIsLoading(false); // Stop loading
        setModalIsOpen(true); // Open Modal
        return;
        }
        if (!lastName.trim()) {
        setModalMessage('Last Name cannot be empty');
        setIsLoading(false); // Stop loading
        setIsSignupSuccess(false);
        setModalIsOpen(true); // Open Modal
        return;
        }
        if (!phoneNumber.trim()) {
        setModalMessage('Phone Number cannot be empty');
        setIsLoading(false); // Stop loading
        setModalIsOpen(true); // Open Modal
        setIsSignupSuccess(false);
        return;
        }
        if (!email.trim()) {
        setModalMessage('Email Address cannot be empty');
        setIsLoading(false); // Stop loading
        setIsSignupSuccess(false);
        setModalIsOpen(true); // Open Modal
        return;
        }
        if (!password.trim()) {
        setModalMessage('Password cannot be empty');
        setIsLoading(false); // Stop loading
        setIsSignupSuccess(false);
        setModalIsOpen(true); // Open Modal
        return;
        }
        if (!confirmPassword.trim()) {
        setModalMessage('Confirm Password cannot be empty');
        setIsLoading(false); // Stop loading
        setIsSignupSuccess(false);
        setModalIsOpen(true); // Show modal
        return;
        }

        if (password !== confirmPassword) {
        setModalMessage('Passwords do not match!');
        setIsLoading(false); // Stop loading
        setIsSignupSuccess(false);
        setModalIsOpen(true); // Show modal
        return;
        }

        // Check password length
        if (password.length < 8) {
        setModalMessage('Password must be at least 8 characters long');
        setIsLoading(false); // Stop loading
        setIsSignupSuccess(false);
        setModalIsOpen(true); 
        return;
        }

        if (password !== confirmPassword) {
            setModalMessage('Passwords do not match!');
            setIsLoading(false); // Stop loading
            // Using a callback to open the modal only after the message state has been updated
            setModalIsOpen(true);
            setIsSignupSuccess(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
                firstName,
                lastName,
                phoneNumber,
                email,
                password
            });
            setIsLoading(false); // Stop loading before setting the modal message
            console.log("Response received: ", response.data);
            setModalMessage(response.data.responseMessage + ' Go to your email and click the link to verify.');
            setIsSignupSuccess(true);
            setModalIsOpen(true);

            // Using a timeout to ensure the message updates before the modal opens
            setTimeout(() => setModalIsOpen(true), 0);

        } catch (error) {
            setIsLoading(false); // Stop loading on error
            console.log("Error received: ", error);

            let message = error.response ? error.response.data.responseMessage : 'Unknown error';
            setModalMessage(message);
            setIsSignupSuccess(false);
            setModalIsOpen(true);
        }
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'none',
            padding: 0,
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
        }
    };     

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='py-10 px-20'>
                {isLoading && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)'
                }}>
                    <Loader />
                </div>
            )}            <div className='flex items-center justify-center'>
                <img src={Logo} alt='logo'/>
                <p className='px-3 text-[#175CD3] text-[25px]'>My Board</p>
            </div>

            <h2 className='flex items-center justify-center pt-5 text-3xl'>Create Account</h2>
            
            <form onSubmit={handleSubmit}>
                <div className=''>
                    <label>First Name</label>
                    <input 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='border bottom-3 rounded w-full flex items-center border-gray-400 mt-2 mb-2' 
                        placeholder='Sani'
                    />
                </div>

                <div>
                    <label>Last Name</label>
                    <input 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className='border bottom-3 border-gray-400 rounded w-full mt-2 mb-2' 
                        placeholder='Dogo'
                    />
                </div>

                <div>
                    <label>Phone Number</label>
                    <PhoneInput 
                        international
                        defaultCountry='NG'
                        value={phoneNumber}
                        onChange={setPhone}
                        className='border bottom-3 border-gray-400 rounded w-full px-3 mt-2 mb-2'
                    />
                </div>

                <div>
                    <label>Email Address</label>
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        className='border bottom-3 border-gray-400 rounded w-full mt-2 mb-2' 
                        placeholder='sani.jdogo@gmail.com'
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        className='border bottom-3 border-gray-400 rounded w-full mt-2 mb-2' 
                        placeholder='**********'
                    />
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type='password'
                        className='border bottom-3 border-gray-400 rounded w-full mt-2 mb-2' 
                        placeholder='**********'
                    />
                </div>

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
                    <button type="submit" className="buttoun w-full text-[#FCFCFD]">SIGNUP</button>
                </div>
            </form>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Registration Message"
            >
                <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
                    <div className='bg-[#175CD3] text-white text-lg p-3'>Message</div>
                    <div className='p-5'>{modalMessage}</div>
                    <div className='flex justify-end p-3'>
                    {isSignupSuccess && (
                    <button onClick={() => navigate('/login')} className='bg-blue-500 text-white py-2 px-4 rounded-lg'>Click to Log In</button>
                        )}                        
                    <button onClick={closeModal} className='bg-red-500 text-white py-2 px-4 ml-4 rounded-lg'>Close</button>
                    </div>
                </div>
            </Modal>

            <p className='flex items-center justify-center text-[#98A2B3]'>Already have an Account? <span className='text-[#175CD3] m-2'><Link to='/login'>Log In here</Link></span></p>
        </div>
    );
};
