import React from 'react'
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { GiArrowWings, GiGrowth } from 'react-icons/gi'
import { IoMail } from 'react-icons/io5'
import { PiGoggles } from 'react-icons/pi'

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


const WhatweDo = () => {

    return (
        <>
            <section className='max-w-screensize mx-auto py-12 md:py-16 px-4'>
                <div>
                    <h2 className='text-[32px] md:text-[40px] font-semibold text-redtertiary uppercase mb-[15px] pt-0 mt-[10px]'>What We Do</h2>
                    <p className='leading-[1.8em] text-darkGreen text-[18px] md:text-[24px] mb-[10px]'>
                        We manufacture and expert flour milling equipment of single machines and flour production line, also
                        storage silos for grain and flour. We provide all kinds of equipment for grain flour and semolina milling machine,
                        raw materials are at a wide range, they can deal with wheat, maize, rice, cassava, sorghum, bean and other grains.We also
                        provide evaluation and design according to our customers’ needs. Turn-key flour milling plant is our features and pursuits.</p>

                    <p className='text-center mb-[10px]'>
                        &nbsp;</p>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-14">
                    <div className="rounded-4xl overflow-hidden">
                        <img alt="We produce single machine" src="https://www.flourmiller.com//uploads/We-produce-single-machine.jpg" className='w-full h-full align-middle border-none object-cover' />
                    </div>
                    <div className="rounded-4xl overflow-hidden">
                        <img alt="We manufature flour milling plant" src="https://www.flourmiller.com//uploads/We-manufacture-flour-mill-plant.jpg" className='w-full h-full align-middle object-cover border-none' /></div>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-14 mt-14">
                    <div className="rounded-4xl overflow-hidden">
                        <img alt="We produce single machine" src="https://www.flourmiller.com//uploads/We-produce-single-machine.jpg" className='w-full h-full align-middle border-none object-cover' />
                    </div>
                    <div className="rounded-4xl overflow-hidden">
                        <img alt="We manufature flour milling plant" src="https://www.flourmiller.com//uploads/We-manufacture-flour-mill-plant.jpg" className='w-full h-full align-middle object-cover border-none' /></div>
                </div>

            </section>

        </>
    )
}

const ChooseUs = () => {

    return (
        <>
            <div className='bg-red-50'>
                <section className='max-w-screensize mx-auto py-16'>

                    <div className='px-[15px] w-full'>

                        <div className="mx-auto">
                            <div className="w-full">
                                <div className="relative text-center">
                                    <div className="relative">
                                        <div className="text-[22px] md:text-[26px] leading-[40px] font-bold pb-[10px] underline text-redtertiary ">Why Choose Us</div>
                                        <h2 className="text-[36px] md:text-[46px] leading-[50px] font-bold pb-[10px] text-red-950 ">Our Company</h2>
                                    </div>

                                    <div className="pb-[20px]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6 md:gap-10">
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
                                <div className="relative overflow-hidden h-[274px] rounded-[12px]">
                                    <img src="https://www.mycrofine.com/assets/images/icons/ps-1.jpg" className="object-cover rounded-[12px] w-full" alt="image" />
                                </div>

                                <div className="pb-[20px]"></div>

                                <div className="relative text-center bg-white px-[35px] py-[40px] rounded-[10px]">
                                    <div className="relative ">
                                        <div className="relative mb-[20px] flex justify-center">
                                            <span className="text-[60px] md:text-[80px] leading-[80px] text-redtertiary">
                                                <GiArrowWings />
                                            </span>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className='text-[24px] md:text-[28px] leading-[38px] font-semibold text-red-950'>
                                                <a href="">Mission Statement</a></h3>
                                            <p className='text-[16px] md:text-[18px] font-medium text-darkGreen '>Profitable growth through superior Customer Service, Innovation, Quality and Commitment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
                                <div className="relative text-center bg-white px-[35px] py-[40px] rounded-[10px] shadow-[var(--box-shadow)]">
                                    <div className="relative">
                                        <div className="relative mb-[20px] flex justify-center">
                                            <span className="text-[60px] md:text-[80px] leading-[80px] text-redtertiary">
                                                <GiGrowth />
                                            </span>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className='text-[24px] md:text-[28px] leading-[38px] font-semibold text-red-950'>
                                                <a href="">Why People Choose</a></h3>
                                            <p className='text-[16px] md:text-[18px] leading-[28px] font-medium text-darkGreen'>People choose Mycrofine Aata Chakki for several compelling reasons , making it their preferred choice for atta (flour) grinding.</p>
                                            <ul className='my-[30px] mb-[35px] p-0 text-[16px] md:text-[18px] leading-[28px] text-darkGreen font-medium'>
                                                <li className='text-left list-none pl-[20px] relative mb-[10px] flex items-center gap-2'>
                                                    <span><FaArrowRight /></span>
                                                    <span>Superior Quality</span>
                                                </li>
                                                <li className='text-left list-none pl-[20px] relative mb-[10px] flex items-center gap-2'>
                                                    <span><FaArrowRight /></span>
                                                    <span>Freshness and Nutrition</span>
                                                </li>
                                                <li className='text-left list-none pl-[20px] relative mb-[10px] flex items-center gap-2'>
                                                    <span><FaArrowRight /></span>
                                                    <span>Convenience and Hygiene</span>
                                                </li>
                                                <li className='text-left list-none pl-[20px] relative mb-[10px] flex items-center gap-2'>
                                                    <span><FaArrowRight /></span>
                                                    <span>Trust and Reputation</span>
                                                </li>
                                                <li className='text-left list-none pl-[20px] relative mb-[10px] flex items-center gap-2'>
                                                    <span><FaArrowRight /></span>
                                                    <span>Cost-Effective Solution</span>
                                                </li>

                                            </ul>
                                            <div className="text-left">
                                                <button className='uppercase text-[14px] md:text-[16px] font-medium inline-block px-[20px] md:px-[25px] rounded-[10px_0_10px_0] bg-red-950 text-white
                                                 border border-[var(--primary-color-one)] leading-[56px] min-h-[56px] min-w-[160px] text-center transition-all duration-[500ms] ease-in-out relative no-underline cursor-pointer'>
                                                    Contact Us
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
                                <div className="relative text-center bg-white px-[35px] py-[40px] rounded-[10px]">
                                    <div className="relative">
                                        <div className="relative mb-[20px] flex justify-center">
                                            <span className="text-[60px] md:text-[80px] leading-[80px] text-redtertiary">
                                                <PiGoggles />
                                            </span>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className='text-[24px] md:text-[28px] leading-[38px] font-semibold text-red-950'>
                                                <a href="">Vision Statement</a></h3>
                                            <p className='text-[16px] md:text-[18px] font-medium text-darkGreen'>Provide Healthy, Eco Friendly and Affordable house hold Appliances to every family with help of State of Art Technology, Quality and Service Standard.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pb-[20px]"></div>

                                <div className="relative overflow-hidden h-[274px] rounded-[12px]">
                                    <img src="https://www.mycrofine.com/assets/images/icons/ps-2.jpg" className="object-cover rounded-[12px] w-full" alt="image" />
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </div>

        </>
    )
}

