'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import Paragraph from '../common/Paragraph';
import ImageVideoSlider from './ImageVideoSlider';
import { Icon } from 'lucide-react';
import Icons from '../common/Icons';

// Shared media data
const mediaData = [
  // Hotel images
  '/images/webp/hall-one.webp',
  '/images/webp/hall-two.webp', 
  '/images/webp/hall-three.webp',
  '/images/webp/hero.webp',
  // Room images
  '/images/webp/room-deluxe-1.webp',
  '/images/webp/room-deluxe-2.webp',
  '/images/webp/room-executive-1.webp',
  '/images/webp/room-executive-2.webp',
  '/images/webp/room-family-suite.webp',
  '/images/webp/room-luxury-1.webp',
  '/images/webp/room-luxury-2.webp',
  '/images/webp/room-one.webp',
  '/images/webp/room-premium-1.webp',
  '/images/webp/room-premium-2.webp',
  '/images/webp/room-standard-1.webp',
  '/images/webp/room-standard-2.webp',
  '/images/webp/room-suite-1.webp',
  '/images/webp/room-three.webp',
  '/images/webp/room-two.webp',
];

const Hero = () => {
    const [showPopup, setShowPopup] = useState(false);

    const images = [
        '/images/webp/room-luxury-1.webp',
        '/images/webp/room-deluxe-1.webp',
        '/images/webp/hall-one.webp',
        '/images/webp/room-suite-1.webp'
    ];
    
    const totalPhotos = mediaData.length;

    const getVisibleImages = () => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width >= 1024) return images; // lg: 4 images
            if (width >= 768) return images.slice(0, 3); // md: 3 images  
            if (width >= 640) return images.slice(0, 2); // sm: 2 images
            return images.slice(0, 1); // mobile: 1 image
        }
        return images;
    };

    const [visibleImages, setVisibleImages] = useState(getVisibleImages());

    React.useEffect(() => {
        const handleResize = () => setVisibleImages(getVisibleImages());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="max-w-[1920px] mx-auto px-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {visibleImages.map((src, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-sm cursor-pointer" onClick={() => setShowPopup(true)}>
                        <Image
                            src={src}
                            alt={`Hotel image ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        {index === visibleImages.length - 1 && (
                            <div className="absolute bottom-2 right-2 max-w-max rounded-full bg-black/50 px-3 py-2">
                                <Paragraph sm className='flex items-center gap-2'>
                                    <Icons icon='copy' /> {totalPhotos} photos
                                </Paragraph>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {showPopup && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setShowPopup(false)}>
                    <div className="bg-white rounded-lg relative max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>

                         <button className='absolute top-3 cursor-pointer right-3 z-20'
                                onClick={() => setShowPopup(false)}
                            >
                                <Icons icon='cross' />
                            </button>
                        <ImageVideoSlider />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Hero
