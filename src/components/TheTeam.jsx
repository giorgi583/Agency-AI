import React from 'react'
import Title from './Title'
import { motion } from 'motion/react'
import { teamData } from '../assets/assets'
const TheTeam = () => {
  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{once: true}}
    id='Team' className='flex flex-col items-center gap-7 pt-[120px] px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white'>
<Title title='Meet the team' desc='A passionate team of digital experts dedicated to your
brand’s success.'/>
<div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-20'>
    {teamData.map((team, index) => (
        <motion.div
        initial={{y: 20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.4, delay: index*0.1}}
        viewport={{once: true}}
        key={index} className='flex max-sm:flex-col items-center gap-5 bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-105 duration-400 transition-all'>
            <img src={team.image} alt="" className='w-10 h-10 rounded-full'/>
        <div className='flex flex-col items-center'>
            <h3 className='text-sm font-medium mb-2'>{team.name}</h3>
            <p className='text-xs opacity-60'>{team.title}</p>
        </div>
        </motion.div>
    ))}
</div>
    </motion.div>
  )
}

export default TheTeam