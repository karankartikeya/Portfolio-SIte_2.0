import React from 'react'
import Image from 'next/image'

type Props = {}

export default function Imagedata({}: Props) {

    const myLoader = ({ src, width, quality }) => {
        return `https://karankartikeya.netlify.app/images/kk7.jpg`
      }
    
  return (
    <Image
        priority
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        loader={myLoader}
        src=" "
        alt = "picture of hero"
        width={150}
        height={150}
    />
  )
}