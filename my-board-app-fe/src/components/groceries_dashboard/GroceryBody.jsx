import React, {useState} from 'react';
import image1 from '../../assets/images/add1.png'
import image2 from '../../assets/images/three-dots.png'
import EditMenu from '../populated_dashboard/edit_menu/EditMenu';
import Modal from '../../components/Modal';
import Form from '../populated_dashboard/form/Form';
import EditForm from '../populated_dashboard/form/EditForm';

const GroceryBody = ({}) => {


    const [showForm, setShowForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

    const ToggleEditFormModal = () => {
        setShowEditForm(showEditForm => !showEditForm);
    }
    const ToggleFormModal = () => {
        setShowForm(showForm => !showForm);
      }

    const [showEditMenu, setShowEditMenu] = useState(false);
    const ToggleEditMenuModal = () => {
        setShowEditMenu(showEditMenu => !showEditMenu)
      }
    return (
        <div className='pt-[8rem] w-[1215px]'>
            {showEditMenu && <EditMenu toggleEditMenuModal={ToggleEditMenuModal} showForm={ToggleFormModal} />}
            {showForm && <Modal children={<Form hideModal={ToggleFormModal} />} />}
            {showEditForm && <Modal children={<EditForm hideModal={ToggleEditFormModal} />} />}
            <div className='h-[62vh]'>
                <div className='flex items-center justify-between border-b-[#EAECF0] border-t-0 border-r-0 border-l-0 border-2 p-5'>
                    <div className='flex items-center justify-between '>
                        <input type="radio" name="Go to the movies by 7pm with Nonso" id="" />
                        <p className='pl-5 text-[#667085]'>Go to the movies by 7pm with Nonso</p>
                    </div>
                    <button onClick={ToggleEditMenuModal}><img src={image2} alt="" className='mr-[68px]'/></button>
                </div>
                <div className='flex items-center justify-between border-b-[#EAECF0] border-t-0 border-r-0 border-l-0 border-2 p-5'>
                    <div className='flex items-center justify-between '>
                        <input type="radio" name="Go to the movies by 7pm with Nonso" id="" />
                        <p className='pl-5 text-[#667085]'>Go to the movies by 7pm with Nonso</p>
                    </div>
                    <button onClick={ToggleEditMenuModal}><img src={image2} alt="" className='mr-[68px]'/></button>
                </div>
                <div className='flex items-center justify-between border-b-[#EAECF0] border-t-0 border-r-0 border-l-0 border-2 p-5'>
                    <div className='flex items-center justify-between '>
                        <input type="radio" name="Go to the movies by 7pm with Nonso" id="" />
                        <p className='pl-5 text-[#667085]'>Go to the movies by 7pm with Nonso</p>
                    </div>
                    <button onClick={ToggleEditMenuModal}><img src={image2} alt="" className='mr-[68px]'/></button>
                </div>
                <div className='flex items-center justify-between border-b-[#EAECF0] border-t-0 border-r-0 border-l-0 border-2 p-5'>
                    <div className='flex items-center justify-between '>
                        <input type="radio" name="Go to the movies by 7pm with Nonso" id="" />
                        <p className='pl-5 text-[#667085]'>Go to the movies by 7pm with Nonso</p>
                    </div>
                    <button onClick={ToggleEditMenuModal}><img src={image2} alt="" className='mr-[68px]'/></button>
                </div>
                <div className='flex items-center justify-between border-b-[#EAECF0] border-t-0 border-r-0 border-l-0 border-2 p-5'>
                    <div className='flex items-center justify-between '>
                        <input type="radio" name="Go to the movies by 7pm with Nonso" id="" />
                        <p className='pl-5 text-[#667085]'>Go to the movies by 7pm with Nonso</p>
                    </div>
                    <button onClick={ToggleEditMenuModal}><img src={image2} alt="" className='mr-[68px]'/></button>
                </div>
            </div>
            <div className='flex items-end flex-col z-50 pt-[5rem] relative '>
                <button onClick={ToggleFormModal} className=' mr-[6.4rem]'><img src={image1} alt="" /></button>
                <p className=' mr-[5rem] mt-1 text-10px leading-11px text-#101828'>Create a task</p>
            </div>
        </div>
    )
};

export default GroceryBody;