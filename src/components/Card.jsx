import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCircleInfo, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ creator }) {
  return (
    <div className={`relative border-white border-2 text-white
    w-[calc(50%-20px)] h-[400px] bg-cover bg-center font-[Poppins]`}
    style={{backgroundImage: `url(${creator.image_url})`}}
    >

      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="pt-20 pb-10 px-10
      flex flex-col z-20 relative">

        <div className='flex justify-between items-center mb-5'>
          <h3 className='uppercase text-3xl text-(--light-blue) font-bold'>
            {creator.name}
          </h3>

          <span className='flex justify-center items-center gap-2'>
            <Link to={`/creator/${creator.id}`}>
              <FontAwesomeIcon icon={faCircleInfo} />
            </Link>
            <Link to={`/edit/${creator.id}`}>
              <FontAwesomeIcon icon={faPen} />
            </Link>
          </span>
        </div>

        <div className='flex gap-1'>
          <a href={`https://youtube.com/${creator.youtube}`} target="_blank">
            <FontAwesomeIcon className='text-3xl' icon={faYoutube} />
          </a>
          <a href={`https://twitter.com/${creator.twitter}`} target="_blank">
            <FontAwesomeIcon className='text-3xl' icon={faTwitter} />
          </a>
          <a href={`https://instagram.com/${creator.instagram}`} target="_blank">
            <FontAwesomeIcon className='text-3xl' icon={faInstagram} />
          </a>
        </div>

        <h4 className='mt-5'>
          {creator.description}
        </h4>

      </div>
    </div>
  )
}
