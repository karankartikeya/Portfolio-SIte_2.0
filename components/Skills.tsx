import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div className='flex flex-col relative h-screen overflow-hidden text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'> Hover over skills to see proficiency </h3>
      <div className='grid grid-cols-4  gap-5'>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        
      </div>
    </motion.div>
  )
}