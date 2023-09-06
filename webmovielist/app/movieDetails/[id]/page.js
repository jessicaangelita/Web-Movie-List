'use client'
import React from 'react'
import Header from '../../components/Header'
import MovieDetail from '@/app/components/MovieDetail'
import { useParams } from 'next/navigation'

export default function movieDetails() {
  const params =  useParams()
  const pathId = params.id.toString()

  return (
    <div>
      <Header/>
      <MovieDetail pathId={pathId} />
    </div>
  )
}
