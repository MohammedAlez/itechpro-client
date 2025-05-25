'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import SectionTitle from "../Global/SectionTitle";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
    {
        name: 'Sarah Mitchell',
        role: 'Graphic Designer',
        img: '/testimonials/sarah.png',
        review: 'Incredible service! I needed a high-performance workstation for my design work and Yakoub helped me find the perfect setup. The custom build exceeded my expectations and fits my budget perfectly.',
        rating: 5,
        purchase: 'Custom Gaming PC'
    },
    {
        name: 'Ahmed Benali',
        role: 'Software Developer',
        img: '/testimonials/ahmed.png',
        review: 'Best tech store in the city! Got my MacBook Pro here at an amazing price. The team is knowledgeable and honest about what you actually need. Will definitely come back for future purchases.',
        rating: 5,
        purchase: 'MacBook Pro M2'
    },
    {
        name: 'Emma Rodriguez',
        role: 'University Student',
        img: '/testimonials/emma.png',
        review: 'As a student on a tight budget, I was worried about finding a reliable laptop. The staff here found me a refurbished ThinkPad that works like new. Great quality and unbeatable price!',
        rating: 5,
        purchase: 'Refurbished ThinkPad'
    },
    {
        name: 'Mohamed Kaddour',
        role: 'Business Owner',
        img: '/testimonials/mohamed.png',
        review: 'Needed to upgrade our entire office setup. They provided excellent bulk pricing and professional installation. Our productivity has increased significantly with the new equipment.',
        rating: 5,
        purchase: 'Office Equipment Bundle'
    },
    {
        name: 'Lisa Chen',
        role: 'Content Creator',
        img: '/testimonials/lisa.png',
        review: 'The gaming setup they built for my streaming is absolutely perfect! Every component was carefully selected for optimal performance. My viewers have noticed the quality improvement immediately.',
        rating: 5,
        purchase: 'Streaming PC Setup'
    },
    {
        name: 'Karim Oussama',
        role: 'IT Manager',
        img: '/testimonials/karim.png',
        review: 'Professional service from start to finish. They understood our enterprise needs and delivered server solutions that have been running flawlessly for months. Highly recommended for businesses.',
        rating: 5,
        purchase: 'Server Infrastructure'
    }
];

export function Testimonials() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <SectionTitle 
                        title="CE QUE DISENT NOS " 
                        colored="CLIENTS" 
                        subTitle="Découvrez pourquoi ils nous font confiance"
                    />
                </div>

                <div className="relative">
                    {/* Background decoration */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none py-10">
                        <RiDoubleQuotesL className="text-primary w-96 h-96" />
                    </div>

                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        className="testimonials-swiper pt-10"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={testimonial.name}>
                                <div className="group relative h-full">
                                    {/* Card */}
                                    <div className="my-10 bg-white min-h-[500px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out p-8 py-16 border border-gray-100 hover:border-primary/30 transform hover:-translate-y-3 hover:scale-[0.98] h-full flex flex-col">
                                        {/* Quote icon */}
                                        <div className="absolute top-4 left-8">
                                            <div className="bg-primary text-white p-3 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
                                                <FaQuoteRight className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1 mb-4 pt-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <FaStar 
                                                    key={i} 
                                                    className="text-yellow-400 w-4 h-4 transition-transform duration-300 group-hover:scale-125" 
                                                    style={{ transitionDelay: `${i * 50}ms` }}
                                                />
                                            ))}
                                        </div>

                                        {/* Review text */}
                                        <p className="text-gray-700 min-h-[60px] font-medium leading-relaxed mb-6 text-sm flex-grow">
                                            "{testimonial.review}"
                                        </p>

                                        {/* Purchase info */}
                                        <div className="bg-gray-50 group-hover:bg-primary/5 rounded-lg p-3 mb-6 transition-colors duration-300">
                                            <span className="text-xs text-gray-500 font-medium">Achat récent:</span>
                                            <p className="text-sm font-semibold text-primary">{testimonial.purchase}</p>
                                        </div>

                                        {/* Author info */}
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <Image 
                                                    src={'/user.png'} 
                                                    alt={testimonial.name}
                                                    width={60} 
                                                    height={60} 
                                                    className="rounded-full object-cover border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-110"
                                                />
                                                <div className="absolute -bottom-1 -right-1 bg-green-400 w-4 h-4 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-125 group-hover:bg-green-500"></div>
                                            </div>
                                            <div className="transition-transform duration-300 group-hover:translate-x-1">
                                                <h4 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors duration-300">{testimonial.name}</h4>
                                                <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                            </div>
                                        </div>

                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Stats section */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                        <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                        <div className="text-gray-600 text-sm">Clients Satisfaits</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                        <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">4.9/5</div>
                        <div className="text-gray-600 text-sm">Note Moyenne</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                        <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">3 ans</div>
                        <div className="text-gray-600 text-sm">D'Expérience</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                        <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                        <div className="text-gray-600 text-sm">Support Client</div>
                    </div>
                </div>
            </div>
        </section>
    );
}