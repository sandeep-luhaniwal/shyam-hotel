"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { MainButton } from "../common";
import Image from "next/image";
import { Niconne } from "next/font/google";

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
  const [activeTab, setActiveTab] = useState("rooms");

  return (
    <div className="py-10 mx-4 sm:mx-10 xl:mx-16">
      <div className="max-w-[896px] mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-blue-dark mb-6 text-center">
          Available Rooms & Suites
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-8">
          <button
            onClick={() => setActiveTab("rooms")}
            className={`pb-2 font-medium transition-colors ${
              activeTab === "rooms"
                ? "text-blue-dark border-b-2 border-blue-dark"
                : "text-gray-500 hover:text-blue-dark"
            }`}
          >
            Rooms ({roomsData.length})
          </button>
          <button
            onClick={() => setActiveTab("accessible")}
            className={`pb-2 font-medium transition-colors ${
              activeTab === "accessible"
                ? "text-blue-dark border-b-2 border-blue-dark"
                : "text-gray-500 hover:text-blue-dark"
            }`}
          >
            Accessible Rooms (2)
          </button>
        </div>

        {/* Room Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={24}
          slidesPerView={2}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
          }}
          className="pb-12 !px-5 sm:!px-14"
        >
          {roomsData.map((room) => (
            <SwiperSlide key={room.id} className="xl:max-w-[362px]">
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
                  <div className="text-xs text-gray-500 font-medium mb-1">
                    ROOM
                  </div>
                  <h3 className="text-lg font-semibold text-blue-dark mb-3">
                    {room.title}
                  </h3>

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
                      <span className="text-lg font-bold text-blue-dark">
                        ₹{room.price}
                      </span>
                      <div className="text-xs text-gray-500">+ taxes</div>
                    </div>
                  </div>

                  {/* Book Button */}
                  <MainButton className="w-full">Book Now</MainButton>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !w-[30px] !h-[30px] sm:!w-10 sm:!h-10 flex items-center justify-center bg-white border border-[#3e3d48] rounded-full shadow-sm cursor-pointer transition-all duration-200">
            <svg
              className="!w-[15px] !h-[15px]"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.04756 11.9254L5.97004 12.9686L0.282494 7.10151C0.190805 7.0075 0.118614 6.89627 0.0700771 6.77424C0.0215399 6.65222 -0.0023858 6.52179 -0.000323013 6.39048C0.00173977 6.25917 0.0297503 6.12957 0.0820965 6.00913C0.134443 5.88868 0.210091 5.77978 0.304688 5.68869L6.17376 0.000174917L7.21698 1.07669L1.70844 6.41583L7.04756 11.9254Z"
                fill="#3e3d48"
              />
            </svg>
          </div>
          <div className="swiper-button-next !w-[30px] !h-[30px] sm:!w-10 sm:!h-10 flex items-center justify-center bg-white border border-[#3e3d48] rounded-full shadow-sm cursor-pointer transition-all duration-200">
            <svg
              className="!w-[15px] !h-[15px]"
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-0.000161171 1.06021L1.06084 0.00021553L6.83984 5.77722C6.93299 5.86978 7.00692 5.97986 7.05737 6.10111C7.10782 6.22236 7.13379 6.35239 7.13379 6.48372C7.13379 6.61504 7.10782 6.74507 7.05737 6.86632C7.00692 6.98757 6.93299 7.09765 6.83984 7.19021L1.06084 12.9702L0.000838757 11.9102L5.42484 6.48521L-0.000161171 1.06021Z"
                fill="#3e3d48"
              />
            </svg>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default RoomPriceDetails;
