"use client"
import React, { useEffect, useState } from 'react';

const movies = [
    // Add your movie data here
    // Each movie should have a title and an image URL
    { title: 'Movie 1', image: 'image-1.webp', description: 'aaa aaaaaa aaaaaaa' },
    { title: 'Movie 2', image: 'image-2.webp', description: 'bbbbbbb bbbbb bbbbbb' },
    { title: 'Movie 3', image: 'image-3.webp', description: 'cc ccccccc cccccc ccc' },
    { title: 'Movie 3', image: 'image-4.webp', description: 'cc 444cc ccc' },
    { title: 'Movie 3', image: 'image-5.webp', description: 'cc55555cccccc ccc' },
    { title: 'Movie 3', image: 'image-6.webp', description: 'cc 66666cccccc ccc' },
];
const moviesLength = movies.length
const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const temp = 
            setCurrentIndex((prevIndex) => (prevIndex + 1) % moviesLength);
        }, 3000); // Change slide every 3 seconds

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <>
            <div className='grid grid-cols-2 border-4 border-indigo-500/100'>
                <div className='grid grid-cols-3 overflow-hidden' >
                    <div className=" flex transition-transform "
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}>
                        {movies.map((movie, index) => (
                            <div
                                key={index}
                                className=" w-full flex flex-shrink-0 "

                            >
                                <img
                                    src={movie.image}
                                    alt={movie.title}
                                    className="w-1/3 h-full bg-cover bg-center"
                                />

                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3> {movies[currentIndex].description}</h3>
                </div>
            </div>
        </>
    );
};

export default Slider;