import React, { useEffect, useState } from 'react'
import { fetchProviders } from '../../api'

const ProviderDirectory = () => {
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
  
    fetchProviders().then((res)=>{
      setPhoto(res)
    })
  }, [])


  useEffect(() => {
    console.log('photo:')
    console.log(photo)
  }, [photo])
  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-left'>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Provider Directory
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProviderDirectory
