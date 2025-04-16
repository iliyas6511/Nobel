import React, { useEffect, useRef } from 'react'
import { CiMap } from 'react-icons/ci'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { GiRotaryPhone } from 'react-icons/gi'
import { MdFacebook, MdOutlineMail } from 'react-icons/md'
import { TiSocialTwitter } from 'react-icons/ti'
import Topcard from './TopCard'
import { useLocation } from 'react-router-dom'

// const Topcard = () => {

//     return (
//         <>
//             <section className="relative block bg-scroll bg-center bg-no-repeat bg-cover py-[180px] overflow-hidden z-[1] before:absolute before:inset-0 before:bg-[rgba(120,40,40,0.5)] before:content-[''] before:-z-10"
//                 style={{ backgroundImage: "url('https://www.ajantamanufacturers.in/assets/images/backgrounds/page-header-bg.jpg')" }}>
//                 <div className=''></div>
//                 <div className="mx-auto px-[20px]">
//                     <div className="relative block text-center">
//                         <ul className="relative inline-block mb-[11px] pb-[12px] overflow-hidden before:absolute before:left-0 before:bottom-0  before:right-0 before:h-px before:bg-white before:content-['']">
//                             <li className='relative inline-block text-white text-[16px] leading-[24px] font-medium uppercase tracking-[0.1em] no-underline'><a href="#">Home</a></li>
//                             <li className='pl-[20px] relative inline-block text-white text-[16px] leading-[24px] font-medium uppercase tracking-[0.1em] no-underline'><a href="#">Products</a></li>
//                             <li className='pl-[20px] relative inline-block text-white text-[16px] leading-[24px] font-medium uppercase tracking-[0.1em] no-underline'>Tabletop Flour Mill Machines</li>
//                         </ul>
//                         <h2 className='text-white text-[50px] leading-[1em] tracking-[-0.04em] font-bold font-["Averia_Sans_Libre,cursive"] m-0'>Tabletop Flour Mill Machines</h2>
//                     </div>
//                 </div>
//             </section>


//         </>
//     )
// }

