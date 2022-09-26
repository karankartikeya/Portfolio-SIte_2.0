import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function Projects({}: Props) {
  const projects =[1,2,3,4,5];
  return (
    <motion.div 
    initial={{opacity:0}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    className='h-screen relative flex overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project,i)=>(
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                <motion.img 
                initial={{y:-300,
                opacity:0}}
                transition={{duration:1.2}}
                whileInView={{opacity:1,
                y:0}}
                src='https://karankartikeya.netlify.app/images/kk7.jpg' alt=''/>

                <motion.div 
                initial={{opacity:0,
                    x:-300
                }}
                transition={{duration:1.2}}
                whileInView={{opacity:1,x:0}}
                className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl text-center font-semibold'>Case Study {i+1} of {projects.length} </h4>
                    <p className='text-lg text-center md:text-left '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat rhoncus erat, at feugiat sem facilisis sed. Ut sed nisl quis ligula suscipit molestie.
                    </p>
                </motion.div>
            </div>
            
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects