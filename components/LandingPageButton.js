"use client"
import { useRouter } from 'next/navigation'
import React from 'react';

const LandingPageButton = () => {
    const router = useRouter()
    return (
        <div className=' flex items-center justify-center p-2'>
            <button className='bg-blue-500 rounded-lg text-white p-2' onClick={()=>router.push('/landing')}>Landing page link</button>
        </div>
    );
};

export default LandingPageButton;