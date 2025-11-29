import React from "react";

const Location = () => {
  return (
    <div className="w-full bg-white py-14 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-dark mb-8">Our Location</h2>

        {/* Google Map */}
        <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg mb-8">
          <iframe
            title="hotel-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.70147320305!2d73.762959!3d15.540654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfe90cf6b7b64b%3A0x4b6dab66f0cc73f2!2sCalangute%20Beach!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Hotel Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-blue-dark mb-4">
            Shyam Hotel
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Address */}
            <div>
              <h4 className="font-semibold text-blue-dark mb-3">Address</h4>
              <div className="text-off-black space-y-1">
                <p>Survey 166, Naikawaddo, Calangute Bardez</p>
                <p>403516 GOA, INDIA</p>
                <p className="text-sm text-gray-600 mt-2">GPS: 15.540654, 73.762959</p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold text-blue-dark mb-3">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  <a href="tel:+918326716000" className="text-blue-dark hover:text-blue-600 transition-colors">
                    +91 832 671 6000
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xl">📠</span>
                  <span className="text-off-black">+91 832 671 6099</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xl">📧</span>
                  <a
                    href="mailto:info@shyamhotel.com"
                    className="text-blue-dark hover:text-blue-600 transition-colors"
                  >
                    info@shyamhotel.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