const Insights = () => {

    return (
        <>
            <div className='w-full bg-cover bg-center bg-no-repeat relative h-[70vh] my-20' style={{ backgroundImage: "url('https://dam.buhlergroup.com/image/fa941ab3a1064892889e908c6d2cbc42/-FJPG-C3240x1814%2C0%2C346-S1600x900-S1600x900')" }}>
                <div className='bg-[rgba(130,30,30,0.55)] absolute inset-0'>
                    <section className='max-w-screensize mx-auto '>


                        <div className="px-[15px] md:px-0 py-[30px] md:py-[80px] text-white">
                            <div className="mb-[12px] md:mb-[48px]">
                                <h2 className='text-[36px] md:text-[54px] leading-[54px] font-semibold tracking-[1px]'>Facts about Mahalaxmi</h2>
                            </div>
                            <div className="md:mb-[42px]"></div>
                            <div className='hidden md:block'>
                                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
                                    <div className="flex flex-col p-[16px_20px_32px_20px]">
                                        <h1 className="font-semibold text-[72px] leading-[86px] mb-[8px] space-x-3" >
                                            <span className="inline-block">2000</span>
                                            <span className="inline">+</span>
                                        </h1>
                                        <h2 className="leading-[20px] font-medium mb-[16px] text-[17px]">Customer Served</h2>
                                        <p className="leading-[28px] font-medium text-[17px]">Every day, millions enjoy foods made using Mahalaxmi Flour Mill machines — from fresh flour to wholesome grains.
                                        Trusted in kitchens and industries alike, we power the process behind your daily staples
                                        </p>
                                    </div>

                                    <div className="flex flex-col p-[16px_20px_32px_20px]">
                                        <h1 className="font-semibold text-[72px] leading-[86px] mb-[8px] space-x-3" >
                                            <span className="inline-block">10000+</span>
                                        </h1>
                                        <h2 className="leading-[20px] font-medium mb-[16px] text-[17px]">Attachaki Sold</h2>
                                        <p className="leading-[28px] font-medium text-[17px]">With over 10,000 Atta Chakkis sold, Mahalaxmi has earned the trust of families and businesses across the nation. </p>
                                    </div>

                                    <div className="flex flex-col p-[16px_20px_32px_20px]">
                                        <h1 className="font-semibold text-[72px] leading-[86px] mb-[8px] space-x-3" >
                                            <span className="inline-block">100</span>
                                            <span className="inline">%</span>
                                        </h1>
                                        <h2 className="leading-[20px] font-medium mb-[16px] text-[17px]">Customer Satisfaction</h2>
                                        <p className="leading-[28px] font-medium text-[17px]">Driven by trust and performance, we build solutions that keep our customers smiling every day.</p>
                                    </div>

                                </div>
                            </div>
                            <Slider />
                        </div>

                    </section>
                </div>

            </div>
        </>
    )
}

