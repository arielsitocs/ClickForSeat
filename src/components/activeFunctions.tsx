"use client"

import ShowTypes from '../types/show';

import ActiveShow from './activeShow';
import Loader from './ui/loader';

import { useState, useEffect } from 'react';

export default function activeFunctions({ setSelectedShow, selectedShow }: any) {
    const [activeFunctions, setActiveFunctions] = useState([]);
    const [loading, setLoading] = useState(true);

    const getActiveFunctions = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/api/shows/getAll`)
            if (response.ok) {
                const data = await response.json()
                setActiveFunctions(data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getActiveFunctions()
    }, [])

    return (
        <div className='hidden md:flex flex-col min-w-[250px] md:w-[350px] w-full h-fit px-3 py-6 bg-darkest-gray rounded-[5px]'>
            <div className='flex items-center justify-center mb-3'>
                <hr className='border-gray-text flex-1 border-2 rounded-[3px]' />
                <h1 className='text-gray-text font-bold ml-3 mr-3 text-md md:text-xl'>Funciones Activas</h1>
                <hr className='border-gray-text flex-1 border-2 rounded-[3px]' />
            </div>
            <div className='w-full'>
                <Loader status={loading} setStatus={setLoading} fullScreen={false} />
                {
                    activeFunctions.map((show: ShowTypes, index: number) => {
                        return (
                            <ActiveShow
                                key={show.showid}
                                index={index + 1}
                                show={show}
                                setSelectedShow={setSelectedShow}
                                isSelected={selectedShow?.showid === show.showid}
                            />
                        )
                    })
                }
            </div>
            <hr className='border-gray-text border-2 rounded-[3px] mt-auto' />
        </div>
    )
}