import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
  };

function Contact({}: Props) {
    const { 
        register, handleSubmit 
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formdata) => {
        window.location.href = `mailto:karankartikey72@gmail.com?subject=${formdata.subject}&body=Hi, My name is ${formdata.name}. ${formdata.message} 
        
        Regards`
    };

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

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mx-auto space-y-2 w-fit'>
            <div className='flex space-x-2 rounded-full'>
                <input {...register('name')} className='contactInput' type="text" placeholder='Name'/>
                <input {...register('email')} className='contactInput' type="email" placeholder='Email'/>
            </div>

            <input {...register('subject')} className='contactInput' type="text" placeholder='Subject' />

            <textarea {...register('message')} className='contactInput' placeholder='Message'/>
            <button className='bg-[#f7ab0a] rounded-md py-5 px-10 text-black font-bold text-lg'>Submit</button>
        </form>
        </div>

        {/* CONTACT ME FORM */}
        
    </div>
  )
}

export default Contact