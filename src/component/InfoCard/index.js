import React from 'react'

export const InfoCard = ({Icon, title, desc}) => {
  return (
    <div class="flex flex-wrap -m-4">
      <div class="py-6">
        <div class="flex sm:flex-row flex-col">
            <div class="w-12 px-2 inline-flex items-center justify-center bg-indigo-100 mx-4">
            <Icon />
            </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium">{title}</h2>
            <p class="leading-relaxed text-base">{desc}</p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default InfoCard