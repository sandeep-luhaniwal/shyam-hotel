"use client";

import React, { useState } from "react";
import Image from "next/image";
import Icons from "../common/Icons";

interface MediaItem {
    type: "image" | "video";
    src: string;
    category: "video" | "hotel" | "room";
}

const mediaData: MediaItem[] = [
    // ---- HOTEL CATEGORY ----
    { type: "image", src: "/images/webp/hall-one.webp", category: "hotel" },
    { type: "image", src: "/images/webp/hall-two.webp", category: "hotel" },
    { type: "image", src: "/images/webp/hall-three.webp", category: "hotel" },
    { type: "image", src: "/images/webp/hero.webp", category: "hotel" },

    // ---- ROOMS CATEGORY ----
    { type: "image", src: "/images/webp/room-deluxe-1.webp", category: "room" },
    { type: "image", src: "/images/webp/room-deluxe-2.webp", category: "room" },
    { type: "image", src: "/images/webp/room-executive-1.webp", category: "room" },
    { type: "image", src: "/images/webp/room-executive-2.webp", category: "room" },
    { type: "image", src: "/images/webp/room-family-suite.webp", category: "room" },
    { type: "image", src: "/images/webp/room-luxury-1.webp", category: "room" },
    { type: "image", src: "/images/webp/room-luxury-2.webp", category: "room" },
    { type: "image", src: "/images/webp/room-one.webp", category: "room" },
    { type: "image", src: "/images/webp/room-premium-1.webp", category: "room" },
    { type: "image", src: "/images/webp/room-premium-2.webp", category: "room" },
    { type: "image", src: "/images/webp/room-standard-1.webp", category: "room" },
    { type: "image", src: "/images/webp/room-standard-2.webp", category: "room" },
    { type: "image", src: "/images/webp/room-suite-1.webp", category: "room" },
    { type: "image", src: "/images/webp/room-three.webp", category: "room" },
    { type: "image", src: "/images/webp/room-two.webp", category: "room" },
];

const ImageVideoSlider = () => {
    const [activeCategory, setActiveCategory] = useState<"video" | "hotel" | "room">("hotel");
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredItems = mediaData.filter((item) => item.category === activeCategory);
    const hotelCount = mediaData.filter((item) => item.category === "hotel").length;
    const roomCount = mediaData.filter((item) => item.category === "room").length;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? filteredItems.length - 1 : prev - 1
        );
    };

    return (
        <div className="relative w-full">

            <div className="relative h-[420px] w-full overflow-hidden rounded- bg-black">
                {filteredItems[currentIndex].type === "image" ? (
                    <Image
                        src={filteredItems[currentIndex].src}
                        alt="media"
                        fill
                        className="object-cover"
                    />
                ) : (
                    <video src={filteredItems[currentIndex].src} autoPlay muted loop className="w-full h-full object-cover" />
                )}

                <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-40 px-3 py-1 text-sm">
                    {currentIndex + 1} / {filteredItems.length}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 bg-black/80 p-2 rounded-full shadow-md"
                >
                    <Icons icon="next" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 bg-black/80 p-2 rounded-full shadow-md"
                >
                    <Icons icon="prev" />
                </button>


            </div>
            <div className="flex gap-6 mt-4 px-4 text-gray-800 font-medium select-none">
                <button
                    onClick={() => {
                        setActiveCategory("hotel");
                        setCurrentIndex(0);
                    }}
                    className={`${activeCategory === "hotel" && "font-bold"} cursor-pointer text-blue-dark`}
                >
                    Hotel ({hotelCount})
                </button>

                <button
                    onClick={() => {
                        setActiveCategory("room");
                        setCurrentIndex(0);
                    }}
                    className={`${activeCategory === "room" && "font-bold"} cursor-pointer text-blue-dark`}
                >
                    Rooms ({roomCount})
                </button>
            </div>

            {/* Thumbnails */}
            <div className="mt-2 px-4">
                <div
                    className="flex gap-3 overflow-x-auto pb-3 px-1"
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#9CA3AF #E5E7EB'
                    }}
                >
                    {filteredItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative shrink-0 w-20 h-16 overflow-hidden border-2 cursor-pointer hover:border-blue-400 hover:shadow-md transition-all duration-200 transform hover:scale-105
                ${index === currentIndex ? "border-blue-dark shadow-lg scale-105" : "border-black/50"}`}
                        >
                            {item.type === "image" ? (
                                <Image src={item.src} alt="thumb" fill className="object-cover" />
                            ) : (
                                <video src={item.src} className="object-cover w-full h-full" />
                            )}
                            {index === currentIndex && (
                                <div className="absolute inset-0 bg-blue-600/20"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageVideoSlider;
