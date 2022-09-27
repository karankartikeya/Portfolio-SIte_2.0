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
            <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='animate-pulse h-7 w-7 text-yellow-400'/>
                <p className='text-2xl'>+917409130005</p>
            </div>

            
            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='animate-pulse h-7 w-7 text-yellow-400'/>
                <p className='text-2xl' ><a href='mailto:karankartikey72@gmail.com'>Karankartikey72@gmail.com</a></p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='animate-pulse h-7 w-7 text-yellow-400'/>
                <p className='text-2xl'>123 developer</p>
            </div>


            </div>

            <form className='flex flex-col mx-auto space-y-2 w-fit'>
            <div className='flex space-x-2 rounded-full'>
                <input className='contactInput' type="text" placeholder='Name'/>
                <input className='contactInput' type="email" placeholder='Email'/>
            </div>

            <input className='contactInput' type="text" placeholder='Subject' />

            <textarea className='contactInput' placeholder='Message'/>
            <button className='bg-[#f7ab0a] rounded-md py-5 px-10 text-black font-bold text-lg'>Submit</button>
        </form>
        </div>

        {/* CONTACT ME FORM */}
        
    </div>
  )
}

export default Contact