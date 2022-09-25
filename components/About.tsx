import { MotionConfig } from 'framer-motion'
import React from 'react'
import Imagedata from './Imagedata'
import {motion} from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-wd-7xl px-10 justify-evenly mx-auto items-center scroll-auto'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-3xl'>About</h3>
        
        <motion.img
            initial= {{
                x : -200,
                opacity: 0
            }}
            transition = {{
                duration: 1.2,

            }}
            whileInView = {{opacity:1 ,x: 0}}
 
            src='https://karankartikeya.netlify.app/images/kk7.jpg'
            className='-mb-20 md:mb-0flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] '
        />


        <div className='space-y-10 px-0 md:px-10'>
            <h3 className='text-4xl font-semibold'> Here is a <span className='dotted-underline'>little</span> background</h3>
            <p className='text-base'>
            This is Karan Kartikeya, someone who can be of great help to you.
I am pursuing B.tech CS from GRAPHIC ERA HILL UNIVERSITY DEHRADUN. I am a passionate Full Stack Web Developer  . I started building sites in 2019. I work as a freelancer on many portals like Upwork , Freelancer and Internshala.

I like working with BOOTSTRAP. I have good command over HTML, CSS, BOOTSTRAP, JAVASCRIPT and many more. I am also well versed with the Backend language. I am thorough with NodeJs, MongoDb and ExpressJs. I am currently involved in learning Ruby on rails. I mainly deploy my sites through NETLIFY and HEROKU.

I believe in challenges because they make better projects best. Call me a tech nerd but that's who I am. If you come up with something interesting, I am always ready to share my views and work on them.
            </p>
        </div>
    </motion.div>
  )
}