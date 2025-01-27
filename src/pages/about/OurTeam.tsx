import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import { Navigation, Autoplay } from 'swiper/modules';
import Container from '../../components/share/Container';

const OurTeam = () => {
    const team = [
        {
            name: ' Abraham Lincon ',
            title: ' Chairman ',
            prifile: 'https://toyman-demo.myshopify.com/cdn/shop/files/team6-copyright-570x696.jpg?v=1676527033',
        },
        {
            name: 'Brook Listner',
            title: '  Manager  ',
            prifile: 'https://toyman-demo.myshopify.com/cdn/shop/files/team4-copyright-570x696.jpg?v=1676527033',
        },
        {
            name: ' Abraham Lincon ',
            title: ' Chairman ',
            prifile: 'https://toyman-demo.myshopify.com/cdn/shop/files/team5-copyright-570x696.jpg?v=1676527033',
        },
        {
            name: 'Brook Listner',
            title: '  Manager  ',
            prifile: 'https://toyman-demo.myshopify.com/cdn/shop/files/team3-copyright-570x696.jpg?v=1676527033',
        },
        {
            name: ' Abraham Lincon ',
            title: ' Chairman ',
            prifile: 'https://toyman-demo.myshopify.com/cdn/shop/files/team6-copyright-570x696.jpg?v=1676527033',
        },
        {
            name: 'Brook Listner',
            title: '  Manager  ',
            prifile: 'https://toyman-demo.myshopify.com/cdn/shop/files/team4-copyright-570x696.jpg?v=1676527033',
        },
    ]
    return (
        <div className='mt-14 md:mt-20'>
            <Container>
               <div>
               <div className='flex justify-between items-center gap-10'>
                    
                        <h1 className='text-3xl text-heading font-medium'>Out Team</h1>
                    <div className='flex items-center justify-between gap-3'>
                        <span className='border arrow-right group border-[#dddddd] hover:border-primary  duration-300 transition-all p-3 cursor-pointer'>
                            <SlArrowLeft className='text-lg text-neutral-500 duration-300 transition-all group-hover:text-primary' />
                        </span>
                        <span className='border group arrow-left border-[#dddddd] hover:border-primary  duration-300 transition-all p-3 cursor-pointer'>
                            <SlArrowRight className='text-lg  text-neutral-500 duration-300 transition-all group-hover:text-primary' />
                        </span>
                    </div>
                </div>
                <div className='mt-5'>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}

                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}

                        loop={true}
                        modules={[Navigation, Autoplay]}

                        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}

                        className="mySwiper">
                        {
                            team.map((item, index) => <SwiperSlide key={index}>
                                <div className='border border-[#e9e9e9] p-4'>
                                    <img className='w-full' src={item.prifile} alt="" />
                                    <div className='mt-3'>
                                        <h1 className='text-2xl font-medium text-heading'>{item.name}</h1>
                                        <h4 className='text-base font-normal text-pera'>{item.title}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
               </div>
            </Container>
        </div>
    )
}

export default OurTeam