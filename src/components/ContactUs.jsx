import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import Toast from 'react-hot-toast'
import { motion } from 'motion/react'
const ContactUs = () => {
    const key = '09f1b035-4e6c-43a0-be35-cace894d7130'
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", key);
try {
const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
   if(data.success) {
       Toast.success('Thank you for your submission!')
       event.target.reset()
   }
   else {
       Toast.error(data.message)
   }
  }
 catch (error) {
Toast.error(error.message)
 }
  };
    
  return (
    <motion.div 
    initial='hidden'
    whileInView='visible'
    viewport={{once: true}}
    transition={{staggerChildren: 0.2}}
    id='contact' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-[120px] text-gray-700 dark:text-white'>
<Title title='Reach out to us' desc='Ready to grow your brand? Let’s connect and build something exceptional together.'/> 
   
   <motion.form
   initial={{y: 30, opacity: 0}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.4}}
viewport={{once: true}}
   onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
    <div>
        <p className='mb-2 text-sm font-medium'>Your name</p>
        <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.person_icon} alt="person icon" />
            <input name='name' type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none bg-transparent' required/>
        </div>
    </div>
    <div>
        <p className='mb-2 text-sm font-medium'>Email id</p>
        <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.email_icon} alt="email icon" />
            <input name='email' type="text" placeholder='Enter your email' className='w-full p-3 text-sm outline-none bg-transparent' required/>
        </div>
    </div>
    <div className='sm:col-span-2'>       
         <p className='mb-2 text-sm font-medium'>Message</p>
         <textarea name='message' rows={8} placeholder='Enter your message' className='w-full bg-transparent p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 resize-none' required/>
    </div>
    <button type='submit' className='bg-primary hover:scale-105 duration-500 transition-all w-max flex gap-2 text-white text-sm py-3 px-10 rounded-full cursor-pointer items-center'>Submit <img src={assets.arrow_icon} alt="arrow icon" /></button>
   </motion.form>
    </motion.div>
  )
}

export default ContactUs