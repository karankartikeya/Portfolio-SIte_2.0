import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import image from 'next/image';
import Imagedata from './Imagedata';
import Link from 'next/link';



type Props = {}

export default function Hero({}: Props) {

    const [text, count] = useTypewriter({
        words:[
            "Hey there!!, My Name is Karan Kartikeya", 
            "Designer", 
            "Creator"
        ],
        loop : true,
        delaySpeed:100,
        typeSpeed:70,
        deleteSpeed:80,
    }) ;


  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <Imagedata/>
        <div className='z-20'>
            <h1 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>SOftware Engineer</h1>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='yellow'></Cursor>
            </h1>
            <div className='mt-4'>
                <Link href='#about'>
                <button className='heroButton'>About</button>
                </Link>

                <Link href='#experience'>
                <button className='heroButton'>Experience</button>
                </Link>

                <Link href='#projects'>
                <button className='heroButton'>Projects</button>
                </Link>

                <Link href='#skills'>
                <button className='heroButton'>Skills</button>
                </Link>

               

            </div>
        </div>
    </div>
  )
}