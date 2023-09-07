'use client'
import React from 'react'
import Header from '../../Components/Header'
import MovieDetail from '@/app/Components/MovieDetail'
import { useParams } from 'next/navigation'

export default function movieDetails() {
  const params =  useParams()
  const pathId = params.id.toString()

  return (
    <div className='bg-slate-50 min-h-screen'>
      <Header/>
      <MovieDetail pathId={pathId} />
    </div>
  )
}
