import React, { useEffect, useState } from 'react'
import { fetchProviders } from '../../api'
import ProviderDirectoryCard from '../../component/ProviderDirectoryCard'
const ProviderDirectory = () => {
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    fetchProviders().then((res) => {
      setProviders(res)
    })
  }, [])

  return (
    <div>
      <div className='pt-4 mb-8'>
        <div>
          <div className='lg:text-left'>
            <div className='bg-white px-16 py-16 mb-8'>
            <p className='text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Browse our providers
            </p>
            <p className='mt-2 text-gray-500 text-base leading-8 text-gray-900'>
              Mental Wellness
            </p>
            <div className='mt-12'>
              <button class="bg-transparent text-blue-dark font-semibold py-2 px-4 border border-blue rounded-xl" disabled={true}>ON</button>
            </div>
            </div>
            {providers &&
              providers.map((provider) => {
                return (
                  <ProviderDirectoryCard
                    id={provider.id}
                    name={provider.name}
                    title={provider.title}
                    avatarUrl={provider.avatarUrl}
                    availability={provider.availability}
                    location={provider.location}
                    education={provider.education}
                    languages={provider.languages}
                    bio={provider.bio}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProviderDirectory
