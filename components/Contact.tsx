import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
type Props = {}

function Contact({}: Props) {
  return (

    <div className='flex flex-col relative h-screen max-w-7xl px-10 justify-evenly items-center text-center md:text-left md:flex-row mx-auto '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
            COntact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center '>
                I have got what you want bro!!!
            </h4>

            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='animate-pulse h-7 w-7 text-yellow-400'/>
                <p className='text-2xl'>+917409130005</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='animate-pulse h-7 w-7 text-yellow-400'/>
                <p className='text-2xl'>123 developer</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='animate-pulse h-7 w-7 text-yellow-400'/>
                <p className='text-2xl' ><a href='mailto:karankartikey72@gmail.com'>Karankartikey72@gmail.com</a></p>
            </div>
        </div>
    </div>
  )
}

export default Contact