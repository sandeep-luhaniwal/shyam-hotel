import React, { useState } from "react";
import Icons from "../common/Icons";

// Reusable Section Component
const Section = ({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <span className="text-xl font-semibold text-blue-dark">{title}</span>
        </div>
        <span className={`text-blue-dark transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <Icons icon="downarrow" />
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${
        open ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}>
        <div className="text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function HotelServicesFull() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-dark mb-8">
          Complete Hotel Services & Facilities
        </h2>

        {/* Quick Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-blue-dark mb-4">Premium Facilities</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-3">🏊 Swimming Pool</li>
              <li className="flex items-center gap-3">♿ Wheelchair Accessible</li>
              <li className="flex items-center gap-3">📶 Free Wi-Fi</li>
              <li className="flex items-center gap-3">🍹 Bar & Lounge</li>
              <li className="flex items-center gap-3">🛎️ 24/7 Room Service</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-blue-dark mb-4">Additional Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-3">🍴 Multi-cuisine Restaurant</li>
              <li className="flex items-center gap-3">🏋️ Fitness Center</li>
              <li className="flex items-center gap-3">❄️ Air Conditioning</li>
              <li className="flex items-center gap-3">👥 Conference Rooms</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          {/* Accessibility Section */}
          <Section title="Accessibility" icon="♿">
            <p>Our hotel is fully wheelchair accessible with ramps, elevators, and specially designed rooms for guests with mobility needs.</p>
          </Section>

          {/* Hotel Information */}
          <Section title="Hotel Information" icon="🏨">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-dark">Hotel Details</h4>
                <ul className="space-y-2">
                  <li>✓ 150 well-appointed rooms</li>
                  <li>✓ Accessible rooms available</li>
                  <li>✓ 100% non-smoking rooms</li>
                  <li>✓ 8 floors with elevator access</li>
                </ul>

                <h4 className="font-semibold mt-6 mb-3 text-blue-dark">Connectivity</h4>
                <ul className="space-y-2">
                  <li>✓ Complimentary Wi-Fi throughout</li>
                  <li>✓ High-speed internet in rooms</li>
                  <li>✓ Business center facilities</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-blue-dark">Guest Services</h4>
                <ul className="space-y-2">
                  <li>✓ 24/7 front desk</li>
                  <li>✓ Concierge services</li>
                  <li>✓ Luggage storage</li>
                  <li>✓ Laundry & dry cleaning</li>
                  <li>✓ Safe deposit boxes</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Dining */}
          <Section title="Dining & Catering" icon="🍽️">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-dark">Restaurant</h4>
                <p>Multi-cuisine restaurant serving Indian, Continental, and Asian dishes.</p>
                
                <h4 className="font-semibold mt-6 mb-3 text-blue-dark">Room Service</h4>
                <ul className="space-y-2">
                  <li>✓ 24/7 room service</li>
                  <li>✓ In-room dining menu</li>
                  <li>✓ Special dietary requirements</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-blue-dark">Bar & Lounge</h4>
                <p>Rooftop bar with city views and premium beverages.</p>
              </div>
            </div>
          </Section>

          {/* Family Services */}
          <Section title="Family Services" icon="👨‍👩‍👧">
            <h4 className="font-semibold mb-3 text-blue-dark">Children's Facilities</h4>
            <ul className="space-y-2">
              <li>✓ Kids' play area</li>
              <li>✓ Children's pool section</li>
              <li>✓ Baby crib available on request</li>
              <li>✓ Family rooms available</li>
            </ul>
          </Section>

          {/* Wellness */}
          <Section title="Wellness & Recreation" icon="🧘">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-dark">Swimming Pool</h4>
                <ul className="space-y-2">
                  <li>✓ Outdoor swimming pool</li>
                  <li>✓ Pool deck with loungers</li>
                  <li>✓ Pool bar service</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-dark">Fitness Center</h4>
                <ul className="space-y-2">
                  <li>✓ Modern gym equipment</li>
                  <li>✓ 24/7 access for guests</li>
                  <li>✓ Personal trainer available</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Business Services */}
          <Section title="Business & Events" icon="💼">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-dark">Meeting Facilities</h4>
                <ul className="space-y-2">
                  <li>✓ 3 conference rooms</li>
                  <li>✓ Audio-visual equipment</li>
                  <li>✓ Catering services</li>
                  <li>✓ Event planning assistance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-dark">Business Center</h4>
                <ul className="space-y-2">
                  <li>✓ Printing & copying</li>
                  <li>✓ Fax services</li>
                  <li>✓ Computer workstations</li>
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}