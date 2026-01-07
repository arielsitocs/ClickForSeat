"use client"

import ShowTypes from '../types/show';

import ActiveShow from './activeShow';

export default function activeFunctions({ shows, setSelectedShow, selectedShow, state }: any) {
  return (
    state ? (
      <div className='flex flex-col absolute justify-center items-center w-[350px] rounded-br-[5px] h-fit px-2 py-3 bg-transparent-darkest-gray'>
        <div className='flex items-center w-full justify-center mb-3'>
          <h1 className='text-gray-text font-bold ml-3 mr-3 text-md md:text-xl'>Funciones Activas</h1>
        </div>
        <div className='w-[90%]'>
          {
            shows.map((show: ShowTypes, index: number) => {
              return (
                <ActiveShow
                  key={show.id}
                  index={index + 1}
                  show={show}
                  setSelectedShow={setSelectedShow}
                  isSelected={selectedShow?.id === show.id}
                />
              )
            })
          }
        </div>
      </div>
    ) : null
  )
}