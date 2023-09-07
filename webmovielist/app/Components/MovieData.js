import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MovieData({movies}) {
  return (
    <div className='grid grid-cols-4 xl:grid-cols-5 gap-4 py-5'> 
        {(() => {
            if (movies && movies.length >0) {
              return movies.map((item) => (
                <Link href={'/movieDetails/'+item.id} >
                    <div className=' rounded-lg  w-64 p-2 mb-5'>
                        <Image src={item.medium_cover_image} width={230} height={345} className='rounded-lg hover:opacity-75 drop-shadow-xl my-3 mx-1 shadow-xl' alt='loading'  />
                        <h1 className='font-medium text-lg'>{item.title}</h1>
                        <h1 className=' text-sm text-yellow-600'>Rated {item.rating}</h1>
                    </div>
                </Link>
              ))}
          }) ()}
    </div>
  )
}
