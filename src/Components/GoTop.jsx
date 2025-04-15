import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import getPrice from "../assets/Images/get-price-gif.gif"

const GoTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Smooth scrolling
        });
      };

    return (
        
            <div className='fixed bottom-0 right-0 z-[2]'>
                <div className="absolute left-1/2 -translate-x-[100%] md:-translate-x-[0%] md:left-0 md:-ml-[50px] bottom-2 md:bottom-0  mt-0 h-[39px] leading-[40px] w-[50px] bg-[#474747] 
                 overflow-hidden text-white text-center 
                whitespace-nowrap  transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center"
                onClick={scrollToTop}>
                    <span className='flex items-center justify-center w-full h-full'><IoIosArrowUp className='text-[24px]'/></span>
                </div>
                <div className="hidden md:block h-[39px] w-[199px] outline-none">
                    <a href="#" className='text-white no-underline outline-none'>
                        <img src={getPrice} />
                    </a>
                </div>
            </div>
        
    )
}

export default GoTop

// import React from 'react';
// import { IoIosArrowUp } from 'react-icons/io';
// import getPriceGif from '../assets/Images/get-price-gif.gif'; // Adjust path

// const GoTop = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div className="fixed bottom-0 right-0 z-[2]">
//       <div
//         className="absolute left-1/2 -translate-x-[100%] md:left-0 md:-ml-[50px] bottom-2 md:bottom-0 
//         h-[39px] leading-[40px] w-[50px] bg-[#474747] overflow-hidden text-white text-center 
//         whitespace-nowrap transition-all duration-300 ease-in-out cursor-pointer 
//         flex items-center justify-center"
//         onClick={scrollToTop}
//       >
//         <span className="flex items-center justify-center w-full h-full">
//           <IoIosArrowUp className="text-[24px]" />
//         </span>
//       </div>
//       <div className="hidden md:block h-[39px] w-[199px] outline-none">
//         <a href="#" className="text-white no-underline outline-none">
//           <img src={getPriceGif} alt="Get Price" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default GoTop;
