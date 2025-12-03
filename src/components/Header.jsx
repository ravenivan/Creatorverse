import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-[url(/assets/header-image.jpg)] bg-cover bg-center border-b-2 border-b-[#424A59]
    h-[600px] flex flex-col justify-center items-center text-white gap-12'>
      <h1 className='text-7xl font-[1000] text-[8vw] '>
        CREATORVERSE
      </h1>
      <nav className='mt-6'>
        <ul className='flex space-x-6 text-xl gap-12 list-none w-[700px]'>
          <li className='bg-(--light-blue) flex items-center justify-center
          uppercase tracking-[0.5px] w-full rounded-sm'>
            <Link to="/" className='px-6 py-4 text-[20px] font-bold'>
              View All Creators
            </Link>
          </li>
          <li className='bg-(--light-blue) flex items-center justify-center
          uppercase tracking-[0.5px] w-full rounded-sm'>
            <Link to="/new" className='px-6 py-4 text-[20px] font-bold'>
              Add a Creator
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
