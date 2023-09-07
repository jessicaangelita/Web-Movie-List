'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieData from './MovieData'


export default function MovieList() {
    const [nowShowing,setNowShowing] = useState([])
    const [comingSoon,setComingSoon] = useState([])

    useEffect(() => {
        const fetchData = async() =>{
            try {
                const response = await axios.get('https://list-movies.p.rapidapi.com/list_movies.json/false',{
                      params: {
                        limit:40
                      },
                      headers: {
                        'X-RapidAPI-Key': '8bbb07e38fmsh7c5a3909ff51ab1p1f7a0ejsnc873f9077073',
                        'X-RapidAPI-Host': 'list-movies.p.rapidapi.com'
                      }
                })
                const result = response.data.data.movies
                const filteredResult = result.filter(function (el){
                  return el.year >= 2020
                })
                console.log(filteredResult)

                const showing = filteredResult.slice(0,10)
                setNowShowing(showing)

                const coming = filteredResult.slice(11,40)
                setComingSoon(coming)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])


  return (
    <div className="p-5 mx-10 h-full-screen">
      <div className='m-1'>
        <div className="w-full  text-green-800  border-gray-300  pt-2">
          <h1 className="font-bold text-2xl  underline underline-offset-[10px] decoration-4">Now Playing</h1>
        </div>
        <MovieData movies={nowShowing}/>
      </div>
      <div className='m-1'>
        <div className="w-full  text-green-800  border-gray-300  pt-2">
          <h1 className="font-bold text-2xl  underline underline-offset-[10px] decoration-4">Coming Soon</h1>
        </div>
        <MovieData movies={comingSoon}/>
      </div>
    </div>

  )
}
