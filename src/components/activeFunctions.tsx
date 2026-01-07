"use client"

import ShowTypes from '../types/show';

import ActiveShow from './activeShow';

export default function activeFunctions({ shows, setSelectedShow, selectedShow }: any) {
    return (
        <div className='hidden md:flex flex-col min-w-[250px] md:w-[350px] w-full h-fit px-3 py-6 bg-darkest-gray rounded-[5px]'>
            <div className='flex items-center justify-center mb-3'>
                <hr className='border-gray-text flex-1 border-2 rounded-[3px]' />
                <h1 className='text-gray-text font-bold ml-3 mr-3 text-md md:text-xl'>Funciones Activas</h1>
                <hr className='border-gray-text flex-1 border-2 rounded-[3px]' />
            </div>
            <div className='w-full'>
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
            <hr className='border-gray-text border-2 rounded-[3px] mt-auto' />
        </div>
    )
}