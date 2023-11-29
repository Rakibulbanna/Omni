"use client"
import React, { useState } from 'react';
import grid_image_1 from '../../../public/grid_img_1.svg';
import grid_image_2 from '../../../public/grid_img_2.svg';
import grid_image_3 from '../../../public/grid_img_3.svg';
import brand_logo_1 from '../../../public/brand_logo_1.svg';
import brand_logo_2 from '../../../public/brand_logo_2.svg';
import brand_logo_3 from '../../../public/brand_logo_3.svg';
import brand_logo_4 from '../../../public/brand_logo_4.svg';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import ReactPlayer from 'react-player';

const navContContent = ['Products', 'Solutions', 'Service', 'Help Center', 'Pricing'];
const footerContent = ['Terms', 'Privacy', 'Support', 'About', 'Resources', 'Contact'];

const LandingPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>

            {/* navigation bar */}
            <nav className="flex items-center justify-between flex-wrap p-4 border-b">
                <div className="flex items-center flex-shrink-0 mr-6 lg:mr-72">
                    <a href='#' className=' font-sans font-bold text-2xl pl-2'>magnifico</a>

                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                    >
                        <svg
                            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                        <svg
                            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`w-full block flex-grow lg:flex lg:items-center  lg:w-auto ${isOpen ? "block" : "hidden"}`}
                >
                    <div className=" lg:flex-grow md:space-x-6">
                        {
                            navContContent.map((nav, index) => {
                                if (nav == 'Pricing') {
                                    return <a key={index} href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                                        {nav}
                                    </a>
                                }
                                return <a key={index} href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                                    <div className=' flex'>
                                        <h2>{nav}</h2>
                                        <div className=' p-1'><IoIosArrowDown /></div>
                                    </div>
                                </a>
                            }

                            )
                        }
                    </div>
                    <div className=' flex justify-center space-x-10 sm:space-x-6'>
                        <button className=' text-blue-500'>Log in</button>
                        <button className='  rounded-full bg-blue-500 text-white p-3 flex text-center'>Sign up Free <span className=' pt-1 pl-2'><AiOutlineArrowRight /></span></button>
                    </div>
                </div>
            </nav>

            {/* section-1  */}
            <section className=' grid sm:grid-cols-2 ga grid-cols-1 h-max p-12  '>
                <div className='  flex flex-col space-y-4 justify-center p-4 gap-4'>

                    <div className=' flex gap-2 flex-col space-y-3'>
                        <h1 className=' font-bold text-5xl pr-24'>Team projects, done well</h1>
                        <p>
                            The only platform that gives your team all the tools needed to work together on their awesome projects.
                        </p>
                    </div>

                    <label className=' grid grid-cols-2 sm:flex justify-start gap-4'>

                        <input type="email" className=' block border border-gray-300'
                            placeholder='    Enter work email'
                        />
                        <button className='rounded-lg bg-blue-500 text-white p-3 flex'>Sign up Free <span className=' pt-1 pl-2'><AiOutlineArrowRight /></span></button>
                    </label>

                    <div className=' sm:flex flex-wrap gap-2 space-x-2 grid grid-cols-2 bg-gray-300 rounded-md p-2'>
                        <Image src={brand_logo_1} alt='brand_logo_1' />
                        <Image src={brand_logo_2} alt='brand_logo_2' />
                        <Image src={brand_logo_3} alt='brand_logo_3' />
                        <Image src={brand_logo_4} alt='brand_logo_4' />
                    </div>

                </div>

                <div className=' h-auto'>
                    <div className="aspect-video p-4">
                        <ReactPlayer
                            style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                            }}
                            url={'https://www.twitch.tv/lord_kebun'}
                            playing={false}
                            controls
                            volume={1}
                            height={'100%'}
                            width={'100%'}
                        />

                    </div>

                </div>

            </section>
            {/* section-2  */}
            <section className=' grid sm:grid-cols-2 grid-cols-1 gap-4 h-max p-12  '>

                <div className=' grid grid-cols-3  '>
                    <div className=' pt-20'>
                        <Image src={grid_image_1} alt="myImage" />
                    </div>
                    <div className=' pb-20'>
                        <Image src={grid_image_2} alt="myImage" />
                    </div>
                    <div className=' pt-20'>
                        <Image src={grid_image_3} alt="myImage" />
                    </div>
                </div>

                <div className=' flex items-center'>
                    <div className=' md:p-11 sm:p-6 sm:h-2/3 h-auto flex flex-col justify-between items-start   '>

                        <h1 className=' font-bold text-3xl'>Enjoy your time working</h1>
                        <p>
                            Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.
                        </p>
                        <div className=' text-blue-700 flex'>
                            See how it helped others <span className=' pt-1 pl-4'><AiOutlineArrowRight /></span>
                        </div>
                    </div>
                </div>


            </section>

            {/* section-3  */}
            <section className=' grid sm:grid-cols-2 grid-cols-1 gap-1 h-max p-12  '>

                <div className=' flex items-center'>
                    <div className=' md:p-11 sm:p-6 h-auto flex flex-col justify-between items-start   '>

                        <h1 className=' font-bold text-3xl'>Get all the tools your team needs</h1>
                        <p>
                            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
                        </p>
                        <div className=' text-blue-700 flex'>
                            Check the tools <span className=' pt-1 pl-4'><AiOutlineArrowRight /></span>
                        </div>
                    </div>
                </div>

                <div className=' md:pl-16 flex items-center  '>
                    <RadarChart
                        captions={{
                            // columns
                            battery: "Battery Capacity",
                            design: "Design",
                            useful: "Usefulness",
                            speed: "Speed",
                            weight: "Weight",
                        }}
                        data={[
                            // data
                            {
                                data: {
                                    battery: 0.7,
                                    design: 1,
                                    useful: 0.9,
                                    speed: 0.67,
                                    weight: 0.8,
                                },
                                meta: { color: "#9333EA" },
                            },
                            {
                                data: {
                                    battery: 1,
                                    design: 0.6,
                                    useful: 0.8,
                                    speed: 0.9,
                                    weight: 0.7,
                                },
                                meta: { color: "#cc333f" },
                            },
                            {
                                data: {
                                    battery: 0.8,
                                    design: 0.7,
                                    useful: 0.6,
                                    speed: 0.8,
                                    weight: 0.6,
                                },
                                meta: { color: "#9333EA" },
                            },
                        ]}
                        options={{
                            dots: true,
                            axes: true
                        }}
                        size={450}

                    />
                </div>

            </section>
            {/* section-4  */}
            <section className=' md:p-12 sm:p-8 '>
                <div className='    bg-gradient-to-r from-indigo-500 via-purple-500 rounded-xl'
                    style={{
                        zIndex: -1,
                        background: `url("https://s3-alpha-sig.figma.com/img/1f80/6885/c15ddef9bdc406ecdc84d5a443ed8054?Expires=1691366400&Signature=TkNgzQMSjWQ-6XOLxq1ULXV-wO8W7NMqXOr1blwkHJpMjGFszqZkvi4jwRVYbb5E8UrtW27wCRPXjLzhjlaiXn-Ud2hNy06MtW4ndFrwzAbpOq0wpuiK6n8WLXNRoNHg4P60fYor7QpNXtomwUXehOg-nMAyd3Z5ouA0jBoRrp65GevQoUWQNiiszWXeIlpvUyP7MlcWy8Na0HWecPUP9wROo9QGS970t9eRdF8KxlMlLFnR5YlOome5sR9C34LPDixHHwOq6OTs8NrShX6rVhZAJsY2lN-72sFoMe3gVsm3wuuyoOm5qUyLlTuGeGiGMiMaLooBUOFT9GaFFGpJIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4") 0 0 repeat`,
                        // transform: 'rotate(90deg)',
                        backgroundColor: 'purple',
                    }}>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-2 h-max p-12 bg-gradient-to-l from-indigo-500 via-purple-500 text-white'>
                        <div className=' flex items-center '>
                        </div>
                        <div className=' flex items-center '>


                            <div className=' md:p-11 h-auto flex flex-col justify-between items-start space-y-4   '>

                                <h1 className=' font-bold text-3xl'>Problems come and get solved with ease</h1>
                                <p>
                                    Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
                                </p>
                                <div className=' flex'>
                                    See how it helped others <span className=' pt-1 pl-4'><AiOutlineArrowRight /></span>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* section-5  */}
            <section className=' grid sm:grid-cols-2 gap-6 grid-cols-1 h-max md:p-24 p-8  '>
                <div className='  flex flex-col space-y-4 justify-center p-4 gap-4'>

                    <div className=' flex gap-2 flex-col space-y-3'>
                        <h1 className=' font-bold text-5xl pr-24'>Improve workflow</h1>
                        <p>
                            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
                        </p>
                    </div>
                    <div >
                        <div className=' grid grid-cols-3 border border-gray-300'>
                            <a className=' border border-gray-300 text-center bg-gray-200' href="#">Research</a>
                            <a className=' border border-gray-300 text-center' href="#">Plan</a>
                            <a className=' border border-gray-300 text-center' href="#">Design</a>
                        </div>


                    </div>


                    <div className=' flex items-center '>
                        <div className=' h-auto flex flex-col justify-between items-start space-y-6 '>
                            <p>
                                Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
                            </p>
                            <div className=' flex text-blue-700'>
                                See how it helped others <span className=' pt-1 pl-4'><AiOutlineArrowRight /></span>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='p-4' >

                    <ReactPlayer
                        style={{
                            borderRadius: '20px',
                            overflow: 'hidden'
                        }}
                        url={'https://www.youtube.com/embed/SneCkM0bJq0'}
                        playing={false}
                        controls
                        volume={1}
                        height={'73%'}
                        width={'100%'}
                    />

                </div>

            </section>

            {/* section-6  */}
            <section className=' md:p-12 '>
                <div className='    bg-gradient-to-r from-blue-800 via-purple-700 to-purple-900 rounded-xl text-center text-white flex flex-col items-center space-y-6 p-6'
                >

                    <h1 className='font-bold text-4xl '>Join the community today</h1>
                    <p>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>

                    <button className='rounded-lg bg-blue-500 text-white p-3 flex'>Sign up Free <span className=' pt-1 pl-2'><AiOutlineArrowRight /></span></button>


                </div>
            </section>

            {/* footer  */}
            <footer className=' grid grid-cols-1 md:grid-cols-2 p-6 '>
                <div className=' flex flex-wrap h-auto place-content-center gap-x-3'>
                    <h1 className=' font-sans font-bold text-sm'>magnifico</h1>
                    <p className=' text-sm'>@ 2023. All rights reserved.</p>
                </div>
                <div className=' flex flex-wrap h-auto place-content-center'>
                    <div className=' grid sm:grid-cols-6 grid-cols-4 h-24 place-content-center sm:space-x-2'>

                        {
                            footerContent.map((footer, index) =>
                                <a href='#' key={index} >
                                    {footer}
                                </a>
                            )
                        }
                    </div>

                </div>
            </footer>
        </React.Fragment >
    );
};

export default LandingPage;