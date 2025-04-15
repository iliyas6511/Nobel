const Welcome = () => {

    return (
        <>
            <section className='max-w-screensize mx-auto '>
                <div className='relative py-[120px] px-[20px] max-sm:px-[15px]'>
                    <div className='grid grid-cols-12'>

                        <div className='col-span-12 md:col-span-6 '>
                            <div className='relative block before:content-[""] before:w-[1000px] before:h-full before:absolute before:right-[50%] before:top-[-140px] before:bg-[#f6f4ec]'>

                                <div className='relative block before:content-[""] before:w-[30px] before:h-[330px] before:absolute before:left-[-30px] before:bottom-0 before:bg-[rgb(241,207,105)]'>

                                    <div className='absolute overflow-hidden block rounded-[10px_10px_10px_0px]'>
                                        <img src="https://www.ajantamanufacturers.in/assets/images/about/hp1.jpg" alt="welcome image" className='w-full h-full' />


                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-span-12 md:col-span-6 '>

                            <div className='relative block max-w-[485px] w-full ml-[70px]'>

                                <div className='sec-title relative block mt-[-7px] mb-[50px]'>
                                    <div className='relative block mb-[5px]'>
                                        <img src="https://www.ajantamanufacturers.in/assets/images/resources/sec-title-icon1.png" alt="" />

                                    </div>

                                    <span className='relative inline-block text-[#687469] uppercase leading-5 font-medium text-sm'>
                                        Our introduction
                                    </span>

                                    <h2 class=" text-[50px] leading-[1em] font-bold normal-case tracking-[-0.04em] text-redprimary whitespace-nowrap">
                                        Welcome to <br />Mahalaxmi Attachakki</h2>

                                </div>

                                <h2 className="text-[#6d8c54] text-[24px] leading-[26px] font-medium">Established in the year 1982</h2>

                                <p class="relative block mt-[39px] text-[18px] leading-[34px] font-normal text-[#687469]">
                                    We, "Mahalaxmi Attachakki" are counted among the foremost manufacturers
                                    and suppliers of a comprehensive range all type of Flour Mill &amp; Food Processing Machine Units. Designed and
                                    manufactured with utmost precision, the range comprises Domestic Flour Mill, Vertical Flour Mill, and Food Processing
                                    Machine unit. All these machines are engineered with utmost perfection making use of superior grade raw material and
                                    components, which are sourced from reliable and certified vendors of the industry.


                                </p>

                                <div class="relative flex items-center mt-[48px]">
                                    <div class="relative mr-[28px]">
                                        <div class="relative block rounded-[10px] overflow-hidden max-w-[160px] w-full z-[1]">
                                            <img src="https://www.ajantamanufacturers.in/assets/images/resources/about-v1-video-img.jpg" alt="" className='w-full align-middle' />
                                            <div class="absolute inset-0 flex items-center justify-center">
                                                <a href="https://youtu.be/AkQC-IUW5cI" target=" " className='video-mill'>
                                                    <span class="icon-play-button-1 ">
                                                        <IoMdPlay className='text-[19px] text-red-700'/>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="pl-[30px] relative block">
                                        <p className='text-[14px] leading-[24px] font-medium uppercase tracking-[0.1em]'>Watch our video</p>
                                        <h3 className='text-[20px] leading-[30px] tracking-[-0.02em] font-bold text-redprimary'>Mahalaxmi Attachakki Products Range</h3>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </section>

        </>
    )
}