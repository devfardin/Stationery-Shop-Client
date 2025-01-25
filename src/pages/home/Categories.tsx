/* eslint-disable @typescript-eslint/no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Container from "../../components/share/Container";
import SectionHeading from "../../components/share/SectionHeading";
const Categories = () => {
    const [categorys, setCategorys] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch("./category.json")
            .then((res) => res.json())
            .then((data) => {
                setCategorys(data);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setLoading(true);
        fetch("./products.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="mt-20">
            <Container>
                <div>
                    <SectionHeading title="We design toys not just for kids
                but with kids"/>

                    <div className="relative group">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1400: {
                                    slidesPerView: 5,
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
                            {categorys.map((category, index) => (
                                <SwiperSlide key={index}>
                                    <div className="">
                                        <img src={category?.image} className="w-full rounded-xl" alt="" />
                                        <div className="flex flex-row items-center justify-between mt-3 px-2">
                                            <h2 className="text-lg font-normal text-heading">
                                                {category?.category}
                                            </h2>

                                            {/* Category items */}
                                            <h3 className="text-sm font-medium text-black opacity-70 before:w-12 before:h-0.5 before:bg-[#cccccc]">
                                            <span className="before:absolute before:content-[''] before:h-[1px] before:bg-[#ccc] before:w-14 before:right-2 before:top-1/2 relative flex-1"></span>
                                                {
                                                    products.filter(
                                                        (product) => product.category === category.category
                                                    ).length
                                                }

                                            </h3>
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
    );
};
export default Categories;
