import React from 'react';
import { BsBookmark } from 'react-icons/bs';
import Timer from '../../../public/timer.svg';
import WalletMoney from '../../../public/wallet-money.svg';
import ProfileUser from '../../../public/profile-2user.svg';
import ClipboardClose from '../../../public/clipboard-close.svg';


const Intern = () => {

    return (
        <div className='w-full h-[35vh] flex flex-col p-[0.8rem] rounded-[0.5rem] bg-white  '>

            <div className="w-full h-[10vh] flex ">
                <div className="w-[85%] h-full flex flex-col   ">
                    <span className='text-[1rem] font-[700]  '>Motion Graphics Designer</span>
                    <span className='text-[0.8rem] font-[700] '>Xapo Visuals</span>
                </div>
                <div className="w-[15%] h-full flex justify-center items-start  ">
                    <button className='w-[70%] h-[70%] rounded-[0.3rem] flex justify-center items-center text-[1.2rem] border-[1px] border-black '><BsBookmark /></button>
                </div>
            </div>

            <div className="w-full h-[10vh] flex ">
                <div className="w-[20%] h-full flex justify-start items-center  ">
                    <img className='w-[50%] h-[50%] object-contain ' src="https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260" alt="company_logo" />
                </div>
                <div className="w-[80%] h-full flex justify-end items-center  ">
                    <div className="w-[100%] h-[50%] rounded-[1rem] border-[1px] border-gray-500 overflow-hidden flex bg-pink-300 ">
                        <span className='w-[29%] text-[0.75rem] font-[700]  border-r-[1px] border-gray-500 flex justify-center items-center  bg-gray-200  '>Photoshop</span>
                        <span className='w-[29%] text-[0.75rem] font-[700]  border-r-[1px] border-gray-500 flex justify-center items-center  bg-gray-200  '>After Effects</span>
                        <span className='w-[29%] text-[0.75rem] font-[700]  border-r-[1px] border-gray-500 flex justify-center items-center  bg-gray-200  '>Blender</span>
                        <span className='w-[13%] text-[0.75rem] font-[700]  flex justify-center items-center  bg-gray-200 '>+10</span>
                    </div>
                </div>
            </div>

            <div className="w-full h-[15vh] grid grid-cols-2 ">

                <div className="w-[100%] flex justify-start items-center gap-x-[0.2rem]  ">
                    <img src={Timer} alt="logo" />
                    <div><span className='text-[0.9rem] font-[700] '>1 Month</span></div>
                </div>

                <div className="w-[100%] flex justify-start items-center gap-x-[0.2rem]  ">
                    <img src={WalletMoney} alt="logo" />
                    <div><span className='text-[0.9rem] font-[700] '>$20,000 - $30,000</span></div>
                </div>

                <div className="w-[100%] flex justify-start items-center gap-x-[0.2rem]  ">
                    <img src={ProfileUser} alt="logo" />
                    <div><span className='text-[0.9rem] font-[700] '>123</span>Applicants</div>
                </div>

                <div className="w-[100%] flex justify-start items-center gap-x-[0.2rem]  ">
                    <img src={ClipboardClose} alt="logo" />
                    <div>Ends in <span className='text-[0.9rem] font-[700] '>3 days</span></div>
                </div>

            </div>

        </div>
    )
};

export default Intern;