"use client"
import React, { useState } from 'react'
import { MainButton } from '../common'

const HotelInfoAccordion = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-blue-200 rounded-lg overflow-hidden">
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-50 p-4 cursor-pointer hover:bg-blue-100 transition-colors"
            >
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-blue-dark">Hotel Information</h4>
                    <span className={`text-blue-dark transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`}>⌄</span>
                </div>
            </div>
            
            <div className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="p-4 bg-white border-t border-blue-200">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        We request our valued guests to stay alert against fraudulent websites or phone numbers. Please make payments only through official channels and verified booking platforms.
                    </p>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-gray-600 text-xs">
                            For any queries or assistance, please contact our 24/7 customer support team.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ReviewPlace = () => {
    return (
        <div className="bg-white py-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-blue-dark mb-3">Shyam Hotel</h2>
                            <p className="text-gray-600 font-medium mb-4">
                                Premium hospitality experience with modern amenities
                            </p>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Experience luxury and comfort at Shyam Hotel, where traditional hospitality meets modern convenience. Our elegantly designed rooms and suites offer stunning views and world-class amenities to ensure your stay is memorable.
                                </p>
                                <p>
                                    Guests can enjoy our state-of-the-art fitness center, spa services, 24-hour concierge, business center, and complimentary Wi-Fi throughout the property. Our multiple dining options cater to diverse culinary preferences.
                                </p>
                                <p>
                                    Located in the heart of the city, Shyam Hotel provides easy access to major attractions, shopping districts, and business centers, making it the perfect choice for both leisure and business travelers.
                                </p>
                            </div>
                            <div className="mt-6">
                                <p className="text-blue-dark font-semibold text-lg">
                                    "We are committed to providing exceptional service and unforgettable experiences!"
                                </p>
                                <p className="text-gray-600 text-sm font-medium mt-2">Shyam Singh, General Manager</p>
                            </div>
                        </div>

                        {/* Hotel Info Accordion */}
                        <HotelInfoAccordion />
                    </div>

                    {/* Right Section */}
                    <div>
                        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-semibold text-blue-dark mb-4">Hotel Amenities</h3>
                            <ul className="space-y-3 text-gray-700 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Prime location in city center</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Complimentary breakfast buffet</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Modern conference & event facilities</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Rooftop swimming pool & fitness center</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>24/7 room service & concierge</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span>Free high-speed Wi-Fi</span>
                                </li>
                            </ul>
                        </div>

                        {/* Button */}
                        <div className="mt-6">
                            <MainButton className="w-full">
                                See Rates & Book Now
                            </MainButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewPlace