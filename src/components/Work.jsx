import React from 'react'
import { motion } from 'motion/react'
import assets from '../assets/assets'
// components
import Title from './Title'
import WorkCard from './WorkCard'
const Work = () => {
    const workData = [
        {
            img: assets.work_mobile_app,
            title: 'Mobile app marketing', 
            desc: 'We turn bold ideas into powerful digital solutions that connect...'
        },
         {
            img: assets.work_dashboard_management,
            title: 'Dashboard management', 
            desc: 'We turn bold ideas into powerful digital solutions that connect...'
        },
         {
            img: assets.work_fitness_app,
            title: 'Fitness app promotion', 
            desc: 'We turn bold ideas into powerful digital solutions that connect...'
        }
    ]
  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{once: true}}
    transition={{staggerChildren: 0.2}}
    id='our-work' className='flex flex-col items-center gap-7 pt-[120px] px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white'>
<Title title='Our latest work' desc='Browse our portfolio of innovative digital projects that showcase creativity, performance, and results.'/>
<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl'>
    {workData.map((work, index) => (
        <WorkCard key={index} img={work.img} title={work.title} desc={work.desc} index={index}/>
    ))}
</div>
    </motion.div>
  )
}

export default Work