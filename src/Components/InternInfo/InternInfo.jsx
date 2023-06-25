import React from 'react';
import Timer from '../../../public/timer.svg';
import WalletMoney from '../../../public/wallet-money.svg';
import ProfileUser from '../../../public/profile-2user.svg';
import ClipboardClose from '../../../public/clipboard-close.svg';
import Ranking from '../../../public/ranking-1.svg';
import Location from '../../../public/location.svg';
import Calendar from '../../../public/calendar.svg';
import UserTick from '../../../public/user-tick.svg';


const InternInfo = () => {

    return (
        <div className='w-full h-full flex flex-col justify-start items-center rounded-[0.5rem] relative overflow-hidden bg-white '>

            <div className="w-full h-[15vh] relative flex ">
                <div className="w-[15%] h-full flex justify-center items-center ">
                    <img className='w-[50%] h-[50%] object-contain ' src="https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260" alt="company_logo" />
                </div>
                <div className="h-full grow flex flex-col justify-center  ">
                    <span className='text-[1.3rem] font-[700] '>Software Developer Intern</span>
                    <span className='text-[0.8rem] font-[700] '>Tata Consultancy Services Pvt Ltd</span>
                </div>
                <div className="absolute right-0 top-0 text-[1rem] text-blue-700 font-[700] px-[3rem] py-[0.5rem] rounded-bl-[10rem] bg-blue-100 ">IT Services</div>
            </div>

            <div className="w-[98%] flex flex-col justify-center items-start gap-y-[15px] mt-[2rem] ">
                <div className="w-full flex ">
                    <div className="w-[25%] pl-[10px] border-r-[2px] flex justify-start items-center gap-x-[5px] box-content border-gray-400 ">
                        <div className="grow flex justify-center items-center">
                            <img className='w-[90%] ' src={Timer} alt="logo" />
                        </div>
                        <div className="w-[80%] flex flex-col justify-center ">
                            <span className='text-[0.8rem] font-[700] '>3 Months</span>
                            <span className='text-[0.7rem] '>Duration</span>
                        </div>
                    </div>
                    <div className="w-[25%] pl-[10px] border-r-[2px] flex justify-start items-center gap-x-[5px] box-content border-gray-400 ">
                        <div className="grow flex justify-center items-center">
                            <img className='w-[90%] ' src={Ranking} alt="logo" />
                        </div>
                        <div className="w-[80%] flex flex-col justify-center ">
                            <span className='text-[0.8rem] font-[700] '>Intermediate</span>
                            <span className='text-[0.7rem] '>Experience</span>
                        </div>
                    </div>
                    <div className="w-[25%] pl-[10px] border-r-[2px] flex justify-start items-center gap-x-[5px] box-content border-gray-400 ">
                        <div className="grow flex justify-center items-center">
                            <img className='w-[90%] ' src={WalletMoney} alt="logo" />
                        </div>
                        <div className="w-[80%] flex flex-col justify-center ">
                            <span className='text-[0.8rem] font-[700] '>$20,000 - $30,000</span>
                            <span className='text-[0.7rem] '>Experience</span>
                        </div>
                    </div>
                    <div className="w-[25%] pl-[10px] flex justify-start items-center gap-x-[5px] box-content ">
                        <div className="grow flex justify-center items-center">
                            <img className='w-[90%] ' src={Location} alt="logo" />
                        </div>
                        <div className="w-[80%] flex flex-col justify-center ">
                            <span className='text-[0.8rem] font-[700] '>Noida</span>
                            <span className='text-[0.7rem] '>Location</span>
                        </div>
                    </div>
                </div>

                <hr className='w-[80%] ml-[2rem] border-[1px] border-black' />

                <div className="w-full flex ">
                    <div className="w-[25%] pl-[10px] border-r-[2px] flex justify-start items-center gap-x-[5px] box-content border-gray-400 ">
                        <div className="grow flex justify-center items-center">
                            <img className='w-[90%] ' src={Calendar} alt="logo" />
                        </div>
                        <div className="w-[80%] flex flex-col justify-center ">
                            <span className='text-[0.8rem] font-[700] '>9 Days Ago</span>
                            <span className='text-[0.7rem] '>Posted</span>
                        </div>
                    </div>
                    <div className="w-[25%] pl-[10px] border-r-[2px] flex justify-start items-center gap-x-[5px] box-content border-gray-400 ">
                        <div className="grow flex justify-center items-center">
                            <img className='w-[90%] ' src={ClipboardClose} alt="logo" />
                        </div>
                        <div className="w-[80%] flex flex-col justify-center ">
                            <span className='text-[0.8rem] font-[700] '>3 Days</span>
                            <span className='text-[0.7rem] '>Ends In</span>
                        </div>
                    </div>
                    <div className="w-[25%] pl-[10px] border-r-[2px] flex justify-start items-center gap-x-[5px] box-content border-gray-400 ">
                        <div className="grow flex justify-center items-center">
                            <img className='w-[90%] ' src={UserTick} alt="logo" />
                        </div>
                        <div className="w-[80%] flex flex-col justify-center ">
                            <span className='text-[0.8rem] font-[700] '>10</span>
                            <span className='text-[0.7rem] '>Open Positions</span>
                        </div>
                    </div>
                    <div className="w-[25%] pl-[10px] flex justify-start items-center gap-x-[5px] box-content ">
                        <div className="grow flex justify-center items-center">
                            <img className='w-[90%] ' src={ProfileUser} alt="logo" />
                        </div>
                        <div className="w-[80%] flex flex-col justify-center ">
                            <span className='text-[0.8rem] font-[700] '>327</span>
                            <span className='text-[0.7rem] '>Total Applicants</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full p-[1rem] mt-[2rem] min-h-[10vh] flex flex-wrap justify-start items-center gap-x-[1rem] gap-y-[1rem]  ">
                <span className='px-[15px] py-[5px] border-[1px] border-black text-[0.7rem] font-[700] rounded-[2rem]  '>JavaScript</span>
                <span className='px-[15px] py-[5px] border-[1px] border-black text-[0.7rem] font-[700] rounded-[2rem]  '>ReactJS</span>
                <span className='px-[15px] py-[5px] border-[1px] border-black text-[0.7rem] font-[700] rounded-[2rem]  '>ExpressJS</span>
                <span className='px-[15px] py-[5px] border-[1px] border-black text-[0.7rem] font-[700] rounded-[2rem]  '>Mongo DB</span>
                <span className='px-[15px] py-[5px] border-[1px] border-black text-[0.7rem] font-[700] rounded-[2rem]  '>Clean Architecture</span>
                <span className='px-[15px] py-[5px] border-[1px] border-black text-[0.7rem] font-[700] rounded-[2rem]  '>JavaScript</span>
                <span className='px-[15px] py-[5px] border-[1px] border-black text-[0.7rem] font-[700] rounded-[2rem]  '>ReactJS</span>
                <span className='px-[15px] py-[5px] border-[1px] border-black text-[0.7rem] font-[700] rounded-[2rem]  '>ExpressJS</span>
                <span className='px-[15px] py-[5px] border-[1px] border-black text-[0.7rem] font-[700] rounded-[2rem]  '>Mongo DB</span>
                <span className='px-[15px] py-[5px] border-[1px] border-black text-[0.7rem] font-[700] rounded-[2rem]  '>Clean Architecture</span>
            </div>

            <div className="w-full flex flex-col p-[1rem] ">
                <span className='text-[1rem] font-[700] '>About Us</span>
                <span className='text-[0.85rem] font-[500]  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cum, ut quia quam asperiores iste, expedita ipsam deleniti voluptatum beatae veniam architecto repellat dignissimos possimus nulla voluptatibus maxime dolore voluptas.
                    Porro perspiciatis numquam voluptates commodi amet? Magni accusamus, enim, dicta quis non doloribus saepe dignissimos a veritatis odit magnam odio amet similique ad at. Quam ratione quaerat aut quae quos?
                    A, ibusdam culpa doloremque suscipit. Veritatis fuga, rerum quaerat labore sapiente laborum modi iusto quae sit aperiam? Facere, quo! Accusamus reprehenderit est a ipsum minus? At fugiat veniam cupiditate sint temporibus.</span>
            </div>

            <div className="w-full flex flex-col p-[1rem] ">
                <span className='text-[1rem] font-[700] '>Requiments</span>
                <ul className='text-[0.85rem] font-[500] list-disc list-inside '>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero dolor odit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero dolor odit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero dolor odit.</li>
                </ul>
            </div>

            <div className="w-full flex flex-col p-[1rem] ">
                <span className='text-[1rem] font-[700] '>Resposibilities</span>
                <ul className='text-[0.85rem] font-[500] list-disc list-inside '>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero dolor odit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero dolor odit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero dolor odit.</li>
                </ul>
            </div>

            <div className="w-full h-[30vh] text-[1rem] font-[700] p-[1rem] flex justify-start items-center  ">
                Visit Website
            </div>


            <button className='px-[20px] py-[10px] fixed top-[80%] left-[60%] rounded-[2rem] text-[1.3rem] font-[700] text-white bg-blue-600 '>Apply now</button>

        </div>
    )
};

export default InternInfo;