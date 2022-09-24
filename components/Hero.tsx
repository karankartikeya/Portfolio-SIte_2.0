import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import image from 'next/image';
import Imagedata from './Imageback';



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
        <h1>
            {text}
            <Cursor cursorColor='yellow'></Cursor>
        </h1>
    </div>
  )
}