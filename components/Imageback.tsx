import React from 'react'
import Image from 'next/image'

type Props = {}

export default function Imagedata({}: Props) {

    const myLoader = ({ src, width, quality }) => {
        return `https://images.unsplash.com/photo-1662990502014-9b73af9383d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80`
      }
    
  return (
    <Image
        loader={myLoader}
        src=" "
        alt = "picture of hero"
        width={100}
        height={100}
    />
  )
}