"use client";
import React, { useState, useRef } from "react";
import { Dropdown, MainButton } from '../common';
import Icons from "../common/Icons";

const OurAccommodation = () => {
    const [rooms, setRooms] = useState([
        { adults: 1, children: 0 }
    ]);

    const [error, setError] = useState("");

    // Increase or decrease adults/children
    const updateCount = (index: number, field: "adults" | "children", type: "inc" | "dec") => {
        setRooms((prev) =>
            prev.map((room, i) => {
                if (i === index) {
                    const newVal =
                        type === "inc" ? room[field] + 1 : Math.max(0, room[field] - 1);

                    return { ...room, [field]: newVal };
                }
                return room;
            })
        );
    };

    const addRoom = () => {
        setRooms([...rooms, { adults: 1, children: 0 }]);
    };

    const handleSubmit = () => {
        setError("");

        // Simple validation
        if (!checkIn) {
            setError("Please enter your date of arrival using DD/MM/YYYY format.");
            return;
        }
    };

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    
    const checkInRef = useRef<HTMLInputElement>(null);
    const checkOutRef = useRef<HTMLInputElement>(null);
    
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-blue-dark mb-6">
                    Our accommodation(s)
                </h2>

                <div className="w-full border border-gray-200 rounded-xl p-4 md:p-6 relative shadow-sm">

                    {/* Main Layout */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">

                        {/* Check-in */}
                        <div className="flex flex-col w-full lg:flex-1">
                            <label className="font-medium text-blue-dark mb-1">Check-In</label>
                            <span className="text-xs text-gray-500 mb-2">e.g: 27/11/2025</span>

                            <div 
                                onClick={() => checkInRef.current?.showPicker()}
                                className={`border rounded-lg h-12 px-3 flex items-center justify-between hover:border-blue-300 transition-colors cursor-pointer ${error ? "border-red-500" : "border-gray-300"}`}
                            >
                                <input
                                    ref={checkInRef}
                                    type="date"
                                    value={checkIn}
                                    min={today}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    className="w-full outline-none bg-transparent text-sm cursor-pointer"
                                />
                                <span className="text-lg text-gray-400">📅</span>
                            </div>
                        </div>

                        {/* Check-out */}
                        <div className="flex flex-col w-full lg:flex-1">
                            <label className="font-medium text-blue-dark mb-1">Check-out</label>
                            <span className="text-xs text-gray-500 mb-2">e.g: 27/11/2025</span>

                            <div 
                                onClick={() => checkOutRef.current?.showPicker()}
                                className="border border-gray-300 rounded-lg h-12 px-3 flex items-center justify-between bg-gray-50 hover:border-blue-300 transition-colors cursor-pointer"
                            >
                                <input
                                    ref={checkOutRef}
                                    type="date"
                                    value={checkOut}
                                    min={checkIn || today}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    className="w-full outline-none bg-transparent text-sm cursor-pointer"
                                />
                                <span className="text-lg text-gray-400">📅</span>
                            </div>
                        </div>

                        {/* Guest Box Button */}
                        <div className="flex flex-col w-full lg:flex-1">
                            <label className="font-medium text-blue-dark md:mb-6">Guests</label>
                            <Dropdown
                                className="w-full"
                                dropdownClassName="w-[260px]"
                                trigger={
                                    <div className="border border-gray-300 rounded-lg h-12 px-3 flex items-center justify-between cursor-pointer hover:border-blue-300 transition-colors text-sm">
                                        <span>
                                            {rooms.length} room, {rooms.reduce((acc, r) => acc + r.adults, 0)} adult
                                            {rooms.reduce((acc, r) => acc + r.children, 0) > 0 && 
                                                `, ${rooms.reduce((acc, r) => acc + r.children, 0)} children`
                                            }
                                        </span>
                                        <span className="text-gray-400">
                                            <Icons icon="downarrow" />
                                        </span>
                                    </div>
                                }
                            >
                                <div className="p-4">
                                    {rooms.map((room, i) => (
                                        <div key={i} className="mb-4">
                                            <h4 className="font-semibold text-gray-700 mb-3">ROOM {i + 1}</h4>

                                            {/* Adults */}
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-gray-700">Adults</span>
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => updateCount(i, "adults", "dec")}
                                                        className="w-8 h-8 cursor-pointer flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                                    >
                                                        -
                                                    </button>
                                                    <span>{room.adults}</span>
                                                    <button
                                                        onClick={() => updateCount(i, "adults", "inc")}
                                                        className="w-8 h-8 cursor-pointer flex items-center justify-center rounded-full border text-blue-dark hover:bg-blue-50 transition-colors"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Children */}
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-700">Children</span>
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => updateCount(i, "children", "dec")}
                                                        className="w-8 cursor-pointer h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                                                    >
                                                        -
                                                    </button>
                                                    <span>{room.children}</span>
                                                    <button
                                                        onClick={() => updateCount(i, "children", "inc")}
                                                        className="w-8 cursor-pointer h-8 flex items-center justify-center rounded-full border text-blue-dark hover:bg-blue-50 transition-colors"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Add Room */}
                                    <div
                                        onClick={addRoom}
                                        className="text-blue-dark font-medium text-right cursor-pointer hover:text-[#2a2066] transition-colors"
                                    >
                                        Add a room
                                    </div>
                                </div>
                            </Dropdown>
                        </div>

                        {/* Button */}
                        <MainButton className="lg:mt-11" onClick={handleSubmit}>
                            See rates
                        </MainButton>
                    </div>

                    {/* Error Box */}
                    {error && (
                        <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                            <div className="font-medium mb-2">❌ 1 error</div>
                            <ul className="list-disc ml-6 text-sm">
                                <li>{error}</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OurAccommodation;
