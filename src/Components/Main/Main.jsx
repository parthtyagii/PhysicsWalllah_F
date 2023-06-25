import React from 'react';
import LeftPart from '../LeftPart/LeftPart';
import RightPart from '../RightPart/RightPart';




const Main = () => {
    
    return (
        <div className='w-full h-[150vh] p-[2rem] flex '>
            <LeftPart />
            <RightPart />
        </div>
    )
};

export default Main;