'use client'
import React, { useEffect, useState } from 'react'
import TempImg from '@/public/medium-cover.jpg'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'

export default function MovieDetail({pathId}) {
    const [details,setDetails] = useState([])

    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response = await axios.get('https://list-movies.p.rapidapi.com/list_movies.json',{
                      params: {
                        limit:40
                      },
                      headers: {
                        'X-RapidAPI-Key': '8bbb07e38fmsh7c5a3909ff51ab1p1f7a0ejsnc873f9077073',
                        'X-RapidAPI-Host': 'list-movies.p.rapidapi.com'
                      }
                })
                const findMovie = response.data.data.movies.find((item) =>item.id==pathId)

                setDetails(findMovie)
                console.log(findMovie)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])

  return (
    <div className='p-10 m-5'>
        <h1 className='font-medium text-2xl text-yellow-600'>Now Showing</h1>
        <div className='flex my-5'>
            <div>
                <Image src={details.medium_cover_image} width={300} height={345} className='rounded-lg  drop-shadow-xl my-5  shadow-xl' alt='loading' priority={true} />
                <Link href={'https://www.youtube.com/watch?v='+details.yt_trailer_code}>
                <button className='bg-green-800 shadow-lg rounded-lg p-3 text-orange-100 font-medium w-full hover:bg-green-700 mb-5' >Watch Trailer</button></Link>
                <button className='bg-orange-200 shadow-lg rounded-lg p-3 text-green-800 font-medium w-full hover:bg-orange-300' >Buy Tickets</button>
            </div>
            <div className='p-5 mt-5 mx-5 w-4/5 bg-white rounded-xl shadow-lg'>
                <h1 className='font-bold text-3xl text-green-800 mb-5'>{details.title}</h1>
                <p className='font-medium'>Genre&emsp;: {details.genres+[]}</p>
                <p className='font-medium'>Rating&emsp;: {details.rating}</p>
                <p className='font-medium'>Runtime &emsp;: {details.runtime} minutes</p>
                <h2 className='font-bold text-xl text-yellow-600 mt-5'>Synopsis</h2>
                <p className='font-medium text-justify'>{!details.synopsis? details.title + ' synopsis':details.synopsis}</p>
            </div>
        </div>
    </div>
  )
}
