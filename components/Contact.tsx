import React from 'react'

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

            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Contact