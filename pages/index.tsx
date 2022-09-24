import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Create Next App</title>
      </Head>

      {/* Header */}
        <Header/>

      {/* Hero */}
      <section id='hero'>
        <Hero/>
      </section>

      {/* Header */}

      {/* Header */}

      {/* Header */}

      {/* Skills */}

      {/* Contact Us */}
    </div>
  )
}

export default Home
