import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../client'
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ViewCreator({ refresh }) {

  const navigate = useNavigate()
  const { id } = useParams()
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    const fetchCreator = async () => {
      const data = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single()

      setCreator(data.data)
    }

    fetchCreator()
  }, [id])

  const deleteCreator = async () => {
    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting creator:', error)
    } else {
      refresh()
      navigate(`/`)
    }
  }

  return (
    creator ? (
      <div className='flex flex-col gap-20 text-white my-30 px-72'>
        <div className='flex gap-20'>
          <div className='border-(--light-blue) border-2 w-[30%] h-[400px]'>
            <img className='w-full h-full object-cover'
            src={creator.image_url} alt={creator.name} />
          </div>

          <div className='flex flex-col gap-8 w-[70%]'>
            <h1 className='text-(--light-blue) uppercase text-5xl font-bold'>
              {creator.name}
            </h1>
            <p className='text-lg'>
              {creator.description}
            </p>
            <a className='flex items-center gap-2'
            href={creator.youtube_url} target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
              <h3>@{creator.youtube}</h3>
            </a>
            <a className='flex items-center gap-2'
            href={creator.twitter_url} target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
              <h3>@{creator.twitter}</h3>
            </a>
            <a className='flex items-center gap-2'
            href={creator.instagram_url} target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
              <h3>@{creator.instagram}</h3>
            </a>
          </div>
        </div>

        <div className='flex justify-center gap-10'>
          <Link className='bg-(--light-blue) px-20 py-3
          uppercase rounded-sm font-bold text-xl'
          to="/">
            Go Back
          </Link>
          <button className='bg-red-400 px-20 py-3
          uppercase rounded-sm font-bold text-xl cursor-pointer'
          onClick={deleteCreator}>
            Delete
          </button>
        </div>
      </div>
    ) : (
      <h1>Loading...</h1>
    )
  )
}
