import React from 'react'
import { FaStar } from 'react-icons/fa'



const ProductIntro = ({product}) => {

    return (
        <>
            <section className="max-w-screensize mx-auto pt-[4rem] md:pt-[7rem] pb-[3rem]">
                <div className="px-2 md:px-[15px] w-full">
                    <div className="grid grid-cols-12 gap-6 md:gap-10">
                        <div className="col-span-12 md:col-span-6  max-w-full">
                            <div className="mb-[50px] md:mb-0 max-w-full">
                                <img src={product.imageUrl} alt="mill" className='w-full h-auto object-cover align-middle' />
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 max-w-full">
                            <div className="text-lightGreen text-[18px] font-normal">
                                <div className="flex align-baseline mt-[-10px]">
                                    <h3 className="text-[25px] md:text-[50px] max-sm:max-w-[400px] break-words font-semibold italic text-redtertiary leading-[1.2] font-[_Averia_Sans_Libre,_cursive]">{product.name} Attachakki</h3>

                                </div>

                                <div className="mt-[14px] flex items-center">
                                    <div className="flex items-center gap-2 text-golden">
                                        {[...Array(5)].map((_, i) => <FaStar key={i} className="text-[24px]" />)}

                                    </div>

                                </div>

                                <div className="border-t border-lightGray pt-[20px] mt-[20px]">
                                    <p className="m-0 text-[16px] md:text-[21px] leading-[40px]  break-words">
                                        Our Table Top flour mills are carefully engineered to give
                                        you trouble free performance for a long time and are well
                                        known for its effective functioning among our valued
                                        customers. Compared to other conventional models this
                                        has a reduced Size by 50%, Weight 50%, Price 50% but still
                                        an Output of 100%. Ideal for dry crushing, these flour mills
                                        are helpful in increased and faster production. Compact in
                                        size, these Tabletop flour mill require minimum space and
                                        yield dust-free operation. No product is wasted and no
                                        pollution is caused. These tabletop flour mills are used for
                                        grinding all types of wheat, pulses, dry items and other
                                        food products.
                                    </p>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section class="max-w-screensize mx-auto px-[15px] ">
                <div class="mx-auto">
                    <h2 class="mb-[30px] md:mb-[50px] text-[27px] md:text-[40px] text-redtertiary leading-[1.2] font-medium ">
                        {product.name} Attachakki Details :</h2>

                </div>

            </section>
        </>
    )
}

const DetailTable = () => {

    const ProductData = [
        { id: 1, name: "Model", specs: "Ruby" },
        { id: 2, name: "Cabinate Type", specs: "SS 202" },
        { id: 3, name: "Shape", specs: "Round" },
        { id: 4, name: "Grinding Capacity", specs: "Flour-4-6 KG/ HR | Dal-50 to 60 KG/ HR" },
        { id: 5, name: "Input Hopper", specs: "2.5 KG" },
        { id: 6, name: "Flour Container Size", specs: "5 KG" },
        { id: 7, name: "Stone Type", specs: "Emery" },
        { id: 8, name: "Electric Motor", specs: "1 HP" },
        { id: 9, name: "Motor Type", specs: "POWER SAVER" },
        { id: 10, name: "Electric Consumption", specs: "0.50 KW/ HR" },
        { id: 11, name: "RPM", specs: "960" },
        { id: 12, name: "Power Supply", specs: "240 VOLT, 50 HZ" },
        { id: 13, name: "Weight", specs: "26 KG (Approx)" },
        { id: 14, name: "Dimentions", specs: `12.5" * 12.5" * 23"` }
    ];


    return (
        <>
            <section className='max-w-screensize mx-auto py-[2rem] md:py-[3rem]'>
                <div class="px-[15px]">
                    <table className='md:w-full'>
                        <thead>
                            <tr className=' border-b border-lightGray'>
                                <th scope="col" className='text-[22px] md:text-[27px] text-redtertiary font-medium  pb-[25px] text-left pl-[30px]'> Type</th>

                                <th scope="col" className='text-[22px] md:text-[27px] text-redtertiary font-medium  pb-[25px] text-left '>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            {ProductData.map((data) => (
                                <tr className='border-b border-lightGray ' key={data.id}>
                                    <td className='py-[10px]'>
                                        <div class="flex items-center">
                                            <h3 class="m-0 text-[20px] md:text-[24px] text-redtertiary ml-[30px] font-medium">{data.name} :</h3>

                                        </div>

                                    </td>
                                    <td className='py-[10px] text-[18px] text-center md:text-left md:text-[20px] font-medium text-lightGreen'>{data.specs}</td>
                                </tr>
                            ))}






                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}

import hybridImage from "../assets/Images/hybrid.jpg"
import marvelImage from "../assets/Images/marvel.jpg"
import carnivalImage from "../assets/Images/carnival.jpg"
import WonderImage from "../assets/Images/wonder.jpg"
import talkyImage from "../assets/Images/talky.jpg"
import M4GImage from "../assets/Images/4g.jpg"
import M5GImage from "../assets/Images/5g.jpg"
import pulv2_3Hp from "../assets/Images/2HP-3HP-Commercial.jpg"
import pulv457Hp from "../assets/Images/4HP-5HP-7HP-Commercial.jpg"
import turbo2hp from "../assets/Images/turbo2hp-commercial.jpg"
import Topcard from './TopCard'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const allProducts = [
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
            name: "Talky",
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
        },
        {
            id: "turbo-2HP-attachakki",
            name: 'Turbo 2HP',
            capacity: '60-62 kg/hr',
            imageUrl: turbo2hp,
            descript:
                'Semi-automatic commercial flour mill with stainless steel chamber, 4 jali, and three-phase power. Features a bitter cutter and a 1-year warranty.',
        },
        {
            id: 'pulverizer-2HP',
            name: 'Pulverizer 2HP',
            imageUrl: pulv2_3Hp,
            capacity: '10-12 kg/hr',
            descript:
                'Fully automatic commercial flour mill with stainless steel chamber, 6 jali, and single-phase power. Consumes 1.5 units/hr with a 1-year warranty.',
        },
        {
            id: 'pulverizer-3HP',
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
            id: "pulverizer-7.5HP",
            name: 'Pulverizer 7.5HP',
            imageUrl: pulv457Hp,
            capacity: '60-62 kg/hr',
            descript:
                'Semi-automatic commercial flour mill with stainless steel chamber, 4 jali, and three-phase power. Features a bitter cutter and a 1-year warranty.',
        },
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
    ]

    const { productId } = useParams(); // Get productId from URL
    const product = allProducts.find((p) => p.id.toString() === productId);

    if (!product) {
        return <div>Product not found</div>;
    }


    return (
        <>
            <Topcard productName={product.name} />
            <ProductIntro product={product} />
            <DetailTable product={product} />

        </>
    )
}

export default ProductDetails
