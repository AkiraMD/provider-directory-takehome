import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProviderDirectoryCard = ({
  id,
  name,
  title,
  avatarUrl,
  availability,
  bio,
}) => {
  let navigate = useNavigate();

  return (
    <button class="w-2/3 p-4" type="button" onClick={() => navigate(`/mentalWellness/provider/${id}`)} aria-describedby="button-desc">
      <p style={{visibility: 'hidden'}} id='button-desc'>Click this button to pull out more information about this provider.</p>
      <div class="border border-gray-200 p-6 rounded-lg bg-white flex flex-col">
        <div class="flex flex-row">
          <div class="mr-4 w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            {avatarUrl ? (
              <img class="inline object-cover w-16 h-16 mr-2 rounded-full" src={avatarUrl} alt="Profile image" />
            ) : (
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            )}
          </div>
          <div class="flex flex-col">
            <h2 class="text-lg text-gray-900 font-medium title-font">{`Dr. ${name}, ${title}`}</h2>
            <p class="text-sm text-left text-gray-400">{title}</p>
          </div>
        </div>
        <div class="text-left text-lightBlack truncate w-auto" aria-hidden='true'>
          {bio}
        </div>
        <button class="w-1/3 h-auto bg-gray-300 hover:bg-gray-400 text-white text-sm py-1 px-4 rounded-full mt-3">
          {`Available ${availability}`}
        </button>
      </div>
    </button>
  )
}

export default ProviderDirectoryCard