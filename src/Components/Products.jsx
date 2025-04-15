import React, { useState } from 'react'

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

import hybridImage from "../assets/Images/hybrid.jpg"
import marvelImage from "../assets/Images/marvel.jpg"
import carnivalImage from "../assets/Images/carnival.jpg"
import WonderImage from "../assets/Images/wonder.jpg"
import talkyImage from "../assets/Images/talky.jpg"
import M4GImage from "../assets/Images/4g.jpg"
import M5GImage from "../assets/Images/5g.jpg"

const Domestic = () => {
    const Products = [
        {
            id: "hybrid-attachakki",
            name: "Hybrid",
            capacity: "5Kg",
            imageUrl: hybridImage,
            descript: "It is a basic type of attachakki, which uses Invertor technology to saves upto 40% of electricity"
        },
        {
            id: "carnival-attachakki",
            name: "Carnival",
            capacity: "5Kg",
            imageUrl: carnivalImage,
            descript: "It is a basic type of attachakki, which uses Invertor technology to saves upto 40% of electricity"
        },
        {
            id: "wonder-attachakki",
            name: "Wonder",
            capacity: "5Kg",
            imageUrl: WonderImage,
            descript: "It is a basic type of attachakki, which uses Invertor technology to saves upto 40% of electricity"
        },
        {
            id: "marvel-attachakki",
            name: "Marvel",
            capacity: "5Kg",
            imageUrl: marvelImage,
            descript: "It is a basic type of attachakki, which uses Invertor technology to saves upto 40% of electricity"
        },
        {
            id: "talky-attachakki",
            name: "talky",
            capacity: "5Kg",
            imageUrl: talkyImage,
            descript: "It is a advance type of attachakki in which inbuilt voice demonstartion added & it uses Invertor technology to saves upto 40% of electricity"
        },
        {
            id: "4G-attachakki",
            name: "4G",
            capacity: "5Kg",
            imageUrl: M4GImage,
            descript: "It is a Next generation attachakki & it uses Invertor technology to saves upto 40% of electricity"
        },
        {
            id: "5G-attachakki",
            name: "5G",
            capacity: "5Kg",
            imageUrl: M5GImage,
            descript: "It is a advance technolodgy type of attachakki  & it uses Invertor technology to saves upto 40% of electricity"
        }
    ]

    return (
        <>

            <section className='max-w-full mx-auto py-6'>

                <div className='grid grid-cols-12 gap-6 md:gap-10'>
                    {Products.map((product) => (
                        <div className='col-span-12 md:col-span-4'>
                            <div className="font-normal border border-lightGray p-5 rounded-2xl shadow-[0_0_10px_2px_#00a1ff20] h-full">
                                <Link to={`/products/${product.id}`} className='cursor-pointer'>
                                    <div className="overflow-hidden block transition-all duration-300 ease-in-out outline-none 
                            text-[#004182] no-underline bg-transparent">
                                        <img src={product.imageUrl}
                                            alt="Attachakki Image" className='transition-all duration-300 ease-in-out border-[1px] rounded-[12px] border-miniBorder max-w-full h-auto' />
                                    </div>
                                    <br />
                                    <a href="#" className="transition-all duration-300 ease-in-out outline-none
                                 text-darkGreen text-[20px] md:text-[26px] font-medium capitalize no-underline bg-transparent">{product.name} Attachakki</a>
                                    <p className='leading-[30px] text-lightGreen m-[1.6%_0_3.6%] text-[16px] md:text-[18px]'>
                                        <i className='italic'>Container Capacity: {product.capacity}</i>
                                        <br />{product.descript}</p>
                                    <a href="#" className="w-[182px] md:w-[232px] h-[50px] leading-[50px] block text-center bg-redSecondary 
                                text-white text-[18px] font-medium no-underline mb-[40px] transition-all rounded-[15px] duration-300 ease-in-out outline-none">READ MORE +</a>
                                </Link>
                            </div>
                        </div>
                    ))}



                </div>


            </section>
        </>
    )
}

import pulv2_3Hp from "../assets/Images/2HP-3HP-Commercial.jpg"
import pulv457Hp from "../assets/Images/4HP-5HP-7HP-Commercial.jpg"
import turbo2hp from "../assets/Images/turbo2hp-commercial.jpg"
import Topcard from './TopCard'
import { Link } from 'react-router-dom'
const Commercial = () => {
    const Products = [
        {
            id: "turbo-2HP-attachakki",
            name: 'Turbo 2HP',
            capacity: '60-62 kg/hr',
            imageUrl: turbo2hp,
            descript:
                'Semi-automatic commercial flour mill with stainless steel chamber, 4 jali, and three-phase power. Features a bitter cutter and a 1-year warranty.',
        },
        {
            id: "pulverizer-2HP",
            name: 'Pulverizer 2HP',
            imageUrl: pulv2_3Hp,
            capacity: '10-12 kg/hr',
            descript:
                'Fully automatic commercial flour mill with stainless steel chamber, 6 jali, and single-phase power. Consumes 1.5 units/hr with a 1-year warranty.',
        },
        {
            id: "pulverizer-3HP",
            name: 'Pulverizer 3HP',
            imageUrl: pulv2_3Hp,
            capacity: '16-20 kg/hr',
            descript:
                'Fully automatic commercial flour mill with stainless steel chamber, 6 jali, and single-phase power. Consumes 2.25 units/hr with a 1-year warranty.',
        },
        {
            id: "pulverizer-4HP",
            name: 'Pulverizer 4HP',
            imageUrl: pulv457Hp,
            capacity: '25-30 kg/hr',
            descript:
                'Semi-automatic commercial flour mill with stainless steel chamber, 4 jali, and single-phase power. Features a bitter cutter and a 1-year warranty.',
        },
        {
            id: "pulverizer-5HP",
            name: 'Pulverizer 5HP',
            imageUrl: pulv457Hp,
            capacity: '40-42 kg/hr',
            descript:
                'Semi-automatic commercial flour mill with stainless steel chamber, 4 jali, and three-phase power. Features a bitter cutter and a 1-year warranty.',
        },
        {
            id: "pulverizer 7.5HP",
            name: 'Pulverizer 7.5HP',
            imageUrl: pulv457Hp,
            capacity: '60-62 kg/hr',
            descript:
                'Semi-automatic commercial flour mill with stainless steel chamber, 4 jali, and three-phase power. Features a bitter cutter and a 1-year warranty.',
        },
    ];

    return (
        <section className="max-w-full mx-auto py-6">
            <div className="grid grid-cols-12 gap-6 md:gap-10">
                {Products.map((product) => (
                    <div key={product.id} className="col-span-12 md:col-span-4">
                        <div className="font-normal border border-lightGray p-5 rounded-2xl shadow-[0_0_10px_2px_#00a1ff20] h-full">
                            <Link to={`/products/${product.id}`} className='cursor-pointer'>
                                <a
                                    href="#"
                                    className="overflow-hidden block transition-all duration-300 ease-in-out outline-none text-[#004182] no-underline bg-transparent"
                                >
                                    <img
                                        src={product.imageUrl}
                                        alt={`${product.name} Commercial Flour Mill`}
                                        className="transition-all duration-300 ease-in-out border-[1px] rounded-[12px] border-miniBorder max-w-full h-auto"
                                    />
                                </a>
                                <br />
                                <a
                                    href="#"
                                    className="transition-all duration-300 ease-in-out outline-none text-darkGreen text-[20px] md:text-[26px] font-medium capitalize no-underline bg-transparent"
                                >
                                    {product.name}
                                </a>
                                <p className="leading-[30px] text-lightGreen m-[1.6%_0_3.6%] text-[16px] md:text-[18px]">
                                    <i className="italic">Capacity: {product.capacity}</i>
                                    <br />
                                    {product.descript}
                                </p>
                                <a
                                    href="#"
                                    className="w-[182px] md:w-[232px] h-[50px] leading-[50px] block text-center bg-redSecondary text-white text-[18px] font-medium no-underline mb-[40px] transition-all rounded-[15px] duration-300 ease-in-out outline-none"
                                >
                                    READ MORE +
                                </a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


const Popular = () => {
    const Products = [
        {
            id: "Talky-attachakii",
            name: 'Talky',
            capacity: '5 kg/hr',
            imageUrl: talkyImage,
            descript:
                'An advanced domestic attachakki with inbuilt voice demonstration and Inverter technology to save up to 40% of electricity.',
        },
        {
            id: "Hybrid-attachakii",
            name: 'Hybrid',
            capacity: '5 kg/hr',
            imageUrl: hybridImage,
            descript:
                'A reliable domestic attachakki using Inverter technology to save up to 40% of electricity, popular for its efficiency.',
        },
        {
            id: "Pulvets-4HP",
            name: 'Pulvets 4HP',
            capacity: '25-30 kg/hr',
            imageUrl: pulv457Hp,
            descript:
                'A semi-automatic commercial flour mill with stainless steel chamber, 4 jali, and single-phase power. Highly valued for its balance of capacity and efficiency.',
        },
    ];

    return (
        <section className="max-w-full mx-auto py-6">
            <div className="grid grid-cols-12 gap-6 md:gap-10">
                {Products.map((product) => (
                    <div key={product.id} className="col-span-12 md:col-span-4">
                        <div className="font-normal border border-lightGray p-5 rounded-2xl shadow-[0_0_10px_2px_#00a1ff20] h-full">
                            <Link to={`/products/${product.id}`} className='cursor-pointer'>
                                <a
                                    href="#"
                                    className="overflow-hidden block transition-all duration-300 ease-in-out outline-none text-[#004182] no-underline bg-transparent"
                                >
                                    <img
                                        src={product.imageUrl}
                                        alt={`${product.name} Flour Mill`}
                                        className="transition-all duration-300 ease-in-out border-[1px] rounded-[12px] border-miniBorder max-w-full h-auto"
                                    />
                                </a>
                                <br />
                                <a
                                    href="#"
                                    className="transition-all duration-300 ease-in-out outline-none text-darkGreen text-[20px] md:text-[26px] font-medium capitalize no-underline bg-transparent"
                                >
                                    {product.name}
                                </a>
                                <p className="leading-[30px] text-lightGreen m-[1.6%_0_3.6%] text-[16px] md:text-[18px]">
                                    <i className="italic">
                                        Capacity: {product.capacity}
                                    </i>
                                    <br />
                                    {product.descript}
                                </p>
                                <a
                                    href="#"
                                    className="w-[182px] md:w-[232px] h-[50px] leading-[50px] block text-center bg-redSecondary text-white text-[18px] font-medium no-underline mb-[40px] transition-all rounded-[15px] duration-300 ease-in-out outline-none"
                                >
                                    READ MORE +
                                </a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Productcard = () => {
    const options = [
        {
            id: 1,
            name: "Domestic Mills",
            component: <Domestic />
        },
        {
            id: 2,
            name: "Commercial Mills",
            component: <Commercial />
        },
        {
            id: 3,
            name: "Popular Mills",
            component: <Popular />
        },


    ]

    const [isActive, setisActive] = useState(options[0])

    return (
        <>
            <section className="max-w-screensize mx-auto pt-[5rem]">
                <div className="flex items-center justify-center">
                    <h1 className="text-[26px] md:text-[34px] font-semibold text-redprimary">
                        Mahalaxmi Products
                    </h1>
                </div>
            </section>
            <section className='flex flex-col max-w-screensize mx-auto py-[3rem] px-4'>
                {/* options bar */}
                <div className='w-full'>
                    <div className='flex  flex-row justify-center h-[60px] md:h-[80px] md:p-[0px_44px] min-w-max border-b border-lightGray options-container sticky'>
                        {options.map((option) => (
                            <button key={option.id} onClick={() => {
                                setisActive(option)
                            }} className={`profile-options relative ${isActive.id === option.id ? "activeoption text-redSecondary" : ""} py-3 md:p-[20px_0px] outline-none text-[14px] md:text-[30px] text-left md:text-center font-medium text-textBlack hover:text-redSecondary`}>
                                {option.name}
                            </button>
                        ))}


                    </div>

                </div>

                {/* options Data */}
                <section className='mt-6 px-4' style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    {isActive.component}

                </section>

            </section>



        </>
    )
}

const Productcard1 = () => {
    const options = [
        {
            id: 1,
            name: "Domestic Mills",
            component: <Domestic />
        },
        {
            id: 2,
            name: "Commercial Mills",
            component: <Domestic />
        },
        {
            id: 3,
            name: "Popular Mills",
            component: <Domestic />
        },
    ];

    const [isActive, setIsActive] = useState(options[0]);

    return (
        <section className='flex flex-col max-w-screensize mx-auto py-6 px-4'>
            {/* Options bar */}
            <div className='w-full'>
                <div className='flex flex-col items-start space-y-2 p-4 border-b border-lightGray'>
                    {options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => setIsActive(option)}
                            className={`w-full text-left py-3 px-4 rounded-md outline-none text-lg font-medium transition-colors duration-200
                                ${isActive.id === option.id
                                    ? 'bg-red-50 text-redSecondary border-l-4 border-redSecondary'
                                    : 'text-textBlack hover:bg-gray-50 hover:text-primary'}`}
                        >
                            {option.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <section className='mt-6 px-4' style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {isActive.component}
            </section>
        </section>
    );
};

const Products = () => {
    return (
        <>
            <Topcard />
            <Productcard />

        </>
    )
}

export default Products
