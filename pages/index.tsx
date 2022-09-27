import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0'>
      <Head>
        <title>Create Next App</title>
      </Head>

      {/* Header */}
        <Header/>

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      {/* about */}
      <section id='about' className='snap-center'>
        <About/>
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <Experience/>
      </section>
      {/* Skills */}
      <section id='skills' className='snap-center'>
        <Skills/>
      </section>

      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects/>
      </section>

      {/* Contact Us */}
      <section id='contact' className='snap-center'>
        <Contact/>
      </section>
    </div>
  )
}

export default Home
