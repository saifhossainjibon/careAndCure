import React from 'react';
import './ContactUs.css'
import chat from '../../utilities/chatting.png'
import home from '../../utilities/home.png'
import phone from '../../utilities/phone-call.png'
const ContactUs = () => {
    // const map = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d31626.74429747373!2d110.37743510214847!3d-7.753393492723715!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1421902046899`
    return (
        <div >
            <div className='contact-us my-4'>
                <h1 className='text-4xl font-bold mx-24'>Contact Us</h1>
            </div>
            <div className='md:grid grid-rows-2 grid-flow-col gap-4 container mx-auto'>
                <div className='row-span-2'>
                    <div className="flex flex-col items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 ">
                        <img className="object-cover w-16 rounded-t-lg md:h-auto md:w-12 md:rounded-none md:rounded-l-lg" src={home} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Dhaka, Bangladesh</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Bashundhara Residential Area</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100">
                        <img className="object-cover w-16 rounded-t-lg md:h-auto md:w-12 md:rounded-none md:rounded-l-lg" src={phone} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">00 (440) 9865 562</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Mon to Fri 9am to 6 pm</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 ">
                        <img className="object-cover w-16 rounded-t-lg md:h-auto md:w-12 md:rounded-none md:rounded-l-lg" src={chat} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">support@c&c.com</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Send us your query anytime</p>
                        </div>
                    </div>
                    {/* <iframe src={map} width="600" height="450" frameBorder="0" style={{ border: "0px", pointerEvents: "none" }}></iframe> */}
                </div>
                <div className='row-span-4'>
                    <form className='w-9/12	mx-auto'>
                        <div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div className="grid xl:grid-cols-2 xl:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave Your message..."></textarea>
                        </div>
                        <button className='submit-btn my-3'>submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;