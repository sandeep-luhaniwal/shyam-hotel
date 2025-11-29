
"use client"
import React, { useState } from 'react'
import { MainButton } from '../common'
import HotelServicesFull from './HotelServicesFull'

const servicesLeft = [
  { icon: "🏊", title: "Swimming Pool" },
  { icon: "♿", title: "Wheelchair Accessible" },
  { icon: "📶", title: "Free Wi-Fi" },
  { icon: "🍹", title: "Bar & Lounge" },
  { icon: "🛎️", title: "24/7 Room Service" },
];

const servicesRight = [
  { icon: "🍴", title: "Multi-cuisine Restaurant" },
  { icon: "🏋️", title: "Fitness Center" },
  { icon: "❄️", title: "Air Conditioning" },
  { icon: "👥", title: "Conference Rooms" },
  { icon: "🎅", title: "Concierge Service" },
];

const Services = () => {
  const [showServicesPopup, setShowServicesPopup] = useState(false);

  return (
    <div className="bg-white py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-dark mb-6">Hotel Services & Amenities</h2>

        {/* Check-in Time */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-3 text-blue-dark">
            <span className="text-xl">🕒</span>
            <p className="font-medium">
              Check-in: 2:00 PM | Check-out: 12:00 PM
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 max-w-3xl mx-auto">
          {/* Left Column */}
          <div>
            <h3 className="font-semibold text-blue-dark mb-1 text-lg">Premium Facilities</h3>
            <div className="space-y-3">
              {servicesLeft.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-off-black font-light text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="font-semibold text-blue-dark mb-1 text-lg">Additional Services</h3>
            <div className="space-y-3">
              {servicesRight.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                   <p className="text-off-black font-light text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <MainButton onClick={() => setShowServicesPopup(true)}>
            View All Services
          </MainButton>
        </div>

        {/* Services Popup */}
        {showServicesPopup && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowServicesPopup(false)}>
            <div className="bg-white rounded-lg max-w-5xl w-full h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center p-4 border-b shrink-0">
                <h3 className="text-xl font-semibold text-blue-dark">Hotel Services & Facilities</h3>
                <button 
                  onClick={() => setShowServicesPopup(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <HotelServicesFull />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



export default Services
