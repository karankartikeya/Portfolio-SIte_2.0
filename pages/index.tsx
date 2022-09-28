import { readv } from 'fs'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { Experience, PageInfo, Skill, Project, Social } from '../typing'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo,
  experience: Experience[],
  skills: Skill[],
  projects: Project[],
  socials: Social[]
}

const Home= ({pageInfo,experience, skills, projects,socials}:Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-500/40 scrollbar-thumb-[#f7ab0a]/40'>
      <Head>
        <title>Create Next App</title>
      </Head>

      {/* Header */}
        <Header socials={socials} />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* about */}
      <section id='about' className='snap-center' >
        <About pageInfo={pageInfo}/>
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience/>
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


export const getStaticProps: GetStaticProps<Props> = async() => {
        const pageInfo: PageInfo = await fetchPageInfo();
        const experience: Experience[] = await fetchExperiences();
        const skills: Skill[] = await fetchSkills();
        const projects:Project[] = await fetchProjects();
        const socials: Social[] = await fetchSocials();


        return{
          props:{
            pageInfo,
            experience,
            skills,
            projects,
            socials
          },
          
          //This ensures that NextJs will re-genrate the page data after every 10 seconds to be updated
          revalidate:10,
        }
}