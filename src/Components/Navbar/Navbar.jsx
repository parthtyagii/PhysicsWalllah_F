import React from 'react';
import ClipboardText from '../../../public/clipboard-text.svg';
import TaskSquare from '../../../public/task-square.svg';
import Edit from '../../../public/edit.svg';
import MessageQuestion from '../../../public/message-question.svg';
import Notification from '../../../public/notification.svg';




const Navbar = () => {

    return (
        <div className='w-full h-[10vh] flex bg-white '>

            <div className="w-[20%] h-full text-[1.5rem] font-[700] pl-[2rem] flex justify-start items-center  ">
                InternBrand
            </div>

            <div className="w-[60%] h-full flex justify-center items-center gap-x-[2rem] ">
                <div className="flex gap-x-[0.5rem] ">
                    <span >
                        <img src={ClipboardText} alt="logo" />
                    </span>
                    <span className='text-[1rem] font-[500] '>Browse Listings</span>
                </div>
                <div className="flex gap-x-[0.5rem] ">
                    <span >
                        <img src={TaskSquare} alt="logo" />
                    </span>
                    <span className='text-[1rem] font-[500] '>Application History</span>
                </div>
                <div className="flex gap-x-[0.5rem] ">
                    <span >
                        <img src={Edit} alt="logo" />
                    </span>
                    <span className='text-[1rem] font-[500] '>Blog</span>
                </div>
                <div className="flex gap-x-[0.5rem] ">
                    <span >
                        <img src={MessageQuestion} alt="logo" />
                    </span>
                    <span className='text-[1rem] font-[500] '>Contact Us</span>
                </div>
            </div>

            <div className="w-[20%] h-full flex justify-end items-center pr-[2rem] gap-x-[1rem]  ">
                <span>
                    <img src={Notification} alt="logo" />
                </span>
                <span className='w-[2.8rem] h-[2.8rem] rounded-[50%] overflow-hidden bg-red-300 '>
                    <img className='w-full h-full object-cover' src="https://res.cloudinary.com/dw0up71e2/image/upload/v1675574780/profileImages/lduogevj8tmqf0tghwfb.jpg" alt="user_image" />
                </span>
            </div>

        </div>
    )
};

export default Navbar;