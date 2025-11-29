
"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { MainButton } from '../common';
import Image from 'next/image';

const roomsData = [
    {
        id: 1,
        title: "Deluxe Room with City View",
        maxPersons: 2,
        size: "25 m² / 269 sq ft",
        bed: "1 x Queen size bed",
        view: "City view",
        price: "8,999",
        images: ["/images/webp/room-deluxe-1.webp"],
    },
    {
        id: 2,
        title: "Executive Suite with Balcony",
        maxPersons: 3,
        size: "35 m² / 377 sq ft",
        bed: "1 x King size bed",
        view: "Garden view",
        price: "12,499",
        images: ["/images/webp/room-executive-1.webp"],
    },
    {
        id: 3,
        title: "Luxury Suite with Pool View",
        maxPersons: 4,
        size: "45 m² / 484 sq ft",
        bed: "1 x King size bed + Sofa bed",
        view: "Pool view",
        price: "18,999",
        images: ["/images/webp/room-luxury-1.webp"],
    },
    {
        id: 4,
        title: "Luxury Suite with Pool View",
        maxPersons: 4,
        size: "45 m² / 484 sq ft",
        bed: "1 x King size bed + Sofa bed",
        view: "Pool view",
        price: "18,999",
        images: ["/images/webp/room-luxury-1.webp"],
    },
];

const RoomPriceDetails = () => {
    const [activeTab, setActiveTab] = useState('rooms');

    return (
        <div className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Title */}
                <h2 className="text-2xl font-bold text-blue-dark mb-6 text-center">
                    Available Rooms & Suites
                </h2>

                {/* Tabs */}
                <div className="flex justify-center gap-8 mb-8">
                    <button
                        onClick={() => setActiveTab('rooms')}
                        className={`pb-2 font-medium transition-colors ${activeTab === 'rooms'
                                ? 'text-blue-dark border-b-2 border-blue-dark'
                                : 'text-gray-500 hover:text-blue-dark'
                            }`}
                    >
                        Rooms ({roomsData.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('accessible')}
                        className={`pb-2 font-medium transition-colors ${activeTab === 'accessible'
                                ? 'text-blue-dark border-b-2 border-blue-dark'
                                : 'text-gray-500 hover:text-blue-dark'
                            }`}
                    >
                        Accessible Rooms (2)
                    </button>
                </div>

                {/* Room Slider */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-12"
                >
                    {roomsData.map((room) => (
                        <SwiperSlide key={room.id}>
                            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={room.images[0]}
                                        alt={room.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                        📸 5 photos
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <div className="text-xs text-gray-500 font-medium mb-1">ROOM</div>
                                    <h3 className="text-lg font-semibold text-blue-dark mb-3">{room.title}</h3>

                                    {/* Features */}
                                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                                        <div className="flex items-center gap-2">
                                            <span>👥</span>
                                            <span>{room.maxPersons} guests max</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>📏</span>
                                            <span>{room.size}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>🛏</span>
                                            <span>{room.bed}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>🌅</span>
                                            <span>{room.view}</span>
                                        </div>
                                    </div>

                                    <button className="text-blue-dark text-sm font-medium hover:underline mb-4">
                                        View room details
                                    </button>

                                    {/* Price */}
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-sm text-gray-600">Per night</span>
                                        <div className="text-right">
                                            <span className="text-lg font-bold text-blue-dark">₹{room.price}</span>
                                            <div className="text-xs text-gray-500">+ taxes</div>
                                        </div>
                                    </div>

                                    {/* Book Button */}
                                    <MainButton className="w-full">
                                        Book Now
                                    </MainButton>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Custom Navigation Buttons */}
                    <div className="swiper-button-prev text-blue-dark w-10 h-10 mt-0 top-1/2 -left-5 bg-white rounded-full shadow-md after:text-lg after:font-bold"></div>
                    <div className="swiper-button-next text-blue-dark w-10 h-10 mt-0 top-1/2 -right-5 bg-white rounded-full shadow-md after:text-lg after:font-bold"></div>
                </Swiper>
            </div>
        </div>
    );
}


export default RoomPriceDetails
