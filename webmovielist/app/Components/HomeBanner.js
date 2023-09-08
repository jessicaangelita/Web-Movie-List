'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function HomeBanner () 
{
    const banners = [
        {ref: '/banner-1.jpg'},
        {ref: '/banner-2.jpg'},
        {ref: '/banner-3.jpg'},
        {ref: '/banner-4.jpg'}
    ]

    const [bannerImg,setBannerImg] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            setBannerImg(index => ((index+1) >= banners.length ? 1 : index+1))
        },5000)

        return () => clearInterval(interval)
    },[])

  return (
    <div className='max-w-[950px] h-[550] w-full m-auto py-16 px-4 relative'>
            <Image src={banners[bannerImg].ref} width={925} height={527} className='w-full h-full rounded-2xl bg-center bg-cover shadow-xl' alt='banner'/>
    </div>
  )
}
