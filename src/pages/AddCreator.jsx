import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client'

export default function AddCreator({refresh}) {

  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [description, setDescription] = useState('')
  const [youtube, setYoutube] = useState('')
  const [twitter, setTwitter] = useState('')
  const [instagram, setInstagram] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error } = await supabase
      .from('creators')
      .insert([{
        name,
        image_url: imageURL,
        description,
        youtube,
        twitter,
        instagram
      }])
    
    if (error) {
      console.error('Error adding creator:', error)
    } else {
      refresh()
      navigate(`/`)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center text-white
    mt-[50px] mb-[50px] py-5'>
      <form action="" className='flex flex-col gap-6 w-[650px]'>
        <label className='flex flex-col gap-3'>
          <h3 className='text-xl'>Creator Name</h3>
          <input className='bg-white text-black p-4 w-full h-15 rounded-md'
            type="text" value={name}
            onChange={(e) => setName(e.target.value)}
            id="name" />
        </label>

        <label className='flex flex-col gap-3'>
          <span>
            <h3 className='text-xl'>Image</h3>
            <h5 className='text-xs italic'>
              Provide a link to an image of your creator. Be sure to include the http://
            </h5>
          </span>
          <input className='bg-white text-black p-4 w-full h-15 rounded-md'
            type="text" value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            id="imageURL" />
        </label>

        <label className='flex flex-col gap-3'>
          <span>
            <h3 className='text-xl'>Description</h3>
            <h5 className='text-xs italic'>
              Provide a description of the creator. Who are they? What makes them interesting?
            </h5>
          </span>
          <input className='bg-white text-black p-4 w-full h-27 rounded-md'
            type="text" value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description" />
        </label>

        <h2 className='text-2xl text-(--light-blue) font-bold uppercase'>
          Social Media Links
        </h2>

        <h5 className='text-xs -mt-2 italic'>
          Provide at least one of the creator's social media links.
        </h5>

        <label className='flex flex-col gap-2'>
          <span>
            <span className='flex items-center gap-2'>
              <FontAwesomeIcon className='text-2xl' icon={faYoutube} />
              <h3 className='text-xl'>Youtube</h3>
            </span>
            <h5 className='text-xs italic'>
              The creator's YouTube handle (without the @)
            </h5>
          </span>
          <input className='bg-white text-black p-4 w-full h-15 rounded-md'
            type="text" value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
            id="youtube" />
        </label>

        <label className='flex flex-col gap-2'>
          <span>
            <span className='flex items-center gap-2'>
              <FontAwesomeIcon className='text-2xl' icon={faTwitter} />
              <h3 className='text-xl'>Twitter</h3>
            </span>
            <h5 className='text-xs italic'>
              The creator's Twitter handle (without the @)
            </h5>
          </span>
          <input className='bg-white text-black p-4 w-full h-15 rounded-md'
            type="text" value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            id="twitter" />
        </label>

        <label className='flex flex-col gap-2'>
          <span>
            <span className='flex items-center gap-2'>
              <FontAwesomeIcon className='text-2xl' icon={faInstagram} />
              <h3 className='text-xl'>Instagram</h3>
            </span>
            <h5 className='text-xs italic'>
              The creator's Instagram handle (without the @)
            </h5>
          </span>
          <input className='bg-white text-black p-4 w-full h-15 rounded-md'
            type="text" value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            id="instagram" />
        </label>

        <button className='bg-(--light-blue) text-white p-3 w-full text-2xl 
        font-bold rounded-sm uppercase cursor-pointer'
          type="submit" onClick={handleSubmit}>
          Submit
        </button>

      </form>
    </div>
  )
}
