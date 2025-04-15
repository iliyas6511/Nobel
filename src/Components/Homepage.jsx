
import React from 'react'
import "../App.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose, IoMdPlay } from 'react-icons/io';

import slider1 from "../assets/Images/slider_1 (1).jpg"
import slider2 from "../assets/Images/slider_2.jpg"
import slider3 from "../assets/Images/slider_3.jpg"
import slider4 from "../assets/Images/slider_4.jpg"


const Landing = () => {

  const images = [
    slider1,
    slider2,
    slider3,
    slider4
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
    >
      <IoIosArrowBack size={24} />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
    >
      <IoIosArrowForward size={24} />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  }

  return (
    <div className="w-full h-[calc(100vh-100px)]  mx-auto relative overflow-hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className=" w-full h-[800px] overflow-hidden flex items-center justify-center">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-cente "
            />
            <div className="absolute right-10 bottom-10 bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <h2 className="text-xl font-bold mb-2">Slide {index + 1}</h2>
              <p className="text-gray-700 mb-4">This is a description for Slide {index + 1}.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

import welcomeImage from "../assets/Images/home_advertise.jpg"

const Welcome = () => {

  const [isVideoShow, setVideoShow] = useState(false)

  return (
    <>
      <section className='max-w-screensize mx-auto '>
        <div className='relative py-[120px] sm:px-[20px] px-[15px]'>
          <div className='grid grid-cols-12 gap-4 sm:gap-6'>

            <div className='col-span-12 md:col-span-6 '>
              <div className='relative block  w-full'>

                <div className='relative block w-full '>

                  <div className=' overflow-hidden block rounded-[10px_10px_10px_0px] w-full'>
                    <img src={welcomeImage} alt="welcome image" className='w-full h-auto object-cover' />


                  </div>
                </div>
              </div>

            </div>

            <div className='col-span-12 md:col-span-6 mt-[25px] sm:mt-0'>

              <div className='relative block md:max-w-[485px] w-full md:ml-[70px]'>

                <div className='sec-title relative block mt-[-7px] mb-[30px] md:mb-[50px]'>
                  <div className='relative block mb-[5px] md:mb-[20px]'>
                    <img src="https://www.ajantamanufacturers.in/assets/images/resources/sec-title-icon1.png" alt="" />

                  </div>

                  <span className='relative inline-block text-lightGreen uppercase leading-5 font-medium text-sm'>
                    Our introduction
                  </span>

                  <h2 class="text-[32px] md:text-[50px] leading-[1em] font-bold normal-case tracking-[-0.04em] text-redprimary md:whitespace-nowrap">
                    Welcome to <br className='max-sm:hidden' />Mahalaxmi Attachakki</h2>

                </div>

                <h2 className="text-darkGreen text-[20px] leading-[22px] md:text-[24px] md:leading-[26px] font-medium">Established in the year 1982</h2>

                <p class="relative block mt-[22px] md:mt-[39px] text-[16px] md:text-[18px] leading-[26px] md:leading-[34px] font-normal text-[#687469]">
                  We, "Mahalaxmi Attachakki" are counted among the foremost manufacturers
                  and suppliers of a comprehensive range all type of Flour Mill &amp; Food Processing Machine Units. Designed and
                  manufactured with utmost precision, the range comprises Domestic Flour Mill, Vertical Flour Mill, and Food Processing
                  Machine unit. All these machines are engineered with utmost perfection making use of superior grade raw material and
                  components, which are sourced from reliable and certified vendors of the industry.


                </p>

                <div class="relative flex flex-col md:flex-row gap-4 md:gap-1 items-center mt-[48px]">
                  <div class="relative md:mr-[28px]">
                    <div class="relative block rounded-[10px] overflow-hidden max-w-[160px] w-full z-[1]" onClick={() => setVideoShow(!isVideoShow)}>
                      <img src="https://www.ajantamanufacturers.in/assets/images/resources/about-v1-video-img.jpg" alt="" className='w-full align-middle' />
                      <div class="absolute inset-0 flex items-center justify-center">
                        <button target=" " className='video-mill'>
                          <span class="icon-play-button-1 ">
                            <IoMdPlay className='text-[19px] text-red-700' />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="md:pl-[30px] relative block text-center md:text-left">
                    <p className='text-[14px] leading-[24px] font-medium uppercase tracking-[0.1em]'>Watch our video</p>
                    <h3 className='text-[20px] leading-[30px] tracking-[-0.02em] font-bold text-redprimary'>Mahalaxmi Attachakki Products Range</h3>
                  </div>
                </div>

              </div>

            </div>


          </div>

        </div>

        {/* {isVideoShow &&
          <div className='fixed inset-0 z-[3]'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/K81fCkV8Mqw?si=EUFjRxzj0zDqUogS"
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </div>}
           */}

        {isVideoShow && (
          <div className="fixed inset-0 bg-[rgba(47,52,47,0.7)]  flex items-center justify-center z-50">
            <div className="relative bg-red-100 rounded-lg p-2 w-full max-w-[90%] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[820px]">
              {/* Close Button */}
              <button
                className="absolute top-[-45px] right-[1px] rounded-t-[10px] w-[50px] h-[50px]  bg-red-100  p-1 text-redtertiary hover:text-green-600 focus:outline-none"
                onClick={() => setVideoShow(false)}
              >
                <IoMdClose className="text-[40px]" />
              </button>
              {/* Video Iframe */}
              <div className="relative w-full" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/K81fCkV8Mqw?si=EUFjRxzj0zDqUogS&autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

      </section>

    </>
  )
}








// const Products = () => {

//     return (
//         <>
//         <section className='max-w-screensize mx-auto'>
//             <div className='relative block bg-white pb-[120px]'>
//                 <div className='static p-[0_15px] m-[0_auto] w-full'>

//                     <div className='mb-[54px] mt-4 text-center'>
//                         <h2 className='text-[50px] text-redprimary leading-[1em] font-bold normal-case tracking-[-0.04em]'>Our Products</h2>
//                     </div>

//                 </div>

//             </div>

//         </section>

//         </>
//     )
// }



import { useState, useEffect } from "react";
import hybridImage from "../assets/Images/hybrid.jpg"
import marvelImage from "../assets/Images/marvel.jpg"
import carnivalImage from "../assets/Images/carnival.jpg"
import WonderImage from "../assets/Images/wonder.jpg"
import talkyImage from "../assets/Images/talky.jpg"
import M4GImage from "../assets/Images/4g.jpg"
import M5GImage from "../assets/Images/5g.jpg"
import pulv23hp from "../assets/Images/2HP-3HP-Commercial-sliding.jpg"
import pulv47hp from "../assets/Images/4HP-5HP-7HP-Commercial-sliding.jpg"


const Secondcard = () => {

  const [currentIndex, setCurrentIndex] = useState(0);



  const visibleCount = {
    sm: 1,
    md: 2,
    lg: 4,
  };

  const cards = [
    {
      id: 1,
      imageUrl: hybridImage,
      heading: "Hybrid Attachakki",
    },
    {
      id: 2,
      imageUrl: marvelImage,
      heading: "Marvel Attachakki",
    },
    {
      id: 3,
      imageUrl: carnivalImage,
      heading: "Carnival Attachakki",
    },
    {
      id: 4,
      imageUrl: talkyImage,
      heading: "Talky Attachakki",
    },
    {
      id: 5,
      imageUrl: M4GImage,
      heading: "4G Attachakki",
    },
    {
      id: 6,
      imageUrl: pulv23hp,
      heading: "Pulverizer 2 & 3 HP",
    },
    {
      id: 7,
      imageUrl: pulv47hp,
      heading: "Pulverizer 4-7HP",
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const cardWidth = 380
  const cardGap = 75

  return (
    <>
      <div className='bg-red-800'>
        <div className='max-w-[1330px] mx-auto px-2 text-white py-5 md:py-20'>
          <div>
            <header className='flex justify-center'>
              <h1 className='text-3xl md:text-5xl font-semibold max-w-[15ch] md:max-w-[30ch] text-center'>Our Products</h1>
            </header>
          </div>



          <div className='relative w-full overflow-hidden my-20 ml-10 hidden md:block'>
            <div className={`flex transition-all duration-500 w-max`}
              style={{
                transform: `translateX(-${(currentIndex * (cardWidth + cardGap))}px)`,
                gap: `${cardGap}px`,
                paddingLeft: '20px',
                width: `${cards.length * cardWidth + (cards.length - 1) * cardGap}px`,
              }}>
              {cards.map((item) => (
                <div key={item.id} className="">
                  <div className='flex flex-col gap-8 group relative'>
                    <div className={`h-[380px] w-[${cardWidth - 20}px] aspect-square rounded-[3rem] overflow-hidden relative`}>
                      <img className='w-full h-full object-cover'
                        src={item.imageUrl} alt="" />

                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                      {/* Product Name on Hover */}
                      <div className="absolute bottom-0 z-[1]  rounded-[10px] right-[20px] left-[20px]  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className='relative inline-block text-red-700 text-[13px] leading-[22px] font-bold uppercase tracking-[0.1em] rounded-t-[10px] bg-[rgb(241,207,105)] px-[20px] py-[7px]'>Mahalaxmi Mfg</p>
                        <h3 className='relative block text-[26px] leading-[34px] font-bold rounded-tr-[10px] bg-[rgb(109,140,84)] px-[40px] pt-[30px] pb-[32px] 
                          xl:max-[1470px]:text-[20px] xl:max-[1470px]:px-[20px] xl:max-[1470px]:pt-[25px] xl:max-[1470px]:pb-[27px]'>
                          <a href="#" className='text-[rgb(255,255,255)] transition-all duration-[200ms] ease-linear delay-[100ms]'>{item.heading}</a></h3>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='relative flex flex-col gap-16 mt-10  md:hidden '>
            {cards.map((item) => (
              <div key={item.id} className="">
                <div className='flex flex-col gap-2 px-6'>
                  <div className="h-[300px] w-full aspect-square rounded-[2rem] overflow-hidden ">
                    <img className='w-full h-full object-cover'
                      src={item.imageUrl} alt="" />
                  </div>
                  <header className='text-white flex flex-col gap-5 text-center '>
                    <h2 className='font-semibold text-2xl'>{item.heading}</h2>

                  </header>
                </div>
              </div>
            ))}

          </div>


        </div>
      </div>
    </>
  )
}






import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import GoTop from './GoTop';
const Testimonials = () => {

  const CardsData = [
    {
      id: 1,
      CompLogo: "https://cdn.sanity.io/images/pvn35iyy/production/ed2fbe013284dc7017af8a6b577d6a4134ad14b6-84x25.svg",
      quote: "Khanapur Atpadi is mostly of rural area and agro based economy. But here the buying capacity of customer is very high. They always go for brand and they very much choosy about selection of any product, this is our experience. And also we have to compete with other shops and showrooms in vicinity.",
      PersonImg: "https://cdn.sanity.io/images/pvn35iyy/production/6971dbfaa23a4d9c8f32c8f2d89517ed92a3cb77-450x450.jpg?auto=format&w=64&dpr=2",
      personName: "Pawar Shoppee",
      personPost: "Khanapur 9423809294",
      css: "h-[34px] w-[113px]"
    },
    {
      id: 2,
      CompLogo: "https://cdn.sanity.io/images/pvn35iyy/production/60830ef0c286eeb2a042f4d6fa8bec4a8126bf41-50x50.svg",
      quote: "We have recently joined the Mahalaxmi Family. In between Corona lockdown would be customers was stuck at home. Here at that time customer and we feel the importance of attachakki. If you buy it you don't have go out for daily flour need.",
      PersonImg: "https://cdn.sanity.io/images/pvn35iyy/production/f57ca9121468be3af345bdbf9412545b9662f532-320x360.webp?auto=format&w=64&dpr=2",
      personName: "Renuka Metals",
      personPost: "Peth Vadgaon, Kolhapur 9823430419",
      css: "h-[44px] w-[44px]"
    },
    {
      id: 3,
      CompLogo: "https://cdn.sanity.io/images/pvn35iyy/production/5b4b56c75df0402a1e529d6a0833837c4b801880-1614x191.svg",
      quote: "We are in business of Consumer Electronic Home appliances for last 40 years. A renowned name in Satara reagion. So we have to maintain our reputation while choosing product to deal with. Mahalaxmi Attachakki is such brand to trust because of its customer loyalty, after sales service, every time innovations in its models, wide range of models to choose.",
      PersonImg: "https://cdn.sanity.io/images/pvn35iyy/production/d281e170c57ef87909bf333ae72cbaf89174c17e-400x400.jpg?auto=format&w=64&dpr=2",
      personName: "Shalgar Sales",
      personPost: "Satara 9890305150",
      css: "h-[54px] w-[180px]"
    },
    {
      id: 4,
      CompLogo: "https://cdn.sanity.io/images/pvn35iyy/production/ed2fbe013284dc7017af8a6b577d6a4134ad14b6-84x25.svg",
      quote: "When you are dealer, closing of deal always counts. The success of your showroom is count on how many deals you close successfully. That's why dealer like us always go for such product where you need less efforts to close the deal. Here Mahalaxmi Attachakki wins the game. This brand is such popular that customer himself demand for Mahalaxmi brand.",
      PersonImg: "https://cdn.sanity.io/images/pvn35iyy/production/b51f9779f1e1e2422ed56403f6ee9f557e2d5935-400x456.webp?auto=format&w=64&dpr=2",
      personName: "Shah Electronics,",
      personPost: "Palus, Sangli 9422406609",
      css: "h-[34px] w-[113px]"
    },
    {
      id: 5,
      CompLogo: "https://cdn.sanity.io/images/pvn35iyy/production/5f18975d95e4ae702235867677fec68cb575b5b8-196x59.svg",
      quote: "Khanapur Atpadi is mostly of rural area and agro based economy. But here the buying capacity of customer is very high. They always go for brand and they very much choosy about selection of any product, this is our experience. And also we have to compete with other shops and showrooms in vicinity.",
      PersonImg: "https://cdn.sanity.io/images/pvn35iyy/production/3bf4dbff8bfd32390a686f8dc2faf07712f3ee30-450x450.jpg?auto=format&w=64&dpr=2",
      personName: "Pawar Shoppee",
      personPost: "Khanapur 9423809294",
      css: "h-[34px] w-[113px]"
    },
    {
      id: 6,
      CompLogo: "https://cdn.sanity.io/images/pvn35iyy/production/72709b20730cb963a558ea6eeb50e4daa480e2b8-245x55.svg",
      quote: "We are in business of Consumer Electronic Home appliances for last 40 years. A renowned name in Satara reagion. So we have to maintain our reputation while choosing product to deal with. Mahalaxmi Attachakki is such brand to trust because of its customer loyalty, after sales service, every time innovations in its models, wide range of models to choose.",
      PersonImg: "https://cdn.sanity.io/images/pvn35iyy/production/9276c546cb771229e92bdc96235875c23444076b-357x357.jpg?auto=format&w=64&dpr=2",
      personName: "Shalgar Sales",
      personPost: "Satara 9890305150",
      css: "h-[25px] w-[113px]"
    },



  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = CardsData.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <>

      <section className="max-w-screensize mx-auto pt-[5rem]">
        <div className="flex items-center justify-center">
          <h1 className="text-[26px] md:text-[54px] font-bold text-darkGreen tracking-[4px]">
            Testimonials
          </h1>
        </div>
      </section>
      <section className="max-w-full mx-auto relative flex w-full flex-col mb-16 sm:gap-6 pb-16 lg:pb-0 lg:mb-16 overflow-hidden py-10 md:py-16">
        <div className="flex h-full w-full justify-center relative">

          <button
            className="bg-white rounded-full shadow shadow-gray-500 flex justify-center items-center p-3 absolute left-[35%] md:left-[20%] top-[95%] md:top-[45%] z-10"
            onClick={prevSlide}
          >
            <span className="opacity-70">
              <FaLongArrowAltLeft fontSize="small" />
            </span>
          </button>


          <div className="relative w-full md:w-[65vw] overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {CardsData.map((card, index) => (
                <figure
                  key={card.id}
                  className="text-textBlack bg-red-100 mx-auto rounded-3xl md:rounded-[4rem] px-5 md:px-20 py-6 md:py-16 min-w-full md:min-w-[65vw] transition-all duration-500"
                >
                  <div className="items-center flex flex-col justify-center text-center gap-6">
                    {/* <img
                      alt="Company Logo"
                      className={`${card.css} custom-filter`}
                      src={card.CompLogo}
                    /> */}
                    <blockquote className="text-xl font-semibold py-6 max-w-[40ch] w-full mx-auto tracking-wider">
                      {card.quote}
                    </blockquote>
                    <figcaption className="text-green-900 flex items-center gap-4">
                      {/* <img
                        alt="Reviewer"
                        className="h-[44px] w-[44px] rounded-full object-cover lg:h-[64px] lg:w-[64px]"
                        src={card.PersonImg}
                      /> */}
                      <p>
                        <span className="text-green-900 text-base font-bold">
                          {card.personName}
                        </span>
                        <span className="text-sm block">{card.personPost}</span>
                      </p>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>


          <button
            className="bg-white rounded-full shadow shadow-gray-500 flex justify-center items-center p-3 absolute right-[35%] lg:right-[20%] top-[95%] md:top-[45%] z-10"
            onClick={nextSlide}
          >
            <span className="opacity-70">
              <FaLongArrowAltRight fontSize="small" />
            </span>
          </button>
        </div>
      </section>

    </>
  );
};

import contactBgImage from "../assets/Images/AI_mahalaxmi.png"
const Touch = () => {

  return (
    <>
      <div className='bg-[#ececec] p-[3.6%_0] touch-bg-container mt-4 my-0'>
        <section className='max-w-screensize mx-auto px-[15px]'>
          {/*  xl:float-left */}
          <div className='xl:ml-[33.3333%] xl:w-2/3 '>
            <div className='bg-white rounded-[10px] shadow-[0_0_4px_4px_rgba(98,98,98,0.2)] p-[5.2%_6.6%_2.1%]'>
              <h2 className='text-redSecondary border-b border-[#d5d5d5] font-bold text-[26px] md:text-[32px] mb-2 uppercase pb-[14px]'>Get In Touch Now</h2>
              <p className='text-[#282828] text-[12px] md:text-[14px] leading-[20px] mb-[2.8%] last:mb-0'>We receive enquiries in <em className='font-bold'>English, Marathi, Hindi</em>. Our professional team will reply to you within <em>24 hours</em>. Please feel <b>FREE</b> to contact us!</p>
              <form action="" className='leading-[1.8em]'>

                <div className="mb-[20px]">
                  <input type="text" className=" block w-full h-[46px] px-3 py-3 text-[14px] text-blackText bg-lightGray border border-[#ccc] rounded-[4px] shadow-none transition duration-150 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                    name="YourName" placeholder="Your Name:" />
                </div>

                <div className="mb-[20px]">
                  <input type="email" className=" block w-full h-[46px] px-3 py-3 text-[14px] text-blackText bg-lightGray border border-[#ccc] rounded-[4px] shadow-none transition duration-150 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none" name="YourEmail" placeholder="Your Email:" />
                </div>

                <div className="mb-[20px]">
                  <textarea className="block w-full h-auto resize-none px-3 py-3 text-[14px] text-blackText bg-lightGray border border-[#ccc] rounded-[4px] shadow-none transition duration-150 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                    rows="7" name="Message" placeholder="Your Message:"></textarea>
                </div>

                <div className="mb-[20px]">
                  <input type="submit" onClick={(e) => {
                    e.preventDefault()
                  }} className="block  rounded-[10px] font-bold bg-[#f94545] text-white py-[12px] px-[6.6%] mt-[27px] border-none uppercase 
                  transition-all duration-300 ease-in-out hover:bg-red-600" value="Send Message Now!   →" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

const Footer = () => {

  return (
    <>
      <div className='bg-[#2c2c2c]  '>
        <section className='max-w-screensize mx-auto py-[30px] text-center text-[#acacac]'>

          <div className="flex flex-col ">
            <div className="max-w-[566px] mx-auto mb-[26px] flex flex-col md:flex-row ">
              <div className="md:border-r border-[rgb(63,62,62)] md:pr-[30px] md:mr-[30px] float-left">
                <img src="src\assets\attachakii logo.png" className='max-w-full h-[55px] border-none aspect-auto' />
              </div>
              <div className="pt-[15px] pb-[15px] text-[16px] md:float-left flex items-center">
                <i className="pr-[10px] inline-block text-[14px] leading-[1] text-[rgb(249,69,69)] font-normal">
                  <IoMail className='text-[22px]' />
                </i>
                <a href="mailto:info@flourmiller.com" className='text-[#d6d6d6] hover:text-[rgb(249,69,69)] text-[18px] no-underline bg-transparent transition-all duration-300 ease-in-out outline-none'>info@flourmiller.com</a>
              </div>
            </div>
            <p className='text-center text-[16px]  mb-[10px] flex max-sm:flex-col max-sm:gap-2 !items-center justify-center'>
              <i className="md:pr-[8px] inline-block text-[14px] leading-[1] text-[rgb(249,69,69)] font-normal"><FaLocationDot className='text-[28px] md:text-[19px]' />
              </i> Add: 19F, Suite B, Global Trade Mansion, Wenfeng Avenue, Anyang, Henan, China </p>
            <p className='text-center text-[16px]  mb-[10px]'><i className="fa fa-phone"></i><a href="tel:0086 372 5953961">0086 372 5953961</a></p>
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
              2025 Henan Kingman Mechanical &amp; Electrical Complete Plant Co., Ltd  All Rights Reserved.
            </div>
          </div>

        </section>
      </div>
    </>
  )
}

const Homepage = () => {
  return (
    <>
      <Landing />
      <Welcome />
      <Secondcard />
      {/* <Dummycard /> */}
      <Testimonials />
      <Touch />









    </>
  )
}

export default Homepage