const ContactForm = () => {

    return (
        <>
            <section className="max-w-screensize mx-auto relative block bg-white py-[120px]">
                <div className="px-[15px]">
                    <div className="grid grid-cols-12 gap-8">

                        <div className="col-span-12 md:col-span-4">
                            <div className="relative max-w-[300px] block w-full">
                                <div className="relative block -mt-[7px] mb-[42px]">
                                    <span className="relative inline-block text-[14px] leading-[20px] font-medium uppercase tracking-[0.1em] text-lightGreen">Contact now</span>
                                    <h2 className="text-[50px] leading-[1em] font-bold tracking-[-0.04em] text-redSecondary">Get in Touch <br />with Us</h2>
                                </div>
                                <p className="text-darkGreen font-medium text-[18px] leading-[34px]">We are committed to providing our customers with
                                    exceptional service while offering our employees the best training.
                                </p>
                                <div className="relative block mt-[28px]">
                                    <ul className='relative flex gap-4 items-center'>
                                        <li className='relative inline-block mr-[5px]'>
                                            <span className=' inline-flex items-center justify-center w-[45px] h-[45px] rounded-full text-center bg-stdlightprimary text-stdprimary hover:text-red-950 hover:bg-red-200 transition-all duration-[200ms] delay-[100ms]'>
                                                <MdFacebook className='text-[22px]' />
                                            </span>
                                        </li>
                                        <li className='relative inline-block mr-[5px]'>
                                            <span className=' inline-flex items-center justify-center w-[45px] h-[45px] rounded-full text-center bg-stdlightprimary text-stdprimary hover:text-red-950 hover:bg-red-200 transition-all duration-[200ms] delay-[100ms]'>
                                                <TiSocialTwitter className='text-[22px]' />
                                            </span>
                                        </li>
                                        <li className='relative inline-block mr-[5px]'>
                                            <span className=' inline-flex items-center justify-center w-[45px] h-[45px] rounded-full text-center bg-stdlightprimary text-stdprimary hover:text-red-950 hover:bg-red-200 transition-all duration-[200ms] delay-[100ms]'>
                                                <FaInstagram className='text-[22px]' />
                                            </span>
                                        </li>
                                        <li className='relative inline-block mr-[5px]'>
                                            <span className=' inline-flex items-center justify-center w-[45px] h-[45px] rounded-full text-center bg-stdlightprimary text-stdprimary hover:text-red-950 hover:bg-red-200 transition-all duration-[200ms] delay-[100ms]'>
                                                <FaLinkedinIn className='text-[22px]' />
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            <div className="font-normal leading-[34px] text-[18px]">
                                <form className="" >
                                    <div className="grid grid-cols-12 gap-8">
                                        <div className="col-span-12 md:col-span-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Your name" name="name"
                                                    className='h-[70px] w-full border-none bg-[#f6f4ec] px-[30px] mb-[20px] rounded-[10px] outline-none text-[14px] text-[#727d73] font-normal capitalize' />
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6">
                                            <div className="">
                                                <input type="email" placeholder="Email address" name="email"
                                                    className='h-[70px] w-full border-none bg-[#f6f4ec] px-[30px] mb-[20px] rounded-[10px] outline-none text-[14px] text-[#727d73] font-normal capitalize' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-8">
                                        <div className="col-span-12 md:col-span-6">
                                            <div className="">
                                                <input type="text" placeholder="Phone number" name="phone"
                                                    className='h-[70px] w-full border-none bg-[#f6f4ec] px-[30px] mb-[20px] rounded-[10px] outline-none text-[14px] text-[#727d73] font-normal capitalize' />
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6">
                                            <div className="">
                                                <input type="text" placeholder="Subject" name="Subject"
                                                    className='h-[70px] w-full border-none bg-[#f6f4ec] px-[30px] mb-[20px] rounded-[10px] outline-none text-[14px] text-[#727d73] font-normal capitalize' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-12">
                                            <div className="">
                                                <textarea name="message" placeholder="Write message"
                                                    className='text-[14px] text-[#727d73] h-[190px] w-full bg-[#f6f4ec] resize-none px-[30px] pt-[18px] pb-[30px] border-none rounded-[10px] outline-none mb-[10px] font-normal capitalize'>

                                                </textarea>
                                            </div>
                                            <button type="submit" className="relative inline-block align-middle appearance-none border-none outline-none bg-[#f1cf69]
                                             text-[#334b35] text-[14px] font-bold  uppercase px-[50px] py-[18px] rounded-[10px] tracking-[0.1em] 
                                             transition-all duration-300 overflow-hidden cursor-pointer z-[1] hover:text-redtertiary hover:scale-[1.1]">Send a message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

const Address = () => {

    return (
        <>
            <section className="max-w-[1400px] mx-auto relative bg-white text-redprimary">
                <div className="w-full static px-[15px] mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">

                            <div className="relative flex flex-col lg:flex-row items-center gap-6 md:gap-2 bg-white shadow-[0px_10px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] mb-[-60px] z-[2] p-[60px_25px_60px] md:p-[60px_60px_60px]">
                                <div className="relative block pr-0 mb-6 md:mb-0 md:pr-[45px]">
                                    <h2 className='text-[28px] md:text-[30px] leading-[32px] md:leading-[40px] tracking-[-0.04em] font-bold text-center'>Get in Touch</h2>
                                </div>
                                <div className="relative block">
                                    <ul className='relative flex flex-col lg:flex-row items-center gap-16 md:gap-10'>
                                        <li className='group relative flex flex-col md:flex-row gap-2  items-center md:border-r border-[#eceae0] ml-[40px] pr-[40px] first:ml-0 lg:ml-[17px] lg:pr-[11px]'>
                                            <div className="relative flex items-center justify-center w-[50px] h-[50px] rounded-full text-center bg-red-500 group-hover:bg-red-800 text-white transition-all duration-[200ms] delay-[100ms]">
                                                <span className='flex items-center justify-center'><CiMap className="text-[26px]" /></span>
                                            </div>
                                            <div className="relative block leading-[0] lg:pl-[20px] space-y-2">
                                                <span className='text-darkGreen font-medium text-[16px] md:text-[13px] leading-[22px] block text-center md:text-left'>Visit Our Store</span>
                                                <p className='text-redprimary text-[18px] md:text-[15px] leading-[22px] font-bold'>
                                                    Mahalaxmi Complex, <br />
                                                    Near DCC Bank, <br />
                                                    Sangli-Miraj Road, <br />
                                                    Sangli - 416416. Maharashtra - India.</p>
                                            </div>
                                        </li>

                                        <li className='group relative flex flex-col md:flex-row items-center lg:border-r border-[#eceae0] ml-[40px] pr-[40px] first:ml-0 lg:ml-[17px] lg:pr-[11px]'>
                                            <div className="relative flex flex-col md:flex-row gap-2 items-center justify-center w-[50px] h-[50px] rounded-full text-center bg-red-500 group-hover:bg-red-800 text-white transition-all duration-[200ms] delay-[100ms]">
                                                <span className="inline-block"><MdOutlineMail className="text-[24px]" /></span>
                                            </div>
                                            <div className="relative block leading-[0] lg:pl-[20px]  space-y-2">
                                                <span className='text-darkGreen font-medium text-[16px] md:text-[13px] leading-[22px] block text-center md:text-left'>Send Email</span>
                                                <p className='text-redprimary text-[18px] md:text-[15px] leading-[22px] font-bold'>
                                                    <a href="mailto:mahalaxmiindustries555@gmail.com">mahalaxmiindustries555@gmail.com</a></p>
                                            </div>
                                        </li>

                                        <li className='group relative flex flex-col md:flex-row items-center lg:border-r border-[#eceae0] ml-[40px] pr-[40px] first:ml-0 lg:ml-[17px] lg:pr-[11px]'>
                                            <div className="relative flex flex-col md:flex-row items-center justify-center w-[50px] h-[50px] rounded-full text-center bg-red-500 group-hover:bg-red-800 text-white transition-all duration-[200ms] delay-[100ms]">
                                                <span className="flex justify-center items-center"><GiRotaryPhone className="text-[24px]" /></span>
                                            </div>
                                            <div className="relative block leading-[0] lg:pl-[20px] space-y-2">
                                                <span className='text-darkGreen font-medium text-[16px] md:text-[13px] leading-[22px] block text-center md:text-left'>Call :</span>
                                                <p className='text-redprimary text-[18px] md:text-[15px] leading-[22px] font-bold text-center'>
                                                    <a href="tel:+918055599991">0233 2325064 / 65,<br />+918055599991</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

const Address1 = () => {
    return (
        <section className="max-w-[1400px] mx-auto bg-white text-darkGreen px-4 py-8">
            <div className="flex flex-col items-center bg-white shadow-[0px_10px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] p-6 md:p-10">
                {/* Heading */}
                <h2 className="text-[24px] md:text-[30px] leading-[32px] md:leading-[40px] tracking-[-0.04em] font-bold text-center mb-6">
                    Get in Touch
                </h2>

                {/* Contact Info List */}
                <ul className="flex flex-col gap-6 w-full">
                    {/* Address */}
                    <li className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#6d8c54] text-white transition-all duration-200">
                            <CiMap className="text-[24px]" />
                        </div>
                        <div className="text-center sm:text-left">
                            <span className="text-[#687469] text-[13px] leading-[22px] block">Visit Our Store</span>
                            <p className="text-[#334b35] text-[16px] md:text-[15px] leading-[22px] font-bold">
                                Mahalaxmi Complex, <br />
                                Near DCC Bank, <br />
                                Sangli-Miraj Road, <br />
                                Sangli - 416416. Maharashtra - India.
                            </p>
                        </div>
                    </li>

                    {/* Email */}
                    <li className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#6d8c54] text-white transition-all duration-200">
                            <MdOutlineMail className="text-[24px]" />
                        </div>
                        <div className="text-center sm:text-left">
                            <span className="text-[#687469] text-[13px] leading-[22px] block">Send Email</span>
                            <p className="text-[#334b35] text-[16px] md:text-[15px] leading-[22px] font-bold">
                                <a href="mailto:info.ajantaflourmill@gmail.com">info.ajantaflourmill@gmail.com</a>
                            </p>
                        </div>
                    </li>

                    {/* Phone */}
                    <li className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#6d8c54] text-white transition-all duration-200">
                            <GiRotaryPhone className="text-[24px]" />
                        </div>
                        <div className="text-center sm:text-left">
                            <span className="text-[#687469] text-[13px] leading-[22px] block">Call:</span>
                            <p className="text-[#334b35] text-[16px] md:text-[15px] leading-[22px] font-bold">
                                <a href="tel:+917016365405">+91 70163 65405</a>, <br className="sm:hidden" />
                                <a href="tel:+919173490848">91734 90848</a>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};


const LocationComp = () => {

    return (
        <>
            <section className='max-w-full mx-auto '>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3818.339847202373!2d74.5712976!3d16.8590749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1186bbf9f342d%3A0x30741aaf25ec46c7!2smahalaxmi%20atta%20chakki!5e0!3m2!1sen!2sin!4v1744193638257!5m2!1sen!2sin" className='w-full h-[600px] border-none' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

        </>
    )
}

const ContactUs = () => {
    const contactFormRef = useRef(null); // Create ref for ContactForm
    const location = useLocation();

    // Scroll to ContactForm if URL has #contact-form
    useEffect(() => {
        if (location.hash === "#contact-form" && contactFormRef.current) {
            contactFormRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location.hash]);


    return (
        <>
            <Topcard />
            <div ref={contactFormRef} id='contact-form'>
                <ContactForm />
            </div>
            <Address />
            <LocationComp />


        </>
    )
}

export default ContactUs
