import React from 'react';
import Intern from '../Intern/Intern';





const LeftPart = () => {

    return (
        <div className='w-[32%] flex flex-col justify-start items-center gap-y-[1rem] '>

            <div className="w-full h-[9vh] p-[0.3rem] rounded-[0.5rem] grid grid-cols-3 bg-white ">
                <button className='w-full h-full rounded-[0.5rem] text-[1rem] text-white font-[700] bg-blue-600  '>Popular</button>
                <button className='w-full h-full rounded-[0.5rem] text-[1rem] text-blue-600 font-[700]   '>Newest</button>
                <button className='w-full h-full rounded-[0.5rem] text-[1rem] text-blue-600 font-[700]   '>Bookmarks</button>
            </div>

            <div className="w-full grow flex flex-col justify-start items-center gap-y-[1rem] overflow-y-auto ">
                <Intern />
                <Intern />
                <Intern />
            </div>

        </div>
    )
};

export default LeftPart;