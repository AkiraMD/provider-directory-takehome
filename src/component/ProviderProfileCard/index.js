import React, { useState } from 'react'
import InfoCard from '../InfoCard'

import { ReactComponent as MapIcon } from '../../assets/map-icon.svg'
import { ReactComponent as LangIcon } from '../../assets/lang-icon.svg'
import { ReactComponent as EduIcon } from '../../assets/edu-icon.svg'

const ProviderProfileCard = (props) => {
  console.log(props)
  const [readLess, setReadLess] = useState(false)
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-col'>
        <div className='lg:w-4/6 mx-auto'>
          <div className='flex flex-col sm:flex-row mt-10'>
            <div className='sm:w-1/3 text-center sm:pr-8'>
              {/* conditional rendering -- if there is no img src then rendering something else */}
              <img src={props.avatarUrl} />
            </div>
            {/* text part */}
            <div className=' flex flex-col px-16 pb-10 sm:w-2/3 sm:border-l border-gray-200 sm:border-t-0 border-t pt-4 sm:mt-0 text-center sm:text-left bg-white'>
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{`Dr. ${props.name}, ${props.title}`}</h2>
              <h2 className="font-medium title-font text-gray-400 text-lg">Psychologist</h2>
              <p className={`text-left text-lightBlack ${readLess ? 'truncate w-64' : ""}`}>
                {props.bio}
              </p>
              <a className='text-indigo-500 inline-flex items-center'
                onClick={() => setReadLess(!readLess)}
              >
                Read less
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
              <hr className='mt-8 mb-8'/>
              <div>
              <InfoCard Icon={MapIcon} title='Location' desc={props.location}/>
              <InfoCard Icon={LangIcon} title='Education' desc={props.education}/>
              <InfoCard Icon={EduIcon} title='Language' desc={props.languages}/>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </section>
  )
}

export default ProviderProfileCard
