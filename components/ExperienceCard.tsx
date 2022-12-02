import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typing'

type Props = {
  experience: Experience
}

export default function ExperienceCard({experience}: Props) {
  return (
    <article key={experience._id} className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{y:-100, opacity:0}}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        className='w-32 h-32 rounded-full xl:w-[200] xl:h-[200px]'
        src={urlFor(experience?.companyImage).url()}/>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{experience.company}</h4>
            <p className='font-bold text-2xl mt-1'> {experience.jobTitle}</p>
            <div className='flex space-x-2 my-2'>
            {experience.technologies.map((technology)=>(
            <Image src={urlFor(technology.image).url()} alt='exp' className='h-10 w-10 rounded-full ' width={200} height={200}/>  
            ))}

            </div>
            <p className='uppercase py-2 text-gray-300'> 
                {new Date(experience.dateStarted).toDateString()} - {" "}
                {experience.isCurrentlyWorkingHere ? "Present": new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
              {experience.points.map((point,i)=>(
                <li key={i}>{point}</li>
              ))}
            </ul>
        </div>

    </article>
  )
}