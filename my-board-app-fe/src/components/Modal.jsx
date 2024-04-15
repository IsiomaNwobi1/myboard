const Modal = ({children}) => {

    return (
    <div className='fixed top-[0%] left-[0%]  flex justify-center items-center w-[100%] h-[100vh] bg-[#40403f9d]'>
      {children}
    </div>
    )
  }

  export default Modal;