import  { useEffect, useRef, useState } from 'react';
import Topcard from './TopCard'


const Slider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Data for the slides
  const slides = [
    {
      title: '2 billion',
      subtitle: 'safely feeding the global population',
      description:
        'Two billion people consume foods that are made with Bühler processes on a daily basis. These include flour, rice, pasta, chocolate, coffee, and beer.',
    },
    {
      title: '> 140',
      subtitle: 'in the region, for the region',
      description:
        'We have a presence in over 140 countries with 100 service stations, over 30 manufacturing sites, and 25 application centers.',
    },
    {
      title: '50 %',
      subtitle: 'of new cars',
      description:
        'Half of the new cars worldwide have die-cast components produced with Bühler technology.',
    },
  ];

  // Auto-slide to the next card
  useEffect(() => {
    if (isInteracting) return; // Skip if user is interacting

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Loop back to 0 if we reach the end
        return nextIndex >= slides.length ? 0 : nextIndex;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isInteracting, slides.length]);

  // Scroll to the current slide
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentIndex * sliderRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  // Handle touch start
  const handleTouchStart = (e) => {
    setIsInteracting(true);
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].pageX;
    const diff = startX - currentX;

    // Optional: Add some visual feedback during drag (not scrolling yet)
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${-(
        currentIndex * sliderRef.current.offsetWidth +
        diff
      )}px)`;
    }
  };

  // Handle touch end
  const handleTouchEnd = () => {
    setIsDragging(false);
    const slider = sliderRef.current;
    slider.style.transform = ''; // Reset any drag transform

    const diff = startX - (sliderRef.current?.getBoundingClientRect().x || 0);
    const threshold = slider.offsetWidth * 0.3; // Swipe threshold (30% of slide width)

    if (diff > threshold) {
      // Swipe left (go to next)
      setCurrentIndex((prev) => (prev + 1 >= slides.length ? 0 : prev + 1));
    } else if (diff < -threshold) {
      // Swipe right (go to previous)
      setCurrentIndex((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
    }

    // Resume auto-slide after a short delay
    setTimeout(() => setIsInteracting(false), 1000); // Delay to prevent immediate auto-slide
  };

  // Handle mouse drag
  const handleMouseDown = (e) => {
    setIsInteracting(true);
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.pageX;
    const diff = startX - currentX;

    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${-(
        currentIndex * sliderRef.current.offsetWidth +
        diff
      )}px)`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const slider = sliderRef.current;
    slider.style.transform = ''; // Reset transform

    const diff = startX - (sliderRef.current?.getBoundingClientRect().x || 0);
    const threshold = slider.offsetWidth * 0.3;

    if (diff > threshold) {
      setCurrentIndex((prev) => (prev + 1 >= slides.length ? 0 : prev + 1));
    } else if (diff < -threshold) {
      setCurrentIndex((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
    }

    setTimeout(() => setIsInteracting(false), 1000);
  };

  return (
    <div className="slider-container flex justify-center items-center md:hidden">
      <div
        className="slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="flex flex-col p-[16px_20px_32px_20px]">
              <h1 className="font-semibold text-[48px] leading-[56px] mb-[8px] space-x-3">
                <span className="inline-block">{slide.title.split(' ')[0]}</span>
                <span className="inline">{slide.title.split(' ')[1] || ''}</span>
              </h1>
              <h2 className="leading-[20px] font-medium mb-[16px] text-[17px]">
                {slide.subtitle}
              </h2>
              <p className="leading-[28px] font-medium text-[17px]">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};





const Certificate = () => {

    return (
        <>
            <div className='my-10'>
                <section className='max-w-screensize mx-auto py-10'>
                    <div className="px-[15px]">
                        <div className="text-[32px] md:text-[48px] mb-[2.8%] text-red-950 font-bold text-center uppercase tracking-[2px]">Our Certificate</div>
                        <p className='text-darkGreen text-[24px] md:text-[28px] leading-[1.8em] text-left mb-[2.3%]'>As one of professional manufacturer and supplier of flour mill machinery with decades of development, ABC Machinery owns many quality certification. According to different demand of customers, our professional engineers will finish order task with high quality.</p>
                        <div className="flex justify-center items-center">
                            <img alt="our-certificate" src="https://www.flourmillmachine.com//upload/allimg/our-certificate.jpg" className='max-w-full h-auto border-none align-middle overflow-hidden' />
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}



const Aboutus = () => {
    return (
        <>
            <Topcard />
            <WhatweDo />
            <ChooseUs />
            <Insights />
            <Certificate />
        </>
    )
}

export default Aboutus
