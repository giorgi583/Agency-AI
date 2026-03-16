import React from 'react'
import { motion } from 'motion/react'
const WorkCard = ({img, title, desc, index}) => {
  return (
    <motion.div
    initial={{y: 30, opacity: 0}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: index*0.2}}
viewport={{once: true}}
    className='max-w-xs flex flex-col gap-2 transition-all cursor-pointer hover:scale-105 duration-500'>
<div><img src={img} alt="" className='w-full rounded-xl' /></div>
<h3 className='font-semibold text-lg'>{title}</h3>
<p className='text-sm opacity-60 max-w-[240px]'>{desc}</p>
    </motion.div>
  )
}

export default WorkCard