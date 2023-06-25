import React from 'react';
import { FaFilter } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import InternInfo from '../InternInfo/InternInfo';



const RightPart = () => {

    return (
        <div className='w-[68%] h-full flex flex-col gap-y-[1rem] justify-start '>

            <div className="w-full h-[9vh] flex justify-between items-center ">
                <div className="w-[94%] h-[80%] relative ">
                    <input className='w-full h-full text-[1rem] text-gray-700 font-[500] rounded-[0.5rem] pl-[2%] pr-[12%] overflow-hidden border focus:outline-none border-gray-300 ' type="text" />
                    <button className='w-[10%] h-full rounded-r-[0.5rem] text-[1.8rem] flex justify-center items-center absolute top-0 right-0 text-white bg-blue-600 '><BiSearchAlt /></button>
                </div>

                <div className="h-full grow text-[1.5rem] text-blue-600 flex justify-end items-center ">
                    <button className='p-[0.4rem]  '>
                        <FaFilter />
                    </button>
                </div>
            </div>

            <div className="w-full grow flex rounded-[0.5rem]  ">
                <InternInfo />
            </div>

        </div>
    )
};

export default RightPart;