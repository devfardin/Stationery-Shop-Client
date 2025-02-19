import { useEffect, useState } from 'react';
import Container from '../../components/share/Container'
import SectionHeading from '../../components/share/SectionHeading'
import { Swiper, SwiperSlide } from "swiper/react";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { Navigation } from "swiper/modules";
type TTestimonial = {
    name: string,
    image: string,
    rating: string,
    comment: string,
}
const Testimonials = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./testimonials.json')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    return (
        <div className="mt-20">
            <Container>
                <div>
                    <SectionHeading title="What They Say" subTitle='CUSTOMER TESTIMONIALS' />

                    <div className="relative group">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            breakpoints={{

                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[Navigation]}
                            loop={true}
                            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                            pagination={{
                                clickable: true,
                            }}
                            className="mySwiper"
                        >
                            {data?.map((items: TTestimonial) => (
                                <SwiperSlide key={items?.name}>
                                    <div className="bg-[#F8F8F8] p-10 rounded-bl-3xl rounded-tr-3xl">
                                        <div className='flex items-center gap-4'>
                                            <img className='w-[100px] h-[100px] rounded-full' src={items?.image} alt="Client Profile" />
                                            <div>
                                                <h1 className='text-xl text-black font-bold'>{items?.name}</h1>
                                                <span className='text-lg font-medium text-neutral-500'>{items?.rating} ⭐</span>
                                            </div>
                                        </div>
                                        <div className='mt-2'>
                                            <p className='text-base font-normal text-neutral-600'>{items?.comment}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="absolute z-10 top-1/2 -left-5 scale-100 md:scale-0 group-hover:scale-100 transition-all duration-300">
                            <span className="border bg-neutral-100 float-right group arrow-left border-primary rounded-full hover:border-secondary hover:bg-secondary group  duration-300 transition-all p-3 cursor-pointer">
                                <SlArrowLeft className="text-xl !text-primary duration-300
                 transition-all group-hover:text-white hover:text-white" />
                            </span>
                        </div>
                        <div className="absolute -right-5 z-10 top-1/2 scale-100 md:scale-0 group-hover:scale-100 transition-all duration-300">
                            <span className="border bg-neutral-100 float-right group arrow-left border-primary rounded-full hover:border-secondary hover:bg-secondary group  duration-300 transition-all p-3 cursor-pointer">
                                <SlArrowRight className="text-xl !text-primary duration-300
                 transition-all group-hover:text-white hover:text-white" />
                            </span>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Testimonials
