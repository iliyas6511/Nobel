// import React from 'react'
// import { IoMenu } from 'react-icons/io5'
// import { MdOutlineMail } from 'react-icons/md'



// const Navbar = () => {

//   const Navmenu = [
//     {
//       id: 1,
//       name: "Home",
//       path: "/"
//     },
//     {
//       id: 2,
//       name: "Product",
//       path: "/"
//     },
//     {
//       id: 3,
//       name: "About Us",
//       path: "/"
//     },
//     {
//       id: 4,
//       name: "Contact",
//       path: "/"
//     },
//     {
//       id: 5,
//       name: "Downloads",
//       path: "/"
//     },
//   ]

//   return (
//     <>
//       <section className='Navbar'>
//         <div className='px-[20px] py-[16px] lg:px-[8rem] lg::py-[20px] flex items-center  lg:gap-[100px]'>

//           <button className='inline-block lg:hidden'>
//             <IoMenu className='text-[26px]' />
//           </button>

//           <div className='inline-flex items-center justify-center'>
//             <img src="src\assets\mahalaxmilogo.png" alt="logo" className='h-[40px] md:h-[75px] min-w-[200px] flex-[1_1_0%]' />
//           </div>

//           <div>
//             <ul className='lg:flex items-center justify-center gap-10 hidden'>
//               {Navmenu.map((menu) => (
//                 <>
//                   <li>
//                     <p className='text-[22px] font-medium text-blackText hover:text-redprimary whitespace-nowrap'>
//                       {menu.name}
//                     </p>
//                   </li>

//                 </>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <button className='lg:flex items-stretch hidden '>
//               <div className='bg-redprimary px-3 py-2 '>
//                 <MdOutlineMail className='text-[29px] text-white' />
//               </div>
//               <div className=' px-8 text-blackText hover:text-redprimary text-[22px] font-medium bg-gray-100 py-2'>
//                 <p className='whitespace-nowrap'>Send Enquiry</p>
//               </div>
//             </button>
//           </div>


//         </div>

//         <div className='sidebar lg:hidden fixed left-0 top-[50px] bottom-0 bg-gray-600 h-[100vh] w-[50%]'>
//           <h1>iliyas</h1>


//         </div>

//       </section>

//     </>
//   )
// }

// export default Navbar

import { useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import mlxmBigLogo from "../assets/Images/Logo_mahalaxmi.png"
import mlxmSmallLogo from "../assets/Images/logo-retail.png"
const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const sidebarRef = useRef(null);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const Navmenu = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "Product",
      path: "/products"
    },
    {
      id: 3,
      name: "About Us",
      path: "/about-us"
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact-us"
    },
    {
      id: 5,
      name: "Downloads",
      path: "/downloads"
    },
  ]

  const [activeMenu, setActiveMenu] = useState(Navmenu[1])

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true); // Add shadow when scrolled
      } else {
        setIsScrolled(false); // Remove shadow when at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white  lg:py-9 py-5 w-full transition-shadow duration-500 ${isScrolled ? " shadow-[0_0_12px_5px_rgba(255,75,75,0.3)]" : "shadow-none"}`}>
      <div className="max-w-screensize py-0 px-[20px] mx-auto flex justify-between items-center">
        <a href="/" className='flex-shrink-0'>
          <img src={mlxmBigLogo} alt='logo' className='max-w-[100%] h-auto' />

        </a>
        <div className="xl:block hidden">
          <ul className="flex xl:flex-row flex-col xl:gap-9 gap-6 xl:items-center">
            {Navmenu.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `rounded-full font-semibold text-[15px] py-1.5 px-2.5 ${isActive ? "bg-red-100 text-redprimary" : "text-[#111c2d]"
                    } hover:text-redprimary`
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
            
          </ul>
        </div>
        <NavLink to={"/contactus"} type="button" className="group relative items-stretch justify-center p-0.5 text-center rounded-full font-bold xl:flex hidden
         bg-redprimary hover:bg-primaryemphasis text-white shadow-[0_4px_12px_rgba(255,75,75,0.6)]" >

          <span className="flex items-center gap-2 transition-all duration-150 justify-center rounded-md px-4 py-2 text-sm">
            <MdOutlineMail className='text-[22px]' />Send Enquiry</span>

        </NavLink>
        {/* <button className='lg:flex items-stretch hidden '>
             <div className='bg-redprimary px-3 py-2 '>
                <MdOutlineMail className='text-[29px] text-white' />
              </div>
             <div className=' px-8 text-blackText hover:text-redprimary text-[22px] font-medium bg-gray-100 py-2'>
               <p className='whitespace-nowrap'>Send Enquiry</p>
             </div>
             </button> */}
        <div className="xl:hidden flex">
          <button type="button" className="group relative p-0.5 text-center font-medium flex 
                      items-center justify-center text-[#111c2d] h-10 w-10 rounded-full bg-transparent hover:bg-[#00a1ff20]"
            onClick={toggleSidebar}>
            <span className="flex items-center gap-2 transition-all duration-150 justify-center rounded-md px-4 py-2 text-sm ">
              <CiMenuBurger className='text-[20px] font-bold ' />
            </span>
          </button>
        </div>
        <div
          ref={sidebarRef}
          className={`fixed z-40 overflow-y-auto bg-white dark:bg-darkgray p-0 transition-transform left-0 top-0 w-80 h-full ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          style={{ width: "70vw" }}>
          <div className="p-6 relative">
            <div className="mb-6 flex justify-between items-center">
              <a href="/">
                <img src={mlxmBigLogo} alt='' className='' />
              </a>
              <button onClick={() => setSidebarOpen(false)} className=" flex items-center justify-center mr-[-20px] text-gray-400 border-red-300 border-[0.5px] rounded-full p-1 ">
                <span><RxCross1 className="text-[19px]" /></span>
              </button>
            </div>
            <ul className="flex xl:flex-row flex-col xl:gap-9 gap-6 xl:items-center">
              {Navmenu.map((menu) => (
                <>
                  <li key={menu.id} className="w-full">
                    <NavLink to={menu.path}
                      className={({ isActive }) =>
                        `block rounded-full w-full font-semibold text-[15px] py-1.5 px-2.5  ${isActive ? "bg-red-100 text-redprimary" : ""}
                       hover:text-redprimary`
                      }>
                      {menu.name}
                    </NavLink>
                  </li>
                </>
              ))}
            </ul>
            <NavLink to={"/contactus"} type="button" className="group relative flex items-stretch justify-center p-0.5 text-center rounded-lg font-bold w-full mt-6" >
              <span className="flex items-center gap-2 transition-all duration-150 justify-center rounded-md px-4 py-2 text-gray-400 text-sm">Send Enquiry</span>
              </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}


export default Header