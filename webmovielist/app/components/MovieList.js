'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Tempimg from '../../public/medium-cover.jpg'
import Link from 'next/link'

export default function MovieList() {
    const [movies,setMovies] = useState([])

    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response = await axios.get('https://list-movies.p.rapidapi.com/list_movies.json/false',{
                      headers: {
                        'X-RapidAPI-Key': 'd619e607f0mshb718ae61f46c87fp1ecd89jsn6ebc21184024',
                        'X-RapidAPI-Host': 'list-movies.p.rapidapi.com'
                      }
                })
                setMovies(response.data.data.movies)
                console.log(response.data.data.movies)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])


  return (
    <div className="p-5 mx-10 h-full-screen">
      <div className="w-full  text-green-800  border-gray-300  pt-2">
        <h1 className="font-bold text-2xl  underline underline-offset-[10px] decoration-4">Now Playing</h1>
      </div>
      <div className='grid grid-cols-4 xl:grid-cols-4 gap-4 py-5'> 
        {(() => {
            if (movies && movies.length >0) {
              return movies.map((item) => (
                <Link href={'/movieDetails/'+item.id}>
                    <div className=' rounded-lg  w-64 p-2 mb-5'>
                        <Image src={item.medium_cover_image} width={230} height={345} className='rounded-lg hover:opacity-75 drop-shadow-xl my-3 mx-1 shadow-xl' alt='temp'/>
                        <h1 className='font-medium text-lg'>{item.title}</h1>
                        <h1 className=' text-sm text-yellow-600'>Rated {item.rating}</h1>
                    </div>
                </Link>
                
              ))}
          }) ()}
      </div>
    </div>

  )
}
