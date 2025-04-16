import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoMail } from "react-icons/io5"

import mlxmBigLogo from "../assets/Images/Logo_mahalaxmi.png"

const Footer = () => {

    return (
      <>
        <div className='bg-[#2c2c2c]  '>
          <section className='max-w-screensize mx-auto py-[30px] text-center text-[#acacac]'>
  
            <div className="flex flex-col ">
              <div className="max-w-[566px] mx-auto mb-[26px] flex flex-col items-center md:flex-row ">
                <div className="md:border-r border-[rgb(63,62,62)] md:pr-[30px] md:mr-[30px] float-left">
                  <img src={mlxmBigLogo} className='max-w-full h-[70px] border-none aspect-auto' />
                </div>
                <div className="pt-[15px] pb-[15px] text-[16px] md:float-left flex items-center">
                  <i className="pr-[10px] inline-block text-[14px] leading-[1] text-[rgb(249,69,69)] font-normal">
                    <IoMail className='text-[22px]' />
                  </i>
                  <a href="mailto:mahalaxmiindustries555@gmail.com" className='text-[#d6d6d6] hover:text-[rgb(249,69,69)] text-[18px] no-underline bg-transparent transition-all duration-300 ease-in-out outline-none'>mahalaxmiindustries555@gmail.com</a>
                </div>
              </div>
              <p className='text-center text-[16px]  mb-[10px] flex max-sm:flex-col max-sm:gap-2 !items-center justify-center'>
                <i className="md:pr-[8px] inline-block text-[14px] leading-[1] text-[rgb(249,69,69)] font-normal">
                  <FaLocationDot className='text-[28px] md:text-[19px]'/>
              </i> Mahalaxmi Complex, Near DCC Bank, Sangli-Miraj Road, Sangli - 416416. Maharashtra - India. </p>
              <p className='text-center text-[16px]  mb-[10px]'><i className="fa fa-phone"></i><a href="tel:0233 2325064">0233 2325064 / 65</a></p>
              <div className='flex items-center justify-center gap-1.5 max-sm:mt-4'>
                <a href="#" className="px-[5px] text-[18px]">
                  <i className="inline-block text-[rgb(249,69,69)] text-[14px] leading-[1] font-normal"><FaFacebookF className='text-[22px]' /></i>
                </a>
                <a href="#" className="px-[5px] text-[18px]">
                  <i className="inline-block text-[rgb(249,69,69)] text-[14px] leading-[1] font-normal"><FaInstagram className='text-[22px]' /></i>
                </a>
                <a href="#" className="px-[5px] text-[18px]">
                  <i className="inline-block text-[rgb(249,69,69)] text-[14px] leading-[1] font-normal"><FaLinkedinIn className='text-[22px]' /></i>
                </a>
              </div>
              <div className="border-t border-[rgb(63,62,62)] mt-[2.6%] pt-[12px] text-[12px]t">
                © <script type="text/javascript">document.write(new Date().getFullYear());</script>
                2025 Mahalaxmi Industries &amp; Ltd  All Rights Reserved.<br/>
                Web Designed by Nobletech All Rights Reserved.
              </div>
            </div>
  
          </section>
        </div>
      </>
    )
  }

  export default Footer