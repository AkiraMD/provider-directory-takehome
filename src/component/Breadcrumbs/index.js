import React from 'react'

export const Breadcrumbs = () => {
  return (
    <nav className='flex ml-8' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        <li className='inline-flex items-center'>
          <a
            href='/'
            className='text-gray-700 hover:text-gray-900 inline-flex items-center'
          >
            Home
          </a>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs
