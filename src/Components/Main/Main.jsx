import React from 'react';
import LeftPart from '../LeftPart/LeftPart';
import RightPart from '../RightPart/RightPart';




const Main = () => {
    
    return (
        <div className='w-full min-h-[100vh] p-[2rem] flex gap-x-[2rem] '>
            <LeftPart />
            <RightPart />
        </div>
    )
};

export default Main;