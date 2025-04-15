import React from 'react';
import Topcard from './TopCard';

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

const DownloadBox = () => {
    // Light red color scheme
    const colors = {
        primary: 'bg-white', // Light red background
        hover: 'hover:bg-red-50', // Slightly darker on hover
        text: 'text-redtertiary', // Darker red text for contrast
        button: 'bg-red-500', // Stronger red for buttons
        buttonHover: 'hover:bg-red-600', // Darker red on button hover
    };

    const downloads = [
        {
            name: 'Brochure',
            fileType: 'PDF',
            description: 'Download our latest brochure',
            url: '/path-to-brochure.pdf',
        },
        {
            name: 'Mobile App',
            fileType: 'APK',
            description: 'Get our mobile application',
            url: 'https://mahalaxmiattachakki.com/apk/app-release.apk',
        },
        {
            name: 'Company Details',
            fileType: 'PDF',
            description: 'View our company information',
            url: '/path-to-company-details.pdf',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center  ">
            <div className="max-w-screensize mx-auto px-4 sm:px-6 lg:px-8">
                <div className=''>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                        {downloads.map((item, index) => (
                            <div
                                key={index}
                                className={`${colors.primary} h-[400px]  shadow-gray-300 rounded-[35px] shadow-md p-6 text-center transition-all duration-300 flex items-center justify-center ${colors.hover}`}
                            >
                                <div>
                                    <h3 className={`text-xl md:text-[32px] font-semibold ${colors.text} mb-2`}>
                                        {item.name}
                                    </h3>
                                    <p className="text-darkGreen mb-4 text-[16px] md:text-[24px] font-medium">{item.description}</p>
                                    <p className="text-sm md:text-[17px] text-gray-500 mb-4">File Type: {item.fileType}</p>
                                    <a
                                        href={item.url}
                                        download
                                        className={`${colors.button} text-white font-medium py-2 px-4 rounded-md transition-all duration-300 ${colors.buttonHover}`}
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};



const Download = () => {
    return (
        <>
            <Topcard />
            <DownloadBox />

        </>
    )
}

export default Download