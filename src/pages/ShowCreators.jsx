import React from 'react'
import Card from '../components/Card'

export default function ShowCreators({data}) {
  return (
    <div className='flex flex-wrap justify-start mt-[50px] mb-[50px] py-5 px-20 gap-10'>
      {
        data && data.length > 0 ? (
          data.map((creator, index) => (
            <Card key={index} creator={creator} />
          ))
        ) : (
          <h1 className='text-4xl font-bold text-(--light-blue) text-center
          h-full uppercase'>
          No Creators Yet
          </h1>
        )
      }

    </div>
  )
}
